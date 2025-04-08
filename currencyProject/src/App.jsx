import { useActionState, useEffect, useState } from 'react'
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = useEffect(() => {
    setConvertedAmount((amount * currencyInfo[to]).toFixed(4))
  },[amount, to, from, convertedAmount])

  return (
      <div
          style={{
              width: "100%",
              height: "100vh",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage: `url('https://4kwallpapers.com/images/wallpapers/forex-trading-3440x1440-13938.jpg')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
          }}
      >
          <div style={{ width: "100%" }}>
              <div
                  style={{
                      width: "100%",
                      maxWidth: "28rem", // Equivalent to max-w-md
                      margin: "0 auto",
                      border: "1px solid rgba(156, 163, 175, 0.4)", // Equivalent to border-gray-60
                      borderRadius: "0.5rem",
                      padding: "1.25rem",
                      backdropFilter: "blur(4px)",
                      backgroundColor: "rgba(255, 255, 255, 0.3)",
                  }}
              >
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                          convert();
                      }}
                  >
                      <div style={{ width: "100%", marginBottom: "0.25rem" }}>
                      <InputBox
                      selectCurrency={from}
                      label="From"
                      currencyOptions={options}
                      onCurrencyChange={(currency) => setFrom(currency)}
                      onAmountChange={(amount) => {
                        if (amount === "") {
                          setAmount(""); // Allow empty input
                        } else {
                          setAmount(Number(amount).toString()); // Convert and remove leading zeros
                        }
                      }}
                      />

                      </div>
                      
                      <div
                          style={{
                              position: "relative",
                              width: "100%",
                              height: "0.125rem", // Equivalent to h-0.5
                          }}
                      >
                          <button
                              onClick={swap}
                              type="button"
                              style={{
                                  position: "absolute",
                                  left: "50%",
                                  transform: "translate(-50%, -50%)",
                                  border: "2px solid white",
                                  borderRadius: "0.25rem",
                                  backgroundColor: "#2563eb",
                                  color: "white",
                                  fontWeight: 700,
                                  padding: "0.16rem 0.5rem",
                              }}
                          >
                              SWAP
                          </button>
                      </div>
                      <div style={{ width: "100%", marginBottom: "0.25rem" }}>
                          <InputBox label="To"
                          amount={convertedAmount}
                          currencyOptions={options}
                          onCurrencyChange={(currency) => 
                            setTo(currency)
                          }
                          amountDisabled = {true}
                          selectCurrency={to}
                          />
                      </div>
                      <p
                          type="submit"
                          style={{
                              textAlign: 'center',
                              width: "100%",
                              backgroundColor: "#2563eb",
                              color: "white",
                              padding: "0.75rem 1rem",
                              borderRadius: "0.5rem",
                              fontWeight: 500,
                          }}
                      >
                          Convert {from.toUpperCase()} to {to.toUpperCase()}
                      </p>
                  </form>
              </div>
          </div>
      </div>
  );
}

export default App;