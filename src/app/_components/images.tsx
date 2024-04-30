import { getMyImages } from "@/server/queries";
import Image from "next/image";

export const Images = async () => {
  const images = await getMyImages();
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {images.map((image) => (
        <div key={image.id} className="flex w-48 flex-col gap-2">
          <Image width={192} height={192} src={image.url} alt={image.name} />
          <span>{image.name}</span>
        </div>
      ))}
    </div>
  );
};
