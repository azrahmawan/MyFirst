// Soft glowing ambient orbs — purely decorative background layer
export default function AmbientOrbs() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0" aria-hidden="true">
      {/* Top-right warm glow */}
      <div
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-20 animate-float-slow"
        style={{
          background: 'radial-gradient(circle, #f5c842 0%, #e8a020 40%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      {/* Bottom-left caramel glow */}
      <div
        className="absolute -bottom-48 -left-24 w-[500px] h-[500px] rounded-full opacity-15 animate-float"
        style={{
          background: 'radial-gradient(circle, #c9895a 0%, #a0522d 50%, transparent 70%)',
          filter: 'blur(90px)',
          animationDelay: '2s',
        }}
      />
      {/* Center subtle honey accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-8"
        style={{
          background: 'radial-gradient(ellipse, #faf3e0 0%, transparent 60%)',
          filter: 'blur(60px)',
        }}
      />
    </div>
  )
}
