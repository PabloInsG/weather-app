/* eslint-disable react/prop-types */
import { useState } from "react"
import { BiSearch, BiCurrentLocation } from "react-icons/bi"

BiSearch

const Inputs = ({setQuery, setUnits}) => {
  const [city, setCity] = useState('')

  const handleClickSearch = () => {
    if (city !== "") setQuery({q: city})
  }

  const handleLocation = () => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const {latitude, longitude} = position.coords
        setQuery({lat: latitude, lon: longitude})
      })
    }
  }
 
  return (
    <div className="flex flex-row justify-center my-6 lg:w-2/4">
        <div className="flex flex-row w-3/4 items-center justify-center space-x-2 lg:space-x-4">
            <input 
              type="text"
              value={city}
              onChange={(e) => setCity(e.currentTarget.value)}  
              placeholder="Buscar por ciudad..."
              className="text-gray-800 text-sm lg:text-xl font-light p-2 w-full shadow-xl capitalize focus:outline-none placeholder:lowercase" />
            <BiSearch onClick={handleClickSearch} size={30} className="cursor-pointer transition ease-out hover:scale-125" />
            <BiCurrentLocation onClick={handleLocation} size={30} className="cursor-pointer transition ease-out hover:scale-125"/>
        </div>
        <div className="flex flex-row w-1/4 items-center justify-center">
            <button className="text-2xl font-medium transition ease-out hover:scale-125" onClick={() => setUnits("metric")}>°C</button>
            <p className="text-2xl font-medium mx-1">|</p>
            <button className="text-2xl font-medium transition ease-out hover:scale-125" onClick={() => setUnits("imperial")}>°F</button>
        </div>
    </div>
  )
}

export default Inputs