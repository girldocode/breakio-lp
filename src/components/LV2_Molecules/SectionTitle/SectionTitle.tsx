import { BText } from "@/components/LV1_Atoms";
import React from "react";
import { SectionTitleProps } from "./@types";

const SectionTitle: React.FC<SectionTitleProps> = ({ title, desc }) => {
  return (
    <div className="text-center">
      <BText
        as="h1"
        size="2xl"
        align="center"
        className="lg:text-7xl lg:leading-[79.2px] lg:font-extrabold text-4xl leading-[35.2px] font-bold  bg-gradient-to-r-custom text-transparent bg-clip-text  "
      >
        {title}
      </BText>
      <BText
        as="p"
        align="center"
        className="lg:text-xl lg:leading-[36px] lg:font-normal text-lg leading-[22.4px] pt-6 max-w-4xl mx-auto "
      >
        {desc}
      </BText>
    </div>
  );
};

export default SectionTitle;
