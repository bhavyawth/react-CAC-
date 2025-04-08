import { useEffect, useState } from "react";

function useWeatherData(city){
  const [data, setData] = useState({});
   useEffect(() => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8e94c59e6b40de150ffd0af15b4e6a42&units=metric
`)
        .then((res) => res.json())
        .then((res) => setData((res))
        )
      },
   [city])

   return data
}

export default useWeatherData;