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
        imageUrl="https://plus.unsplash.com/premium_photo-1681400745727-c69f8e47f524?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWJzdHJhaXR8ZW58MHx8MHx8fDA%3D"
        features={[
          'Design exclusif',
          'Support prioritaire',
          'Mises à jour gratuites',
        ]}
        actionLabel="Découvrir"
        onAction={() => console.log('Action v2_1')}
      />
      <PremiumCardV2
        title="Pro Suite"
        subtitle="Pour les professionnels"
        description="La solution complète pour booster votre productivité et atteindre vos objectifs."
        price="469€"
        imageUrl="https://images.unsplash.com/photo-1678203699263-917199c725b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9uZCUyMGQnZWNyYW4lMjBhYnN0cmFpdHxlbnwwfHwwfHx8MA%3D%3D"
        features={[
          'Outils avancés',
          'API illimitée',
          'Support 24/7',
        ]}
        actionLabel="Commencer"
        onAction={() => console.log('Action v2_2')}
      />
      <PremiumCardV2
        title="Enterprise"
        subtitle="Solution entreprise"
        description="Une infrastructure scalable conçue pour les grandes organisations."
        price="Sur mesure"
        imageUrl="https://images.unsplash.com/photo-1723149478783-924c6c3f85a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFic3RyYWl0JTIwZG9yZXxlbnwwfHwwfHx8MA%3D%3D"
        features={[
          'Déploiement cloud + outils avancés',
          'Sécurité renforcée',
          'Account manager',
        ]}
        actionLabel="Nous contacter"
        onAction={() => console.log('Action v2_3')}
      />
    </div>
  )
}
