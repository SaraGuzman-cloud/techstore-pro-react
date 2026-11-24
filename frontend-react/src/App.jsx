import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

function App() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-10 flex flex-col gap-10">

      <Navbar/>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Tarjeta 1 */}
        <div className="flex flex-col gap-2 p-4 rounded-xl shadow-md bg-white">
          <img src="https://images.unsplash.com/photo-1663153949956-605f445ef1a5?w=400&h=300&fit=crop" className="rounded-lg" />
          <h3 className="font-bold text-lg">Mouse Inalambrico</h3>
          <p className="text-texto-dim text-sm">Mouse ergonomico, conexion Bluetooth</p>
          <p className="text-verde font-extrabold">$89.900</p>
          <button className="bg-transparent text-verde border-2 border-verde py-3 px-6 rounded-xl font-bold hover:bg-green-700 hover:text-white">
            Ver más detalles
          </button>
        </div>

        {/* Tarjeta 2 */}
        <div className="flex flex-col gap-2 p-4 rounded-xl shadow-md bg-white">
          <img src="https://placehold.co/300x200" className="rounded-lg" />
          <h3 className="font-bold text-lg">Teclado Mecanico</h3>
          <p className="text-texto-dim text-sm">Switches azules, retroiluminado RGB</p>
          <p className="text-verde font-extrabold">$149.900</p>
          <button className="bg-transparent text-verde border-2 border-verde py-3 px-6 rounded-xl font-bold hover:bg-green-700 hover:text-white">
            Ver más detalles
          </button>
        </div>

        {/* Tarjeta 3 */}
        <div className="flex flex-col gap-2 p-4 rounded-xl shadow-md bg-white">
          <img src="" className="rounded-Lg" />
          <h3 className="font-bold text-lg">Monitor 24"</h3>
          <p className="text-texto-dim text-sm">Full HD, 75Hz, panel IPS</p>
          <p className="text-verde font-extrabold">$899.900</p>
          <button className="bg-transparent text-verde border-2 border-verde py-3 px-6 rounded-xl font-bold hover:bg-green-700 hover:text-white">
            Ver más detalles
          </button>
        </div>

        <div className="flex flex-col gap-2 p-4 rounded-xl shadow-md bg-white">
          <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop" className="rounded-lg" />
          <h3 className="font-bold text-lg">Audifonos Bluetooth</h3>
          <p className="text-texto-dim text-sm">Cancelacion de ruido, 20h de bateria</p>
          <p className="text-verde font-extrabold">$199.900</p>
          <button className="bg-transparent text-verde border-2 border-verde py-3 px-6 rounded-xl font-bold hover:bg-green-700 hover:text-white">
            Ver más detalles
          </button>
        </div>

      </section>
      <Footer/>
    </main>
    
  )
}

export default App