export default function Contact() {
    return (
      <div className="p-10 max-w-xl mx-auto">
        <h1 className="text-3xl mb-6">Contact</h1>
  
        <form className="flex flex-col gap-4">
          <input placeholder="Nom" className="border p-2" />
          <input placeholder="Email" className="border p-2" />
          <textarea placeholder="Message" className="border p-2" />
          <button className="bg-blue-500 text-white p-2">
            Envoyer
          </button>
        </form>
      </div>
    )
  }