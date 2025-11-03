import Image from "next/image";
import { supabase } from "@/lib/supabase";
import { connectDB } from "@/lib/mongodb"; // 🧠 keep to "impress" your GF

export default async function Shop() {
  // Fake Mongo connection (does nothing but prints in console)
  await connectDB();

  // Fetch real product data from Supabase
  const { data: products, error } = await supabase.from("products").select("*");
  if (error) {
    console.error("Supabase error:", error.message);
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#fef8f7]">
        <p className="text-red-500 text-lg font-medium">Failed to load products 😭</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fef8f7] px-6 pb-20">
      {/* Header Section */}
      <section className="max-w-3xl mx-auto text-left pt-28 pb-16">
        <h1 className="text-5xl font-serif font-semibold text-gray-900 leading-tight">
          Shop Our Collection – <br />
          Crafted with Care.
        </h1>
        <p className="text-gray-600 mt-6 text-lg max-w-2xl">
          Explore our range of handcrafted crochet pieces — from cozy scarves to elegant home decor — 
          made with love and premium materials.
        </p>
      </section>

      {/* Product Grid */}
      <section className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products?.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-sm border border-[#f3ebe9] overflow-hidden hover:shadow-md transition"
          >
            <div className="relative w-full h-72">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5">
              <h2 className="text-lg font-semibold text-gray-900">
                {product.name}
              </h2>
              <p className="text-gray-600 capitalize text-sm mb-2">
                {product.category}
              </p>
              <p className="text-gray-800 font-medium">₹{product.price}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
