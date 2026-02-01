import { useState, useRef } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Sparkles, ArrowUpRight, Star, Zap, Shield, Crown } from 'lucide-react'

export interface PremiumCardV2Props {
  title?: string
  subtitle?: string
  description?: string
  price?: string
  imageUrl?: string
  badge?: string
  features?: string[]
  onAction?: () => void
  actionLabel?: string
}

const PremiumCardV2: React.FC<PremiumCardV2Props> = ({
  title = 'Premium Experience',
  subtitle = 'Édition Limitée',
  description = "Découvrez l'excellence avec notre offre exclusive. Un design unique allié à des performances exceptionnelles.",
  price = '299€',
  imageUrl = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
  badge = 'Premium',
  features = ['Design exclusif', 'Support prioritaire', 'Mises à jour gratuites'],
  onAction,
  actionLabel = 'Découvrir',
}) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Motion values for 3D tilt effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 300 }
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={cardRef}
      className="relative w-full max-w-md mx-auto perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-white/10 shadow-2xl"
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        transition={{ duration: 0.1 }}
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -inset-[100%] opacity-30"
            style={{
              background:
                'conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(168, 85, 247, 0.3) 60deg, transparent 120deg, rgba(59, 130, 246, 0.3) 180deg, transparent 240deg, rgba(236, 72, 153, 0.3) 300deg, transparent 360deg)',
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          />
        </div>

        {/* Spotlight effect */}
        <motion.div
          className="absolute inset-0 opacity-0 pointer-events-none"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="absolute w-[600px] h-[600px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 60%)',
              left: mousePosition.x - 300,
              top: mousePosition.y - 300,
            }}
          />
        </motion.div>

        {/* Glass overlay */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />

        {/* Content */}
        <div className="relative z-10 p-6">
          {/* Header with badge */}
          <div className="flex items-start justify-between mb-4">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
              <span
                className="inline-flex items-center rounded-md bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 text-white border-0 backdrop-blur-md px-3 py-1 text-xs font-medium"
              >
                <Sparkles className="w-3 h-3 mr-1" />
                {badge}
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="flex items-center gap-1"
            >
              {[...Array(5)].map((_, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 + i * 0.05 }}>
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Image container */}
          <motion.div className="relative h-48 mb-6 rounded-2xl overflow-hidden group" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
            <motion.img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

            {/* Floating price tag */}
            <motion.div className="absolute bottom-3 right-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <div className="bg-white/10 backdrop-blur-xl rounded-xl px-4 py-2 border border-white/20">
                <span className="text-2xl font-bold text-white">{price}</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Title and subtitle */}
          <motion.div className="mb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
            <p className="text-purple-300 text-sm font-medium">{subtitle}</p>
          </motion.div>

          {/* Description */}
          <motion.p className="text-slate-300 text-sm leading-relaxed mb-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            {description}
          </motion.p>

          {/* Features */}
          <motion.div className="space-y-2 mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 text-sm text-slate-300"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {index === 0 && <Zap className="w-4 h-4 text-yellow-400" />}
                {index === 1 && <Shield className="w-4 h-4 text-green-400" />}
                {index === 2 && <Crown className="w-4 h-4 text-purple-400" />}
                {index > 2 && <Sparkles className="w-4 h-4 text-blue-400" />}
                <span>{feature}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Action button */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
            <button
              onClick={onAction}
              className="w-full group relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-500 hover:via-pink-500 hover:to-blue-500 text-white font-semibold py-6 rounded-xl transition-all duration-300"
            >
              <motion.span className="absolute inset-0 bg-white/20" initial={{ x: '-100%' }} whileHover={{ x: '100%' }} transition={{ duration: 0.5 }} />
              <span className="relative flex items-center justify-center gap-2">
                {actionLabel}
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
            </button>
          </motion.div>
        </div>

        {/* Bottom glow */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      </motion.div>

      {/* Floating particles */}
      <AnimatePresence>
        {isHovered && (
          <>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  background: i % 2 === 0 ? 'rgba(168, 85, 247, 0.6)' : 'rgba(59, 130, 246, 0.6)',
                  left: `${20 + i * 15}%`,
                  top: '50%',
                }}
                initial={{ opacity: 0, y: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  y: -100 - Math.random() * 50,
                  x: (Math.random() - 0.5) * 60,
                  scale: [0, 1, 0],
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, delay: i * 0.1, repeat: Infinity }}
              />
            ))}
          </>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default PremiumCardV2
