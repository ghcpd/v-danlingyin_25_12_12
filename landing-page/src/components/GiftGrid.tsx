const gifts = [
  { id: 1, title: 'Gift 1', desc: 'Description 1', img: 'https://via.placeholder.com/300' },
  { id: 2, title: 'Gift 2', desc: 'Description 2', img: 'https://via.placeholder.com/300' },
  { id: 3, title: 'Gift 3', desc: 'Description 3', img: 'https://via.placeholder.com/300' },
  { id: 4, title: 'Gift 4', desc: 'Description 4', img: 'https://via.placeholder.com/300' },
  { id: 5, title: 'Gift 5', desc: 'Description 5', img: 'https://via.placeholder.com/300' },
  { id: 6, title: 'Gift 6', desc: 'Description 6', img: 'https://via.placeholder.com/300' },
]

const GiftGrid = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-christmas-green">Gift Grid</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gifts.map(gift => (
            <div key={gift.id} className="bg-white p-4 rounded shadow hover:scale-105 transition duration-300">
              <img src={gift.img} alt={gift.title} className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-xl font-bold mb-2">{gift.title}</h3>
              <p>{gift.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GiftGrid