import { actualites } from "@/data/actualites"
import Link from "next/link"
import { useState } from "react"

const PER_PAGE = 6

function truncate(text, length = 140) {
  if (!text) return ""
  return text.length > length ? text.slice(0, length) + "..." : text
}

function formatDate(date) {
  return new Date(date).toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  })
}

export default function Actualites() {
  const [page, setPage] = useState(1)

  const start = (page - 1) * PER_PAGE
  const paginated = actualites.slice(start, start + PER_PAGE)
  const totalPages = Math.ceil(actualites.length / PER_PAGE)

  return (
    <main className="max-w-5xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-bold mb-12 text-center">
        Nos actualités
      </h1>

      <div className="space-y-10">

        {paginated.map((post) => (
          <Link key={post.slug} href={`/actualites/${post.slug}`}>

            <article className="bg-white border-2 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition cursor-pointer mb-6">

              {/* DATE */}
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <span>📅</span>
                <span>{formatDate(post.date)}</span>
              </div>

              {/* TITRE */}
              <h2 className="text-2xl font-bold mb-4 text-[#1d2c38]">
                {post.title}
              </h2>

              {/* EXCERPT */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {truncate(
                  post.excerpt ||
                  post.content?.replace(/<[^>]+>/g, "") ||
                  post.text
                )}
              </p>

              {/* CTA */}
              <button className="bg-orange-400 hover:bg-orange-500 text-white px-5 py-2 rounded-lg transition">
                Voir plus
              </button>

            </article>

          </Link>
        ))}

      </div>

      {/* PAGINATION */}
      <div className="flex justify-center mt-12 gap-2">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-4 py-2 rounded ${
              page === i + 1
                ? "bg-[#048CBB] text-white"
                : "bg-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

    </main>
  )
}