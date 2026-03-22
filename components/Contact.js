import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faUser,
  faEnvelope,
  faPhone,
  faBuilding,
  faPen,
  faClock
} from "@fortawesome/free-solid-svg-icons"

export default function ContactSection() {
    return (
<section className="bg-[#f5f7f9] py-16">
<div className="max-w-6xl mx-auto px-6">

  <div className="bg-white rounded-xl shadow p-6 md:p-10">

    {/* GRID */}
    <div className="grid lg:grid-cols-2 gap-10 items-start">

      {/* ================= FORMULAIRE ================= */}
      <div>
        <h2 className="text-3xl font-bold mb-8">
          Contactez-nous
        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          <div className="relative">
            <input placeholder="Nom" className="w-full border p-4 pr-12 rounded" />
            <FontAwesomeIcon icon={faUser} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#048CBB]" />
          </div>

          <div className="relative">
            <input placeholder="Adresse mail" className="w-full border p-4 pr-12 rounded" />
            <FontAwesomeIcon icon={faEnvelope} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#048CBB]" />
          </div>

          <div className="relative">
            <input placeholder="Téléphone" className="w-full border p-4 pr-12 rounded" />
            <FontAwesomeIcon icon={faPhone} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#048CBB]" />
          </div>

          <div className="relative">
            <input placeholder="Société" className="w-full border p-4 pr-12 rounded" />
            <FontAwesomeIcon icon={faBuilding} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#048CBB]" />
          </div>

        </div>

        <div className="relative mt-4">
          <textarea
            placeholder="Votre message"
            className="w-full border p-4 pr-12 rounded h-40"
          />
          <FontAwesomeIcon icon={faPen} className="absolute right-4 top-4 text-[#048CBB]" />
        </div>

        {/* CAPTCHA placeholder */}
        <div className="mt-6 border rounded p-4 w-fit">
          <p className="text-sm text-gray-500">
            reCAPTCHA ici
          </p>
        </div>

        <button className="mt-6 bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded-lg transition">
          Envoyer
        </button>
      </div>

      {/* ================= COORDONNÉES ================= */}
      <div className="bg-[#048CBB] text-white rounded-xl p-8 relative overflow-hidden h-full">

        {/* overlay optionnel */}
        <div className="absolute inset-0 bg-[#048CBB]/90"></div>

        <div className="relative z-10">

          <h2 className="text-2xl font-bold mb-8 text-white">
            Nos coordonnées
          </h2>

          <div className="space-y-6">

            <div className="flex items-center gap-4">
              <div className="bg-white text-[#048CBB] w-10 h-10 flex items-center justify-center rounded-full">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div>
                <p className="text-sm opacity-80">Appelez-nous</p>
                <p className="font-semibold text-lg">05.49.44.76.14</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-white text-[#048CBB] w-10 h-10 flex items-center justify-center rounded-full">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div>
                <p className="text-sm opacity-80">Vous préférez écrire ?</p>
                <p className="font-semibold text-lg">ianesco@ianesco.fr</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-white text-[#048CBB] w-10 h-10 flex items-center justify-center rounded-full">
                <FontAwesomeIcon icon={faClock} />
              </div>
              <div>
                <p className="text-sm opacity-80">Nos horaires</p>
                <p className="font-semibold text-lg">Lun–Ven 8:30 – 17:30</p>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  </div>

</div>
</section>
  )
}