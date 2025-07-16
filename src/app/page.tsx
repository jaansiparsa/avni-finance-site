export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] text-center gap-12 bg-gradient-to-b from-pink-50 to-purple-50 relative overflow-hidden">
      <div className="absolute top-20 left-10 text-4xl animate-float">🌸</div>
      <div className="absolute top-1/3 right-16 text-3xl animate-float-delay">🍡</div>
      <div className="absolute bottom-20 left-1/4 text-5xl animate-bounce">💖</div>
      
      <div className="relative group">
        <h1 className="text-6xl sm:text-8xl font-black uppercase tracking-tighter mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
            Finance,
          </span>{' '}
          <span className="relative inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-red-400 animate-pulse">
              made kawaii.
            </span>
            <span className="absolute -top-4 -right-4 text-3xl animate-spin">✨</span>
          </span>
        </h1>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-pink-300 blur-lg opacity-70 group-hover:w-48 transition-all duration-300"></div>
      </div>
      <div className="relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl border-2 border-pink-300 shadow-neon-pink transform hover:scale-105 transition-transform">
        <p className="text-2xl sm:text-3xl max-w-3xl font-semibold">
          <span className="text-purple-600">Real advice!</span>{' '}
          <span className="text-pink-500">Sparkly wisdom!</span>{' '}
          <span className="text-yellow-400">Doki-doki learning!</span>
          <br />
          <span className="text-4xl inline-block mt-2 animate-wiggle">(◕‿◕✿)</span>
        </p>
        <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-yellow-300 animate-ping"></div>
      </div>
      <a
        href="/articles"
        className="inline-block bg-accent-pink text-white px-12 py-6 font-black text-2xl uppercase shadow-lg hover:bg-primary transition-colors border-0"
      >
        Read Articles
      </a>
    </main>
  );
}
