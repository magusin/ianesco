import ContactSection from "@/components/Contact"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"

export default function ContactPage() {
  return (
    <div>

      {/* ================= HERO ================= */}
      <section className="bg-[#048CBB] text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold">
            Contactez-nous
          </h1>
        </div>
      </section>

      {/* ================= INFOS ================= */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          {/* ADRESSE */}
          <div className="bg-white shadow rounded-xl border-2 p-6 text-center">
            <div className="text-[#048CBB] text-3xl mb-4">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </div>
            <p className="font-semibold">IANESCO POITIERS</p>
            <p className="text-gray-600 mt-2">
              BIOPOLE – 6 rue Carol Heitz<br />
              86000 POITIERS – France
            </p>
          </div>

          {/* EMAIL */}
          <div className="bg-white shadow rounded-xl p-6 border-2 text-center">
            <div className="text-[#048CBB] text-3xl mb-4">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <p className="font-semibold">Email</p>
            <p className="text-gray-600 mt-2">
              ianesco@ianesco.fr
            </p>
          </div>

          {/* TEL */}
          <div className="bg-white shadow rounded-xl p-6 border-2 text-center">
            <div className="text-[#048CBB] text-3xl mb-4">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <p className="font-semibold">Téléphone</p>
            <p className="text-gray-600 mt-2">
              05.49.44.76.14<br />
              Lun–Ven<br />
              8:30 - 12:00<br />
              14:00 - 17:30
            </p>
          </div>

        </div>
      </section>

      {/* ================= TEXTE ================= */}
      <section className="pb-10">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-4">
            Laissez-nous un message
          </h2>

          <p className="text-gray-600">
            Nous ferons au mieux pour vous répondre dès que possible.
            Nos horaires d'ouverture sont les suivants :
            8h30 à 12h30 puis 14h à 17h30 (17h le vendredi).
          </p>

        </div>
      </section>

      {/* ================= FORM ================= */}
      <ContactSection />

      {/* ================= MAP ================= */}
      <section className="w-full h-[450px]">
        <iframe
          src="https://maps.google.com/maps?q=Ianesco%20Poitiers&t=m&z=12&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
        />
      </section>

    </div>
  )
}