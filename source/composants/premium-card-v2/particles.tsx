import { AnimatePresence, motion } from 'framer-motion'

export default function FloatingParticles({ isHovered }: { isHovered: boolean }) {
  return (
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
  )
}
