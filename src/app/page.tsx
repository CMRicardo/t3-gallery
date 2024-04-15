import { db } from "@/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...images, ...images, ...images].map((image, index) => (
          <div key={image.id + "-" + index} className="flex flex-col gap-2">
            <img src={image.url} alt="gallery" className="w-48" />
            <span>{image.name}</span>
          </div>
        ))}
      </div>
      Hello (gallery in progress)
    </main>
  );
}
