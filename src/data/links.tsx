import { footerLinkProps, navLinkProps, socialLinkProps } from "@/@types/types";
import { FillFacebook, FillInstagram } from "@/icons/icons";

export const imageUrl =
  "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/burger_gully/";

export const NavLink: navLinkProps[] = [
  {
    id: 1,
    label: "home",
    href: "#",
  },
  {
    id: 2,
    label: "About",
    href: "#about",
  },
  {
    id: 3,
    label: "Features",
    href: "#features",
  },
  {
    id: 4,
    label: "Our Featured Dishes",
    href: "#our_featured_dishes",
  },
  {
    id: 5,
    label: "Reviews",
    href: "#reviews",
  },
  {
    id: 6,
    label: "Gallery",
    href: "#gallery",
  },
  {
    id: 7,
    label: "Contact Us",
    href: "#contact_us",
  },
];

export const SocialLink: socialLinkProps[] = [
  {
    id: 1,
    label: "facebook",
    icon: <FillFacebook />,
    href: "https://www.facebook.com/people/Burger-Gully-Kolkata/61559753117983/#",
  },
  {
    id: 2,
    label: "instagram",
    icon: <FillInstagram />,
    href: "https://www.instagram.com/burgergullykolkata/?hl=en",
  },
];

export const FooterLink: footerLinkProps[] = [
  {
    id: 1,
    title: "Quick Links",
    links: [
      {
        id: 1,
        label: "About",
        href: "#about",
      },
      {
        id: 2,
        label: "Features",
        href: "#features",
      },
      {
        id: 3,
        label: "Our Featured Dishes",
        href: "#our_featured_dishes",
      },
      {
        id: 4,
        label: "Reviews",
        href: "#reviews",
      },
      {
        id: 5,
        label: "Gallery",
        href: "#gallery",
      },
      {
        id: 6,
        label: "Contact Us",
        href: "#contact_us",
      },
    ],
  },
  {
    id: 2,
    title: "Get In Touch",
    links: [
      {
        id: 1,
        title: "call",
        label: "094747 84877",
        href: "tel:094747 84877",
      },
      {
        id: 2,
        title: "email",
        label: "adakbrothers9499@gmail.com",
        href: "mailto:adakbrothers9499@gmail.com",
      },
      {
        id: 3,
        title: "address",
        label:
          "68/4D, Purna Das Rd, opp. Bank Of Maharashtra ATM, Triangular Park, lake Terrace, Kalighat, Kolkata, West Bengal 700029",
        href: "https://maps.app.goo.gl/9di9cekSU5ygmrhc6",
      },
    ],
  },
  {
    id: 3,
    title: "Opening Hours",
    links: [
      {
        id: 1,
        title: "Dine-in",
        label: "Mon to Sun",
        href: "12PM – 11PM",
      },
      {
        id: 2,
        title: "Online",
        label: "Mon to Sun",
        href: "12PM – 12AM",
      },
    ],
  },
];
