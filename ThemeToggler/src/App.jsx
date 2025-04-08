import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/Theme'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const darkTheme = () => {
    setThemeMode("dark");
  }
  const lightTheme = () => {
    setThemeMode("light");
  }

  //actual change in the ui

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode])

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>  
      <div className="flex items-center justify-center h-screen w-screen">
        <div className="max-w-sm w-full">
          <div className="flex justify-end mb-4">
              <ThemeBtn />
          </div>

          <div>
              <Card />
          </div>
        </div>
      </div>
    </ThemeProvider> 
);



}

export default App
