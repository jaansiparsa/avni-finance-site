export default function Contact() {
  return (
    <main className="max-w-md mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
      <form className="flex flex-col gap-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <input
          type="text"
          placeholder="Your Name"
          className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Your Message"
          rows={4}
          className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition-colors"
        >
          Send Message
        </button>
      </form>
    </main>
  );
}
