import Image from "next/image";

const PropertyImages = ({ images }) => {
  return (
    <section className="bg-blue-50 p-4">
      <div className="container mx-auto">
        {images.length === 1 ? (
          <div className="relative h-[400px] w-full max-w-5xl mx-auto">
            <Image
              src={images[0]}
              alt="Property"
              fill
              sizes="(max-width: 768px) 100vw, 1024px"
              className="object-cover rounded-xl"
              preload
            />
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className={`relative h-[400px] ${
                  images.length === 3 && index === 2
                    ? "col-span-2"
                    : "col-span-1"
                }`}
              >
                <Image
                  src={image}
                  alt={`Property image ${index + 1}`}
                  fill
                  sizes={
                    images.length === 3 && index === 2
                      ? "(max-width: 768px) 100vw, 1024px"
                      : "(max-width: 768px) 50vw, 512px"
                  }
                  loading={index === 0 ? "eager" : "lazy"}
                  className="object-cover rounded-xl"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertyImages;
