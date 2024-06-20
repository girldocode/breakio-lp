// BottomFooter.tsx

import { BLogo, BText } from "@/components/LV1_Atoms";
import Image from "next/image";
import React from "react";
import facebook from "../../../../public/facebook.png";
import twitter from "../../../../public/instagram.png";
import linkedin from "../../../../public/linkedin.png";
import instagram from "../../../../public/twitter.png";
import youtube from "../../../../public/youtube.png";

const iconSources = [
  { src: youtube, alt: "YouTube", href: "/" },
  { src: facebook, alt: "Facebook", href: "/" },
  { src: twitter, alt: "Instagram", href: "/" },
  { src: instagram, alt: "Twitter", href: "/" },
  { src: linkedin, alt: "LinkedIn", href: "/" },
];

const BottomFooter: React.FC = () => {
  return (
    <footer className="px-20">
      <hr className="border-gray-300 "></hr>
      <div className="py-[25px] flex  flex-col lg:flex-row lg:justify-between lg:items-center gap-y-2">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-2  gap-y-2">
          <BLogo variant="footer" />
          <BText as="span">@ 2023 - All rights reserved</BText>
        </div>
        <div className="flex space-x-4">
          {iconSources.map((icon, index) => (
            <div key={index}>
              <a href={icon.href}>
                <Image src={icon.src} alt={icon.alt} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default BottomFooter;
