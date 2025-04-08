import { useCallback, useContext, useEffect, useRef, useState } from 'react'


function App() {
  const [length, setLength] = useState(7)
  const [number, setNumber] = useState(false)
  const [characters, setCharacters] = useState(false)
  const [pass, setPass] = useState("")
  let passRef = useRef(null)
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) str += "0123456789"
    if (characters) str += "$%#@!^&*_+-=~`/.,"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);
    } 
    setPass(pass)
  }, [length, number,characters, setPass])
  
  useEffect(() => {
    passwordGenerator()
  }, [length, number,characters, setPass, passwordGenerator])

  

  const passwordCopy = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(pass)
    const element = document.getElementById('copy-button')
    element.innerText = "Copied!"
    setTimeout(() => {
      element.innerText = "Copy"
    }, 2000);
  }, [pass])
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-full max-w-max rounded-lg px-6 py-8 bg-gray-500 text-orange-500">
          <h1 className="text-white text-center mb-6 text-2xl">Password Generator</h1>
          <div className='flex items-center'>
          <input
            type="text"
            value={pass}
            className="outline-none py-2 px-4 bg-white my-4 rounded-l-2xl text-gray-800
            w-full"
            placeholder="Password"
            readOnly
            ref={passRef}
          />
          <button className='bg-blue-600 rounded-r-2xl text-white
          p-2 px-6 outline-none hover:bg-blue-500 active:bg-blue-800'
          onClick={passwordCopy}
          id = "copy-button"
          >
            Copy
          </button>
          </div>
          <div
            className='flex gap-x-3'
          >
            <div className='flex items-center gap-x-1.5'>
            <input 
              type='range'
              min={6}
              max={20}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {
                setLength(e.target.value)
              }}
            />
            <label className='text-amber-500'>
              Length: {length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input
                id='numCheck'
                type='checkbox'
                defaultChecked={number}
                className='cursor-pointer'
                onChange={() => {
                  setNumber((prev) => !prev)
                }}
              />
              <label htmlFor='numCheck' className='text-amber-500'>Numbers</label>
            </div>

            <div className='flex items-center gap-x-1' >
              <input
                id='charCheck'
                type='checkbox'
                value={number}
                className='cursor-pointer'
                onChange={() => {
                  setCharacters((prev) => !prev)
                }}
              />
              <label htmlFor='charCheck' className='text-amber-500'>Characters</label>
            </div>

            
          </div>
          
        </div>
      </div>
    </>
  );
  
  
  
}

export default App
