import { FooterLink, SocialLink } from "@/data/links";
import SectionWithContainer from "./SectionComponents/SectionWithContainer";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="max-screen w-full">
      <SectionWithContainer sectionClassName="bg-primary">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-between lg:gap-10 w-full gap-8">
          <div className="flex flex-col gap-8">
            <Link
              href="#"
              className="flex items-center gap-2 w-full aspect-[4/2] relative"
            >
              <Image
                src="/logo.webp"
                alt="burger-gully"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </Link>
            <ul className="flex items-center justify-center gap-6">
              {SocialLink.map((link) => (
                <li className="" key={link.id}>
                  <Link
                    href={link.href}
                    target="_blank"
                    className="text-tertiary border-2 border-tertiary w-8 h-8 aspect-square rounded-full flex flex-shrink-0 justify-center items-center hover:bg-tertiary hover:text-white transition-colors duration-300 ease-in-out"
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
              <h2 className="text-2xl capitalize text-tertiary heading1 thiket font-semibold tracking-tighter">
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
                        <b className="capitalize">{link.title} : </b>
                      )}
                      <span
                        className={
                          item.title === "quick links" ? "capitalize" : ""
                        }
                      >
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
              <h2 className="text-2xl capitalize text-tertiary heading1 thiket font-semibold tracking-tighter">
                {item.title}
              </h2>
              {item.links.map((link) => (
                <div
                  key={link.id}
                  className="description2 text-light flex gap-4"
                >
                  {link.title && <b className="capitalize">{link.title} :</b>}
                  <div className="flex flex-col gap-2">
                    <span className="capitalize">{link.label}</span>
                    <span className="capitalize">{link.href}</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="bg-light w-full h-[1px] lg:my-4 my-6" />
        <div className="flex max-md:flex-col items-center justify-between gap-4">
          <p className="">
            © {currentYear} Burger Gully. All Rights Reserved. Designed &
            Developed by{" "}
            <Link href="https://eazotel.com" className="font-semibold">
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
