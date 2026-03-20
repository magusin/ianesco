export default function Hero() {
    return (
      <section className="h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="text-center max-w-2xl">
          <h1 className="text-5xl font-bold mb-6">
            Laboratoire d’analyses environnementales
          </h1>
          <p className="mb-6">
            Expertise en analyse de l’eau, de l’air et des matériaux
          </p>
          <button className="bg-blue-500 px-6 py-3 rounded">
            Demander un devis
          </button>
        </div>
      </section>
    )
  }