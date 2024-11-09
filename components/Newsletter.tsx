export function Newsletter() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-600 mb-8">
          Get the latest articles and insights delivered straight to your inbox.
        </p>
        <form className="flex flex-col md:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-3 rounded-lg flex-1 max-w-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}