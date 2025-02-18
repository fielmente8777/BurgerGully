import { FooterLink, SocialLink } from "@/data/links";
import SectionWithContainer from "./SectionComponents/SectionWithContainer";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="max-screen w-full">
      <SectionWithContainer sectionClassName="bg-primary !pb-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-between lg:gap-10 w-full gap-6">
          <div className="flex flex-col max-sm:items-center max-sm:justify-center w-full lg:gap-8">
            <div className="flex items-start justify-start max-sm:items-center max-sm:justify-center w-full">
              <Link href="#" className="h-[10.5rem] aspect-[4/3.5] relative">
                <Image
                  src="/logo.webp"
                  alt="burger-gully"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </Link>
            </div>
            <ul className="flex items-center justify-center gap-6 max-w-[12rem] w-full">
              {SocialLink.map((link) => (
                <li className="" key={link.id}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-tertiary border-2 border-tertiary w-9 h-9 aspect-square rounded-full flex justify-center items-center hover:bg-tertiary hover:text-white transition-colors duration-300 ease-in-out"
                  >
                    <span className="sr-only">{link.label}</span>
                    {link.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {FooterLink.slice(0, 2).map((item) => (
            <div key={item.id} className="flex flex-col gap-2">
              <h2 className="text-2xl  text-tertiary heading1 thiket  letter_spacing">
                {item.title}
              </h2>
              <ul className="flex flex-col gap-2">
                {item.links.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      key={link.id}
                      target={item.title === "quick links" ? "_self" : "_blank"}
                      className="description2 text-light transition-all"
                    >
                      {link.title && (
                        <b className="capitalize font-bold">{link.title} : </b>
                      )}
                      <span className={item.title === "quick links" ? "" : ""}>
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
                <li>
                  {item?.id === 2 ? (
                    <Link
                      href="https://maps.app.goo.gl/9di9cekSU5ygmrhc6"
                      target="_blank"
                      className="description2 text-tertiary underline underline-offset-2 transition-all"
                    >
                      Get Direction
                    </Link>
                  ) : null}
                </li>
              </ul>
            </div>
          ))}
          {FooterLink.slice(2, 3).map((item) => (
            <div key={item.id} className="flex flex-col gap-2">
              <h2 className="text-2xl  text-tertiary heading1 thiket  letter_spacing">
                {item.title}
              </h2>
              {item.links.map((link) => (
                <div
                  key={link.id}
                  className="description2 text-light flex gap-4"
                >
                  {link.title && <b className="">{link.title} :</b>}
                  <div className="flex flex-col gap-2">
                    <span className="">{link.label}</span>
                    <span className="">{link.href}</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="bg-light w-full h-[1px] lg:my-6 my-6" />
        <div className="flex max-md:flex-col items-center lg:justify-between gap-4">
          <p className="text-center">
            © {currentYear} Burger Gully. <br className="lg:hidden" />
            All Rights Reserved. <br className="lg:hidden" />
            Designed & Developed by{" "}
            <Link href="https://eazotel.com" className="font-bold">
              Eazotel
            </Link>
          </p>
          <p className="">Terms of Service Privacy Policy</p>
        </div>
      </SectionWithContainer>
    </footer>
  );
};

export default Footer;
