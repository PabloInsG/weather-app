import './App.css'
import TopButtons from './components/TopButtons'
import Inputs from './components/Inputs'
import TimeAndLocation from './components/TimeAndLocation'
import TemperaturaAndDetails from './components/TemperaturaAndDetails'
import Forecast from './components/Forecast'
import getFormattedWeatherData from './services/weatherService'
import { useEffect, useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [query, setQuery] = useState({q: "madrid"})
  const [units, setUnits] = useState("metric")
  const [weather, setWeather]  = useState(null)

  const getWeather = async () => {
    const message = query.q ? query.q : 'current location'

    toast.info("Obteniendo los datos meteorológicos de " + message.charAt(0).toUpperCase() + message.slice(1))
    await getFormattedWeatherData({...query, units}).then(data =>  {
      toast.success("Datos meteorológicos de " + data.name + ", " + data.country + " obtenidos correctamente")
      setWeather(data)
      console.log(data)
    })
  }

  useEffect(() => {
    getWeather()
  }, [query, units])

  const formatBackground = () => {
    if (!weather) return 'from-sky-300 to-blue-700';
    const threshold = units === "metric" ? 20 : 60;
    if(weather.temp <= threshold) return 'from-sky-300 to-blue-700';
    return 'from-yellow-600 to-orange-700';
  }
  
  return (
    <>
      <div className={`mx-auto max-w-screen h-[100vh] flex items-center flex-col py-5 px-32 bg-gradient-to-br 
        ${formatBackground()} shadow-xl shadow-gray-400`}>
        <TopButtons setQuery={setQuery}/>
        <Inputs setQuery={setQuery} setUnits={setUnits} />

        {
          weather  && (
            <>
            <TimeAndLocation weather={weather} />
            <TemperaturaAndDetails weather={weather} units={units}/>
            <Forecast title="Prevision del tiempo de 3 horas" data={weather.hourly} />
            <Forecast title="Prevision del tiempo diario" data={weather.daily} />
            </>
          )
        }
        
        <ToastContainer 
          autoClose={3000} 
          hideProgressBar={true} 
          theme='colored' />
      </div>
    </>
  )
}

export default App
