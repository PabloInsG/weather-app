/* eslint-disable react/prop-types */
import { FaThermometerEmpty } from "react-icons/fa"
import { BiSolidDropletHalf } from "react-icons/bi"
import { FiWind } from "react-icons/fi"
import { GiSunrise, GiSunset } from "react-icons/gi"
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md"


const TemperaturaAndDetails = ({
  weather: {
    temp, 
    speed, 
    humidity, 
    feels_like, 
    sunrise, 
    sunset, 
    temp_max, 
    temp_min, 
    icon, 
    details},
    units
}) => {

  const detalles = [
    {
      id: 1,
      Icon: FaThermometerEmpty,
      title: "Sensación térmica",
      value: feels_like.toFixed() + "°"
    },
    {
      id: 2,
      Icon: FiWind,
      title: "Viento",
      value: speed.toFixed() + `${units === "metric" ? "km/h" : "m/s" }`
    },
    {
      id: 3,
      Icon: BiSolidDropletHalf,
      title: "Humedad",
      value: humidity.toFixed() + "%"
    }
  ]

  const detallesHorizontales  = [
    {
      id: 1,
      Icon: GiSunrise,
      title: "Amanecer",
      value: sunrise
    },
    {
      id: 2,
      Icon: GiSunset,
      title: "Atardecer",
      value: sunset
    },
    {
      id: 3,
      Icon: MdKeyboardArrowUp,
      title: "Máximas",
      value: temp_max.toFixed() + "°"
    },
    {
      id: 4,
      Icon: MdKeyboardArrowDown,
      title: "Mínimas",
      value: temp_min.toFixed() + "°"
    }
  ]

  return (
    <div className="lg:w-2/4">
        <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
            <p>{details}</p>
        </div>

        <div className="lg:ml-28 grid grid-cols-2 text-center lg:flex lg:flex-row items-center lg:justify-around py-3">
          <div className="flex items-center justify-center">
            <img 
                src={icon}
                alt="weather icon"
                className="w-20"
            />
          </div>
            <p className="text-5xl">{temp.toFixed()}°</p>
            <div className="flex flex-col col-span-2 space-y-3 lg:items-start">
              {
                detalles.map(({id, Icon, title, value}) => (
                  <div key={id} className="flex font-light text-sm items-center justify-center">
                    <Icon size={18} className="mr-1" />
                    <p className="text-sm">{title}: <span className="text-sm lg:font-medium ml-1">{value}</span></p>
                  </div>
                ))
              }
            </div>
        </div>
        <div className="grid grid-cols-2 lg:flex lg:flex-row items-center justify-center lg:space-x-28 text-[13px] lg:text-sm py-3">
          {
            detallesHorizontales.map(({id, Icon, title, value})  => (
              <div key={id} className="flex flex-row items-center">
                <Icon size={30} />
                <p className="font-light ml-1">{title}: <span className="font-medium ml-1">{value}</span></p>
              </div>
              ))          
            }
        </div>
    </div>
  )
}

export default TemperaturaAndDetails