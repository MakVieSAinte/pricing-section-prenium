import '../index.css'
import PremiumCardV2 from '../composants/premium-card-v2/composant'

export default function Demo() {
  return (
    <div className="min-h-screen w-full bg-slate-950 flex items-center justify-center p-6">
      <PremiumCardV2
        title="Premium Experience"
        subtitle="Édition Limitée"
        description="Découvrez l'excellence avec notre offre exclusive. Un design unique allié à des performances exceptionnelles."
        price="299€"
        imageUrl="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80"
        badge="Premium"
        features={[
          'Design exclusif',
          'Support prioritaire',
          'Mises à jour gratuites',
        ]}
        actionLabel="Découvrir"
        onAction={() => console.log('Action v2')}
      />
    </div>
  )
}
