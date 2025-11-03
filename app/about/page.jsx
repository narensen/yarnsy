export default function About() {
  return (
    <main className="min-h-screen bg-[#fef8f7] flex flex-col justify-center px-6">
      <section className="max-w-4xl mx-auto text-left pt-28 pb-16">
        <h1 className="text-5xl font-serif font-semibold text-gray-900 leading-tight mb-6">
          Our Story – <br />
          Where Craft Meets Soul.
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          At <span className="font-semibold text-gray-900">Yarnsy</span>, we believe
          every thread tells a story. What began as a small passion for handcrafted
          crochet art has grown into a conscious craft movement — one that values
          patience, precision, and purpose. Our creations celebrate the warmth of
          human touch in a world that’s racing toward automation.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Each piece is designed and made with love by skilled artisans who pour
          their time, technique, and spirit into every knot and loop. We work with
          premium yarns, natural fibers, and ethical practices to ensure that our
          products aren’t just beautiful — they’re meaningful.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed">
          Whether it’s a cozy cardigan, a delicate shawl, or a handmade accessory,
          Yarnsy is a reminder that real beauty lies in craftsmanship, care, and
          connection. Threads with soul — that’s our promise.
        </p>
      </section>

      <section className="max-w-4xl mx-auto pb-20">
        <h2 className="text-3xl font-serif font-semibold text-gray-900 mb-4">
          Our Values
        </h2>
        <ul className="grid md:grid-cols-3 gap-8 text-gray-700">
          <li className="bg-white rounded-2xl shadow-sm border border-[#f3ebe9] p-6">
            <h3 className="font-semibold text-lg mb-2 text-gray-900">
              Conscious Craft
            </h3>
            <p>Every product is handmade with care, using eco-conscious materials.</p>
          </li>
          <li className="bg-white rounded-2xl shadow-sm border border-[#f3ebe9] p-6">
            <h3 className="font-semibold text-lg mb-2 text-gray-900">
              Artisanal Heritage
            </h3>
            <p>
              We support local artisans and traditional crochet techniques that have
              stood the test of time.
            </p>
          </li>
          <li className="bg-white rounded-2xl shadow-sm border border-[#f3ebe9] p-6">
            <h3 className="font-semibold text-lg mb-2 text-gray-900">
              Sustainable Future
            </h3>
            <p>
              Our mission is to create fashion that lasts — pieces that are as kind
              to the planet as they are to the wearer.
            </p>
          </li>
        </ul>
      </section>
    </main>
  );
}
