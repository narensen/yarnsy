import Image from "next/image";
import { createClient } from "@supabase/supabase-js";

export default async function Shop() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    { auth: { persistSession: false } }
  );

  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    console.error("Supabase error:", error);
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-800 px-6">
        <p className="text-red-500 text-lg font-medium">
          Failed to load products.
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black px-6 pb-20">
      <section className="max-w-3xl mx-auto text-left pt-28 pb-16">
<h1 className="text-5xl font-serif font-semibold text-white leading-tight">
  Gear Up for Greatness – <br /> Engineered for Power.
</h1>
<p className="text-gray-200 mt-6 text-lg max-w-2xl">
  Explore our collection of high-performance gym equipment — built for durability, 
  precision, and results. Elevate your training with gear made for champions.
</p>

      </section>

      <section className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products?.map((product) => (
          <div
            key={product.id}
            className="bg-gray-200 rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition"
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
