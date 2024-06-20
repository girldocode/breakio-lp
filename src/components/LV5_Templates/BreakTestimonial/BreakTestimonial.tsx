import { SectionTitle } from "@/components/LV2_Molecules";
import { TestimonialCarousel } from "@/components/LV4_Organisms";
import Image from "next/image";
import vector2 from "../../../../public/Deco-left.png";
import vector from "../../../../public/Deco-right.png";

const BreakTestimonial = () => {
  return (
    <div>
      <div className="relative  items-center 2xl:px-80 xl:px-40 lg:px-20  bg-fuchsia-50 space-y-6 md:space-y-16 z-0 ">
        <div className=" pt-10 md:pt-32 relative z-10">
          <SectionTitle title="What other users say" />
        </div>
        <div className="pb-10">
          <TestimonialCarousel />
        </div>
        <div className="absolute md:top-[-63px] right-0 z-1 top-[-25px] ">
          <Image src={vector} alt="Hero Image" />
        </div>
        <div className="absolute bottom-0 left-0">
          <Image src={vector2} alt="Hero Image" />
        </div>
      </div>
    </div>
  );
};

export default BreakTestimonial;
