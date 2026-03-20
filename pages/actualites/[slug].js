import { actualites } from '@/data/actualites'
import ContentRenderer from '@/components/ContentRenderer'
import Seo from '@/components/Seo'

export default function Actualite({ article }) {
  if (!article) return <p>Non trouvé</p>

  return (
    <>
      <Seo
        title={article.title}
        description={article.description}
      />

      <main className="p-10 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          {article.title}
        </h1>

        <ContentRenderer content={article.content} />
      </main>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: actualites.map(a => ({
      params: { slug: a.slug }
    })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const article = actualites.find(a => a.slug === params.slug)

  return {
    props: { article }
  }
}