import { Banner, SectionWithContainer } from "@/components";
import { pageData } from "@/data/pageData";
import {
  About,
  ContactUs,
  Features,
  Gallery,
  OurFeatures,
  Testimonials,
} from "./components";
import Image from "next/image";
import { imageUrl } from "@/data/links";
export default function Home() {
  return (
    <main>
      <Banner {...pageData.bannerData} />
      <About {...pageData.aboutUsData} />
      <Features {...pageData.features} />
      <OurFeatures {...pageData.ourFeatures} />
      <Testimonials />
      <SectionWithContainer sectionClassName="lg:hidden">
        <div className="relative w-full aspect-[4/7] shadow-xl">
          <Image
            src={imageUrl + "img6.webp"}
            alt="contact us"
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </SectionWithContainer>
      <ContactUs />
      <Gallery {...pageData.gallery} />
    </main>
  );
}
