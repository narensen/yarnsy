export default function About() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col justify-center px-6">
      <section className="max-w-4xl mx-auto text-left pt-28 pb-16">
        <h1 className="text-5xl font-serif font-semibold leading-tight mb-6">
          Our Story – <br />
          Where Strength Meets Purpose.
        </h1>

        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          At <span className="font-semibold text-white">IronPulse</span>, we believe
          fitness is more than reps and sets — it’s a mindset. What started as a small
          vision to build durable, no-nonsense gym gear has grown into a mission to
          empower athletes, lifters, and everyday grinders to push beyond their limits.
        </p>

        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Every piece of equipment we design is forged with precision, endurance,
          and performance in mind. From barbells to benches, we engineer products
          that can take a beating — and keep up with your intensity. No gimmicks.
          No shortcuts. Just gear that performs as hard as you do.
        </p>

        <p className="text-gray-300 text-lg leading-relaxed">
          Whether you’re chasing PRs, building muscle, or sharpening your focus,
          <span className="font-semibold text-white"> IronPulse </span> is here
          to equip your journey. Built strong. Built to last. Built for you.
        </p>
      </section>

      <section className="max-w-4xl mx-auto pb-20">
        <h2 className="text-3xl font-serif font-semibold mb-8">
          Our Core Values
        </h2>
        <ul className="grid md:grid-cols-3 gap-8 text-gray-300">
          <li className="bg-[#111111] rounded-2xl border border-gray-700 p-6 hover:border-[#b9a2f5] transition">
            <h3 className="font-semibold text-lg mb-2 text-white">
              Built to Endure
            </h3>
            <p>Every product is tested for performance and durability — gear that lasts through every drop of sweat and rep.</p>
          </li>
          <li className="bg-[#111111] rounded-2xl border border-gray-700 p-6 hover:border-[#b9a2f5] transition">
            <h3 className="font-semibold text-lg mb-2 text-white">
              Driven by Athletes
            </h3>
            <p>We collaborate with real athletes and trainers to design equipment that meets the demands of serious training.</p>
          </li>
          <li className="bg-[#111111] rounded-2xl border border-gray-700 p-6 hover:border-[#b9a2f5] transition">
            <h3 className="font-semibold text-lg mb-2 text-white">
              Strength with Integrity
            </h3>
            <p>Our mission is to elevate performance without compromise — honest quality, ethical sourcing, and precision engineering.</p>
          </li>
        </ul>
      </section>
    </main>
  );
}
