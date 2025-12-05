import Image from "next/image";
import { getProducts } from "@/lib/api";

export default async function ProductsPage() {
  const data = await getProducts();
  console.log("Products fetched from CMS:", data);
  console.log(JSON.stringify(data, null, 2));

  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <h1 className="text-6xl font-extrabold tracking-tight">Products</h1>
      <ul className="w-full space-y-4">
        {data.items.map((product) => (
          <li key={product.sys.id}>
            <h2>{product.fields.name}</h2>
            <p>{product.fields.description}</p>

            <div className="relative w-96 h-60">
              <Image
                fill
                src={`https:${product.fields.heroImage?.fields.file?.url}`}
                alt={`https:${product.fields.heroImage?.fields.title}`}
                style={{ objectFit: "cover" }}
              />
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
