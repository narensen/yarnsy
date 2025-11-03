import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fef8f7] flex flex-col justify-center px-6">
      <section className="max-w-3xl mx-auto text-left mt-8">
        <div className="font-serif font-semibold text-gray-900">
          <h1 className="text-5xl leading-tight">
            New Arrivals – <br />
            Threads with Soul.
          </h1>
        </div>hop

        <p className="text-gray-600 mt-6 text-lg max-w-2xl">
          Discover our latest handcrafted crochet collection, each piece lovingly
          made with premium yarns and artisanal care.
        </p>

        <Link href="/shop">
          <button className="mt-8 bg-[#cab8f7] text-white px-6 py-3 rounded-full hover:bg-[#b9a2f5] transition flex items-center space-x-2">
            Shop Now
            <span>→</span>
          </button>
        </Link>
        
      </section>
    </main>
  );
}
