import Image from "next/image";
import Container from "../SectionComponents/Container";
import Paragraph from "../Paragraph/Paragraph";
import Button from "../Button";

interface BannerProps {
  title: string;
  subtitle: string;
  subtitle2: string;
  src: string;
  desc: string;
  buttons: {
    label: string;
    href: string;
  }[];
}
const Banner: React.FC<BannerProps> = ({
  title,
  desc,
  subtitle,
  subtitle2,
  src,
  buttons,
}) => {
  return (
    <section className="max-w-[1600px] mx-auto bg-primary lg:mb-10 max-md:py-6">
      <Container>
        <div className="grid lg:grid-cols-2 items-center justify-center grid-cols-1 gap-4">
          <div className="flax items-center justify-center">
            <div className="flex flex-col items-center justify-center max-w-2xl w-full">
              <div className="flex flex-col lg:gap-0 gap-4">
                <p className="text-tertiary">{subtitle}</p>
                <h1 className="text-tertiary largeHeading thiket  letter_spacing ">
                  {title}
                </h1>
                <p className="text-tertiary text-end">{subtitle2}</p>
                <div className="block lg:hidden">
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src={src}
                      alt="banner"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="max-w-md">
                <Paragraph
                  className={"mt-4 text-center description1"}
                  text={desc}
                />
              </div>
              <div className="flex max-md:flex-col items-center justify-center gap-4 mt-4">
                <button className="bg-secondary text-white py-3 px-6 rounded-full">
                  {buttons[0].label}
                </button>
                <Button
                  href={buttons[1].href}
                  label={buttons[1].label}
                  className="!rounded-full !px-7 bg-white !text-secondary"
                />
              </div>
            </div>
          </div>
          <div className="lg:block hidden">
            <div className="relative w-full aspect-[4/3] top-16">
              <Image
                src={src}
                alt="banner"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
