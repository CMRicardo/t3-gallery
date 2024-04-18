import {db} from "@/server/db";

export const Images = async () => {
    const images = await db.query.images.findMany({
        orderBy: (model, { desc }) => desc(model.id),
    });
    return (
        <div className="flex flex-wrap gap-4">
            {images.map((image) => (
                <div key={image.id} className="flex flex-col gap-2">
                    <img src={image.url} alt="gallery" className="w-48"/>
                    <span>{image.name}</span>
                </div>
            ))}
        </div>
    )
}