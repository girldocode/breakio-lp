import { BButton } from "@/components/LV1_Atoms";
import { SectionTitle } from "@/components/LV2_Molecules";
import Image from "next/image";
import lgbetterImg from "../../../../public/Frame 47.png";
import betterImg from "../../../../public/Frame 48.png";
const BetterEveryDay = () => {
  return (
    <div className="pt-20 px-4 md:px-20 flex flex-col items-center justify-center">
      <SectionTitle
        title="Get better everyday"
        desc="Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin."
      />
      <div className="lg:hidden pt-6">
        <BButton size="sm" weight="medium" color="white">
          Start Now
        </BButton>
      </div>
      <div className="hidden lg:block pt-6">
        <BButton size="lg" weight="medium" color="white">
          Start Now
        </BButton>
      </div>

      <div>
        <Image
          src={betterImg}
          alt="Better Every Day"
          className="pt-6 md:hidden"
        />
        <Image
          src={lgbetterImg}
          alt="Better Every Day"
          className="hidden md:block pt-20"
        />
      </div>
    </div>
  );
};

export default BetterEveryDay;
