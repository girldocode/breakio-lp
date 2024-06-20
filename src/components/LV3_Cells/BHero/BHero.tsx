import { BForm, SectionTitle } from "@/components/LV2_Molecules";
import Image from "next/image";
import HeroImage from "../../../../public/Picture (1).png";
import HeroImg from "../../../../public/Picture.png";
const BHero = () => {
  return (
    <div className="pt-14">
      <div className=" px-4 md:px-20">
        <SectionTitle
          title="It’s time to take a break"
          desc="Build your meditation skills with an app that gives you all you need!"
        />
        <BForm />
        <div className="flex h-full  w-full items-center justify-center lg:pt-20">
          <Image src={HeroImg} alt="Hero Image" className="md:hidden" />
          <Image src={HeroImage} alt="Hero Image" className="hidden md:block" />
        </div>
      </div>
    </div>
  );
};

export default BHero;
