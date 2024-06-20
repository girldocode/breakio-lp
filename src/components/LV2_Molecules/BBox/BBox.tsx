import { BText } from "@/components/LV1_Atoms";
import { cn } from "@/utils";
import React from "react";
import { BBoxProps } from "./@types";

const SBox: React.FC<BBoxProps> = ({ title, description, icon }) => {
  const generalStyling =
    "flex flex-col space-y-4 items-center items-center  md:items-start";
  const classes = cn(generalStyling);
  return (
    <div className={classes}>
      <div>{icon}</div>
      <BText as="h3" size="2xl" weight="bold" color="blue-gray-900">
        {title}
      </BText>
      <BText
        as="p"
        weight="normal"
        size="lg"
        color="blue-gray-600"
        className="text-center md:text-left"
      >
        {description}
      </BText>
    </div>
  );
};
export default SBox;
