
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
    <div className="flex items-center justify-around my-6 w-3/4">
        {
            ciudades?.map(ciudad => (
                <button className="text-lg font-medium hover:scale-110 transition-all" key={ciudad.id} onClick={() => setQuery({q: ciudad.name})}>{ciudad.name}</button>
            ))
        }
    </div>

  )
}

export default TopButtons