import { useId } from "react";

function InputBox({
    label,
    currency,
    amount,
    onCurrencyChange,
    onAmountChange,
    amountDisabled = false,
    currencyDisabled = false,
    currencyOptions =[],
    selectCurrency = "USD", 
    className = "",
}) {
   const amountInputId = useId();

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label  className="text-black/40 mb-2 inline-block"
                htmlFor={amountInputId}>
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisabled}
                    value={amount}
                    onChange={(e) => {
                        let value = e.target.value;
                        if (value === "") {
                          onAmountChange("");
                        } else {
                          onAmountChange(Number(value));
                        }
                      }}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    value={selectCurrency}
                    onChange={(e) => {onCurrencyChange && 
                        onCurrencyChange(e.target.value)}}
                        disabled={currencyDisabled}
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    
                >
                    
                        {currencyOptions.map((currency)=>(
                            <option 
                            key={currency}
                            value={currency}
                            >
                                {currency}
                            </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
