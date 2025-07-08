interface BgHeroProps {
  className?: string;
  color?: 'purple' | 'blue' | 'green' | 'orange' | 'pink';
  blur?: string; // Classes Tailwind comme 'blur-sm', 'blur-lg'
}

export default function BgGradient({
  className = "absolute bottom-20 left-0 w-1/3 h-1/3",
  color = 'purple',
  blur = 'blur-[250px]'
}: BgHeroProps) {
  
  // Couleurs prédéfinies
  const colors = {
    'purple': 'radial-gradient(ellipse 300px 1000px, rgba(147, 51, 234, 1) 0%, rgba(139, 92, 246, 0.8) 30%, rgba(168, 85, 247, 0.6) 60%, rgba(168, 85, 247, 0.4) 80%, transparent 100%)',
    'blue': 'radial-gradient(ellipse 300px 1000px, rgba(59, 130, 246, 1) 0%, rgba(96, 165, 250, 0.8) 30%, rgba(147, 197, 253, 0.6) 60%, rgba(147, 197, 253, 0.4) 80%, transparent 100%)',
    'green': 'radial-gradient(ellipse 300px 1000px, rgba(34, 197, 94, 1) 0%, rgba(74, 222, 128, 0.8) 30%, rgba(134, 239, 172, 0.6) 60%, rgba(134, 239, 172, 0.4) 80%, transparent 100%)',
    'orange': 'radial-gradient(ellipse 300px 1000px, rgba(249, 115, 22, 1) 0%, rgba(251, 146, 60, 0.8) 30%, rgba(253, 186, 116, 0.6) 60%, rgba(253, 186, 116, 0.4) 80%, transparent 100%)',
    'pink': 'radial-gradient(ellipse 300px 1000px, rgba(236, 72, 153, 1) 0%, rgba(244, 114, 182, 0.8) 30%, rgba(251, 182, 206, 0.6) 60%, rgba(251, 182, 206, 0.4) 80%, transparent 100%)'
  };

  return (
    <div className="absolute w-full h-full">
      <div 
        className={`${className} ${blur}`}
        style={{
          background: colors[color],
          borderRadius: '50%',
        }}
      />
    </div>
  );
}