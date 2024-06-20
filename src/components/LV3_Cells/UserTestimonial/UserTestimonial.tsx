import { PromoteTag } from "@/components/LV1_Atoms";
import { BAvatar } from "@/components/LV2_Molecules";
import { UserTestimonialProps } from "@/components/LV3_Cells/UserTestimonial/@types";
import { cn } from "@/utils";
import Image from "next/image";
import { FC } from "react";

const UserTestimonial: FC<UserTestimonialProps> = ({
  active,
  src,
  alt,
  width,
  height,
  imageUrl,
  name,
  tagline,
  showPromoteTag,
}) => {
  const activeStyle = "border-blue-500";
  const isNotActiveStyle = "border-gray-200";

  const generalStyling = " flex items-center justify-center";
  const classes = cn(generalStyling, active ? activeStyle : isNotActiveStyle);

  return (
    <div className={classes}>
      <div className="relative flex flex-col border-[1px] rounded-[10px] bg-white">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="border-0 rounded-tl-[10px] rounded-tr-[10px]"
        />
        <BAvatar
          imageUrl={imageUrl}
          name={name}
          tagline={tagline}
          variant={"userTestimonial"}
        />
        {showPromoteTag && (
          <div className="absolute top-2 right-2">
            <PromoteTag />
          </div>
        )}
      </div>
    </div>
  );
};

export default UserTestimonial;
