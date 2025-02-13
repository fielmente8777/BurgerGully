import {
  DineInorTakeaway,
  FreshQualityIngredients,
  HandcraftedtoPerfection,
} from "@/icons/icons";
import { imageUrl } from "./links";

export const pageData = {
  bannerData: {
    title: "Burger Gully!",
    subtitle: "Get Hooked on Flavor at",
    subtitle2: "Dil Se Desi",
    src: imageUrl + "img1.webp",
    desc: "Deliciously Crafted Burgers Made Fresh, Just for You! Savor every bite with our premium ingredients and bold flavors, all grilled to perfection.",
    buttons: [
      {
        label: "Book a Table",
        href: "/book-now",
      },
      {
        label: "View Menu",
        href: "/order-now",
      },
    ],
  },
  aboutUsData: {
    title: "Burger Gully",
    subtitle: "about",
    subtitle2: "Dil Se Desi",
    desc: "At Burger Gully, we're all about creating unforgettable burger experiences. Our mission is simple: to serve up delicious, mouth-watering burgers that are crafted with the finest ingredients, bold flavors, and a whole lot of love. Whether you're a classic burger lover or someone looking for something a bit more adventurous, we’ve got something for every taste bud.",
    src: imageUrl + "img2.webp",
    label: "contact us",
    href: "#contact-us",
  },
  features: {
    title: "Features",
    desc: "From Classic to Creative – Burger Gully Has It All",
    cards: [
      {
        id: 1,
        title: "Handcrafted to Perfection",
        subtitle:
          "Each burger is made-to-order, ensuring a fresh, juicy, and satisfying flavor. Grilled and crafted with the finest ingredients for a taste that stands out",
        icon: <HandcraftedtoPerfection />,
      },
      {
        id: 2,
        title: "Dine-In or Takeaway",
        subtitle:
          "Enjoy a cozy dine-in experience with friends and family or grab a convenient takeaway to savor our mouth-watering burgers wherever you go, fresh.",
        icon: <DineInorTakeaway />,
      },
      {
        id: 3,
        title: "Fresh, Quality Ingredients",
        subtitle:
          "Every burger is made with premium, locally sourced ingredients to ensure each bite bursts with flavor. We prioritize freshness, bringing you the best in every burger.t",
        icon: <FreshQualityIngredients />,
      },
    ],
  },
  ourFeatures: {
    title: "our FEATUREd dishes",
    desc: "Discover our signature dishes, expertly crafted for an unforgettable flavor experience!",
    images: [
      {
        id: 1,
        src: imageUrl + "img3.webp",
        title: "Burger Gully",
      },
      {
        id: 2,
        src: imageUrl + "img4.webp",
        title: "Burger Gully",
      },
      {
        id: 3,
        src: imageUrl + "img3.webp",
        title: "Burger Gully",
      },
    ],
  },
  gallery: {
    title: "Photo Gallery",
    images: [
      imageUrl + "img7.webp",
      imageUrl + "img8.webp",
      imageUrl + "img9.webp",
      imageUrl + "img10.webp",
    ],
  },
};
