import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'

export default function Home() {
  return (
    <div>
      <Hero />

      <section className="p-10 grid md:grid-cols-3 gap-6">
        <ServiceCard title="Analyse de l'eau" link="/services/eau" />
        <ServiceCard title="Analyse de l'air" link="/services/air" />
        <ServiceCard title="Matériaux" link="/services/materiaux" />
      </section>
    </div>
  )
}