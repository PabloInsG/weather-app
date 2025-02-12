
const TopButtons = ({setQuery}) => {
    const ciudades = [
        {
            id:  1,
            name: "Madrid",
        },
        {
            id:  2,
            name: "Londres",
        },
        {
            id:  3,
            name: "Sidney",
        },
        {
            id:  4,
            name: "Washington DC",
        },
        {
            id:  5,
            name: "Tokio",
        }
    ]

  return (
    <div className="flex lg:items-center justify-around my-6 lg:w-3/4">
        {
            ciudades?.map(ciudad => (
                <button className="text-sm lg:text-lg font-medium hover:scale-110 transition-all" key={ciudad.id} onClick={() => setQuery({q: ciudad.name})}>{ciudad.name}</button>
            ))
        }
    </div>

  )
}

export default TopButtons