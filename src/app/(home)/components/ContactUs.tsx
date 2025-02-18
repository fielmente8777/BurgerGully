import { Container, Section } from "@/components";
import Form from "@/components/Form";
import { imageUrl } from "@/data/links";
import Image from "next/image";

const ContactUs = () => {
  return (
    <Section lgpy={"16"} py="4" className="lg:mt-12" id="contact_us">
      <Section>
        <div className="relative w-full lg:aspect-[4/1.4] aspect-[4/6.3]">
          <Image
            src={imageUrl + "img5.webp"}
            alt="contact us"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex flex-col items-center justify-center">
            <Container>
              <div className="lg:grid flex w-full grid-cols-3 gap-6 items-center justify-center">
                <div className="col-span-1 lg:block hidden"></div>
                <div className="col-span-1 relative -top-20 z-20 w-full h-full lg:block hidden">
                  <div className="absolute top-0 left-0 w-full z-20">
                    <div className="relative w-full aspect-[4/6]">
                      <Image
                        src={imageUrl + "img6.webp"}
                        alt="contact us"
                        fill
                        className="object-resize rounded-lg"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-1 w-full">
                  <Form />
                </div>
              </div>
            </Container>
          </div>
        </div>
      </Section>
    </Section>
  );
};

export default ContactUs;
