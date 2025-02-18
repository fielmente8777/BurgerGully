import Image from "next/image";
import Paragraph from "./Paragraph/Paragraph";
import Button from "./Button";
import { AboutUsDataProps } from "@/@types/types";

const TwoColGridCard: React.FC<AboutUsDataProps> = ({
  title,
  subtitle,
  subtitle2,
  desc,
  src,
  label,
  href,
  index = 0,
}) => {
  return (
    <>
      <div
        className={`lg:grid grid-cols-2 lg:items-center gap-6 ${index % 2 === 0 ? "lg:flex-col" : "lg:flex-col-reverse"}`}
      >
        <div
          className={`col-span-1 mb-5 w-full h-full ${index % 2 === 0 ? "order-1 max-md:mt-4" : "order-2 max-md:mb-4"}`}
        >
          {src && (
            <div
              className={` relative w-full aspect-[4/2.88] rounded-lg overflow-hidden `}
            >
              <Image
                src={src}
                alt="Image 1"
                className="object-cover object-top"
                sizes="100vw"
                fill
              />
            </div>
          )}
        </div>
        <div
          className={` flex flex-col gap-4 col-span-1  ${index % 2 === 0 ? "order-2" : "order-1"}`}
        >
          {title && (
            <div className="flex flex-col gap-0 lg:w-[20rem] w-[16rem]">
              <h2 className=" text-extra  p-0 m-0 ">
                <span className="text-secondary lg:heading1 font-normal capitalize">
                  {subtitle}{" "}
                </span>
                <span className="mediumHeading thiket ">{title}</span>
              </h2>
              <h3 className=" text-secondary lg:heading1 text-end p-0 -mt-2">
                {subtitle2}
              </h3>
            </div>
          )}
          {desc && <Paragraph text={desc} />}
          {label && href && (
            <div className="flex items-center justify-center lg:justify-start">
              <Button
                label={label}
                href={href}
                className="bg-secondary !rounded-full w-fit px-6"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TwoColGridCard;
