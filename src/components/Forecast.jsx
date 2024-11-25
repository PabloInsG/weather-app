/* eslint-disable react/prop-types */
const Forecast = ({title,data}) => {

  return (
    <div className="mt-4 w-2/4">
        <div className="flex items-center justify-start mt-6">
            <p className="uppercase font-medium">{title}</p>
        </div>
        <hr className="my-1" />
        <div className="flex items-center justify-between">
          {
            data.map((d, index) => (
              <div key={index} className="flex flex-col items-center justify-center">
                <p className="text-sm font-light">{d.title}</p>
                <img 
                src={d.icon}
                alt="weather icon"
                className="w-20 my-1"
                />
                <p className="font-medium">{d.temp.toFixed()}°</p>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default Forecast