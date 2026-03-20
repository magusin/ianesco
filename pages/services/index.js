import ServiceCard from '@/components/ServiceCard'

export default function Services() {
  return (
    <div className="p-10">
      <h1 className="text-3xl mb-6">Nos services</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <ServiceCard title="Eau" link="/services/eau" />
        <ServiceCard title="Air" link="/services/air" />
        <ServiceCard title="Matériaux" link="/services/materiaux" />
      </div>
    </div>
  )
}