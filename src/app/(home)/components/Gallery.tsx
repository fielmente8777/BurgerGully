import { GalleryDataProps } from "@/@types/types";
import { MainHeading, Section } from "@/components";
import Image from "next/image";

const Gallery: React.FC<GalleryDataProps> = ({ title, images }) => {
  return (
    <Section>
      <div className="flex flex-col items-center justify-center w-full lg:gap-14 gap-7 our_features_swiper">
        <MainHeading
          title={title}
          className="text-tertiary text-center mediumHeading thiket uppercase tracking-tighter font-semibold"
        />
        <div className="flex max-sm:flex-col justify-center w-full">
            {images.map((image, index) => (
                <div key={index} className="w-full lg:aspect-[4/3.5] aspect-[4/3] relative">
                    <Image src={image} alt={title+index} fill className="object-cover"/>
                </div>
            ))}
        </div>
      </div>
    </Section>
  );
};

export default Gallery;
