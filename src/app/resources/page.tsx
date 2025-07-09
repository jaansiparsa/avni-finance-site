export default function Resources() {
  return (
    <main className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Finance Resources</h1>
      <ul className="space-y-4">
        <li>
          <a href="#" className="text-blue-600 hover:underline">
            Investopedia
          </a>{" "}
          - Comprehensive finance and investing education.
        </li>
        <li>
          <a href="#" className="text-blue-600 hover:underline">
            NerdWallet
          </a>{" "}
          - Personal finance tips and product reviews.
        </li>
        <li>
          <a href="#" className="text-blue-600 hover:underline">
            The Intelligent Investor
          </a>{" "}
          - Classic book by Benjamin Graham.
        </li>
        <li>
          <a href="#" className="text-blue-600 hover:underline">
            r/personalfinance
          </a>{" "}
          - Reddit community for personal finance advice.
        </li>
      </ul>
    </main>
  );
}
