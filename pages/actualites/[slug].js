import { actualites } from "@/data/actualites"
import { useRouter } from "next/router"
import Image from "next/image"

function formatDate(date) {
  return new Date(date).toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  })
}

// 🔥 NORMALISATION IMAGES
function getImages(post) {
  if (post.images) return post.images
  if (post.image) return [post.image]
  return []
}

// 🔥 CLEAN HTML
function formatContent(html) {
  if (!html) return ""
  return html
    .replace(/&nbsp;/g, " ")
    .replace(/<p><\/p>/g, "")
}

export default function Article() {
  const router = useRouter()
  const { slug } = router.query

  if (!router.isReady) return null

  const post = actualites.find(p => p.slug === slug)

  if (!post) return <p className="p-10">Article non trouvé</p>

  const images = getImages(post)

  return (
    <>
      {/* HERO */}
      <section className="bg-[#048CBB] text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold max-w-4xl mx-auto">
          {post.title}
        </h1>
      </section>

      <main className="max-w-3xl mx-auto px-6 py-16">

        {/* META */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-10">
          <span>📅</span>
          <span>{formatDate(post.date)}</span>
        </div>

        {/* ================= IMAGES FLEX ================= */}

        {/* 1 IMAGE */}
        {images.length === 1 && (
          <Image
            src={images[0]}
            width={900}
            height={500}
            className="rounded-xl shadow mx-auto mb-10"
            alt={post.title}
          />
        )}

        {/* MULTIPLE IMAGES */}
        {images.length > 1 && (
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {images.map((img, i) => (
              <Image
                key={i}
                src={img}
                width={800}
                height={500}
                className="rounded-xl shadow w-full object-cover"
                alt={post.title}
              />
            ))}
          </div>
        )}

        {/* ================= CONTENU ================= */}

        {/* HTML */}
        {post.content && (
          <div
            className="prose prose-lg max-w-none article-content"
            dangerouslySetInnerHTML={{
              __html: formatContent(post.content)
            }}
          />
        )}

        {/* TEXTE SIMPLE */}
        {post.text && (
          <p className="text-lg leading-relaxed mt-6">
            {post.text}
          </p>
        )}

        {/* DOCUMENTS */}
        {post.files && (
          <div className="space-y-4 mt-6">
            {post.files.map((file, i) => (
              <a
                key={i}
                href={file.url}
                target="_blank"
                className="block p-4 border rounded hover:bg-gray-50"
              >
                📄 {file.name}
              </a>
            ))}
          </div>
        )}

      </main>
    </>
  )
}