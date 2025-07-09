export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] text-center gap-12 font-modern bg-bg-offwhite">
      <h1 className="text-6xl sm:text-8xl font-black uppercase tracking-tighter text-primary mb-4">
        Finance, <span className="text-accent-pink">made simple.</span>
      </h1>
      <p className="text-2xl sm:text-3xl text-gray-800 max-w-3xl mb-8 font-semibold">
        real articles. real advice. real people. <br />
        <span className="text-accent-yellow">by friends, for friends.</span>
      </p>
      <a
        href="/articles"
        className="inline-block bg-accent-pink text-white px-12 py-6 font-black text-2xl uppercase shadow-lg hover:bg-primary transition-colors border-0"
      >
        Read Articles
      </a>
    </main>
  );
}
