const Articles = () => {
  return (
    <main className="max-w-7xl mx-auto py-6 px-4 font-rounded">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
        <h1 className="text-3xl font-bold text-primary">Articles</h1>
        <button className="bg-accent-yellow text-white px-6 py-2 rounded-2xl font-semibold hover:bg-primary transition-colors shadow">
          Write an Article
        </button>
      </div>
      <div className="bg-accent-light rounded-2xl p-8 text-center text-accent-pink font-semibold text-lg shadow">
        No articles yet. Be the first to write one!
      </div>
    </main>
  );
};

export default Articles;
