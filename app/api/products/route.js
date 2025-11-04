import { NextResponse } from "next/server";
import Product from "@/models/Product";

export async function GET() {
  await connectDB();
  const products = await Product.find({});
  return NextResponse.json(products);
}

export async function POST(req) {
  await connectDB();
  const data = await req.json();
  const newProduct = await Product.create(data);
  return NextResponse.json(newProduct);
}
