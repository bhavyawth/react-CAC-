import React, { useId } from 'react';

function Select(
  {
    options = [],
    label,
    className = '',
    ...props
  },
  ref
) {
  const id = useId();

  return (
    <div className="w-full space-y-1">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700 tracking-wide"
        >
          {label}
        </label>
      )}
      <select
        id={id}
        ref={ref}
        className={`
          w-full px-4 py-2 rounded-xl border text-sm text-gray-800
          bg-white border-gray-300 shadow-sm
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
          transition duration-200 ease-in-out
          ${className}
        `}
        {...props}
      >
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default React.forwardRef(Select);
