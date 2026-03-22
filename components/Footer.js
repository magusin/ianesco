import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#048CBB] text-white">

      {/* TOP FOOTER */}
      <div className="max-w-[1400px] mx-auto px-8 py-10 grid md:grid-cols-3 gap-8 items-center">

        {/* LOGO */}
        <div>
          <img
            src="/logo.png"
            alt="IANESCO"
            className="h-15 mb-2"
          />
          <p className="text-sm opacity-80">
            Laboratoire d’analyses environnementales
          </p>
        </div>

        {/* LIENS */}
        <div className="flex flex-col gap-2 text-sm">
          <h4 className="font-semibold mb-2">Navigation</h4>

          <Link href="/services">Nos prestations</Link>
          <Link href="/accreditations">Accréditations</Link>
          <Link href="/laboratoire">Le laboratoire</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* LEGAL */}
        <div className="flex flex-col gap-2 text-sm md:text-right">
          <Link href="/mentions-legales">Mentions légales</Link>

          <div className="flex md:justify-end gap-4 mt-2 text-lg">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/20 text-center text-sm py-4">
        © {new Date().getFullYear()} IANESCO — Tous droits réservés
      </div>

    </footer>
  )
}