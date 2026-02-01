import { useState } from 'react';
import { motion } from 'framer-motion';
import PremiumCard from './components/PremiumCard';
import { Code, Copy, Check, Sparkles, Layers, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Demo from '../source/démos/default'

// Background animated component
const AnimatedBackground = () => {
  return (
    <>
    <Demo />
    <div className="fixed inset-0 overflow-hidden -z-10">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      
      {/* Animated orbs */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
          top: '-20%',
          left: '-10%',
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%)',
          bottom: '-10%',
          right: '-5%',
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, -50, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%)',
          top: '40%',
          left: '60%',
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
    </>
  );
};

// Code snippet component
const CodeSnippet = () => {
  const [copied, setCopied] = useState(false);
  
  const code = `import { PremiumCard } from '@/components/PremiumCard';

<PremiumCard
  title="Premium Experience"
  subtitle="Édition Limitée"
  description="Découvrez l'excellence avec notre offre exclusive."
  price="299€"
  badge="Premium"
  features={[
    "Design exclusif",
    "Support prioritaire", 
    "Mises à jour gratuites"
  ]}
  actionLabel="Découvrir"
  onAction={() => console.log('Action!')}
/>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-2xl blur-xl" />
      <div className="relative bg-slate-950/90 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopy}
            className="text-slate-400 hover:text-white"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          </Button>
        </div>
        <pre className="p-4 text-sm text-slate-300 overflow-x-auto">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};

// Feature card component
const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <motion.div
    whileHover={{ y: -5, scale: 1.02 }}
    className="relative group"
  >
    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-5">
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-3">
        <Icon className="w-5 h-5 text-purple-400" />
      </div>
      <h4 className="text-white font-semibold mb-1">{title}</h4>
      <p className="text-slate-400 text-sm">{description}</p>
    </div>
  </motion.div>
);

function App() {
  const [activeTab, setActiveTab] = useState('preview');

  const cardVariants = [
    {
      title: "Premium Experience",
      subtitle: "Édition Limitée",
      description: "Découvrez l'excellence avec notre offre exclusive. Un design unique allié à des performances exceptionnelles.",
      price: "299€",
      imageUrl: "https://plus.unsplash.com/premium_photo-1681400745727-c69f8e47f524?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWJzdHJhaXR8ZW58MHx8MHx8fDA%3D",
      badge: "Premium",
      features: ["Design exclusif", "Support prioritaire", "Mises à jour gratuites"],
    },
    {
      title: "Pro Suite",
      subtitle: "Pour les professionnels",
      description: "La solution complète pour booster votre productivité et atteindre vos objectifs.",
      price: "499€",
      imageUrl: "https://images.unsplash.com/photo-1678203699263-917199c725b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9uZCUyMGQnZWNyYW4lMjBhYnN0cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
      badge: "Pro",
      features: ["Outils avancés", "API illimitée", "Support 24/7"],
    },
    {
      title: "Enterprise",
      subtitle: "Solution entreprise",
      description: "Une infrastructure scalable conçue pour les grandes organisations.",
      price: "Sur mesure",
      imageUrl: "https://plus.unsplash.com/premium_photo-1668948924272-4c945b9e798e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9uZCUyMGQnZWNyYW4lMjBhYnN0cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
      badge: "Enterprise",
      features: ["Déploiement cloud", "Sécurité renforcée", "Account manager"],
    },
  ];

  return (
    <div className="max-h-screen text-white pt-20">
      <AnimatedBackground />

      {/* Main Content */}
      <section className="relative z-10 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">

            <TabsContent value="preview" className="mt-0">
              {/* Cards Grid */}
              <div className="grid md:grid-cols-3 gap-8 mb-16 mt-32">
                {cardVariants.map((variant, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                  >
                    <PremiumCard
                      {...variant}
                      actionLabel={index === 0 ? "Découvrir" : index === 1 ? "Commencer" : "Nous contacter"}
                      onAction={() => console.log(`Card ${index + 1} clicked!`)}
                    />
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="code" className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl mx-auto"
              >
      
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

    </div>
  );
}

export default App;
