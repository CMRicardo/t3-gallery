const mockUrls = [
  "https://utfs.io/f/8ffe3d7f-c145-4226-9b9c-e2608d8911fd-wu3imb.jpg",
  "https://utfs.io/f/ebc102ff-f1f0-427b-80e0-875fe19a4073-1bmwd.jpg",
  "https://utfs.io/f/030a1cc3-8d8d-4666-b0b6-d30f850cf1ef-nlzi21.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages, ...mockImages].map(
          (image) => (
            <div key={image.id} className="w-48">
              <img src={image.url} />
            </div>
          ),
        )}
      </div>
      Hello (gallery in progress)
    </main>
  );
}
