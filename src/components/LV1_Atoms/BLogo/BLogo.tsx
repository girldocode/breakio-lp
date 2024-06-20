import React from "react";
import BText from "../BText/BText";
import { BLogoProps } from "./@types";

const BLogo: React.FC<BLogoProps> = ({ variant }) => {
  const isHeader = variant === "header";
  const textSize = isHeader ? "3xl" : "xl";
  const fontWeight = isHeader ? "bold" : "medium";

  return (
    <div>
      <BText as="h1" size={textSize} weight={fontWeight}>
        <span className="text-blue-gray-900">break</span>
        <span className="text-fuchsia-800">io</span>
      </BText>
    </div>
  );
};

export default BLogo;
