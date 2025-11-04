import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col justify-center px-6">
      <section className="max-w-3xl mx-auto text-left mb-24">
        <div className="font-serif font-semibold">
          <h1 className="text-5xl leading-tight">
  New Arrivals – <br />
  Gear That Drives Results.
</h1>

<p className="mt-6 text-lg max-w-2xl">
  Explore our latest collection of gym essentials — built tough, 
  tested by athletes, and designed to keep up with your grind.
</p>
        </div>

        <Link href="/shop">
          <button className="mt-8 bg-white text-black px-6 py-3 rounded-full hover:bg-[#b9a2f5] transition flex items-center space-x-2">
            Shop Now
            <span>→</span>
          </button>
        </Link>
        
      </section>
    </main>
  );
}
