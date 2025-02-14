import { AboutUsDataProps } from "@/@types/types";
import { SectionWithContainer } from "@/components";
import TwoColGridCard from "@/components/TwoColGridCard";

const About: React.FC<AboutUsDataProps> = ({
  title,
  subtitle,
  subtitle2,
  desc,
  src,
  label,
  href,
}) => {
  return (
    <SectionWithContainer sectionId="about">
      <TwoColGridCard
        title={title}
        subtitle={subtitle}
        subtitle2={subtitle2}
        desc={desc}
        src={src}
        label={label}
        href={href}
      />
    </SectionWithContainer>
  );
};

export default About;
