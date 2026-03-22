import { useState, useEffect } from "react"
import Link from "next/link"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [submenuOpen, setSubmenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
        ? "bg-[rgba(4,140,187,0.95)] backdrop-blur-md shadow-md"
        : "bg-[#048CBB]"
        }`}
    >
      <div className="w-full max-w-[1400px] mx-auto flex items-center justify-between px-8 py-4">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="IANESCO"
            className="h-20 object-contain"
          />
        </Link>

        {/* NAV DESKTOP */}
        <nav className="hidden md:flex items-center gap-12 text-white text-[16px] font-semibold tracking-wide">

          {/* ANALYSES */}
          <div className="relative group">
            <span className="cursor-pointer hover:opacity-80 transition">
              Nos Analyses
            </span>

            {/* zone invisible pour éviter les coupures */}
            <div className="absolute top-full left-0 h-4 w-full"></div>

            <div className="absolute top-full left-0 mt-4 w-80 bg-white text-black shadow-xl rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">

              <Link href="/services/eau" className="block px-6 py-4 hover:bg-gray-100">
                Prélèvements et analyse d’eaux
              </Link>

              <Link href="/services/air" className="block px-6 py-4 hover:bg-gray-100">
                Analyses d’air
              </Link>

              <Link href="/services/materiaux" className="block px-6 py-4 hover:bg-gray-100">
                Matériaux & emballages alimentaires
              </Link>

              <Link href="/services/cbd" className="block px-6 py-4 hover:bg-gray-100">
                Analyses de CBD
              </Link>

            </div>
          </div>

          <Link href="/notre-laboratoire" className="hover:opacity-80 transition">
            Notre Laboratoire
          </Link>

          <Link href="/actualites" className="hover:opacity-80 transition">
            Nos Actualités
          </Link>

          <Link href="/espace-client" className="hover:opacity-80 transition">
            Espace Client
          </Link>

        </nav>

        {/* BURGER */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE */}
      {menuOpen && (
        <div className="md:hidden bg-white text-black p-6 space-y-4">

          <div>
            <p
              className="font-semibold cursor-pointer"
              onClick={() => setSubmenuOpen(!submenuOpen)}
            >
              Nos Analyses
            </p>

            {submenuOpen && (
              <div className="ml-4 mt-2 space-y-2">
                <Link href="/services/eau">Eaux</Link>
                <Link href="/services/air">Air</Link>
                <Link href="/services/materiaux">Matériaux</Link>
                <Link href="/services/cbd">CBD</Link>
              </div>
            )}
          </div>

          <Link href="/notre-laboratoire">Notre Laboratoire</Link>
          <Link href="/actualites">Nos Actualités</Link>
          <Link href="/espace-client">Espace Client</Link>

        </div>
      )}
    </header>
  )
}