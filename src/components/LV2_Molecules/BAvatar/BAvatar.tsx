// import { BText } from "@/components/LV1_Atoms";
// import { cn } from "@/utils";
// import Image from "next/image";
// import { BAvatarProps } from "./@types";

// const BAvatar: React.FC<BAvatarProps> = ({
//   imageUrl,
//   name,
//   tagline,
//   variant,
// }) => {
//   const generalStyling = "flex gap-x-6 items-center ";
//   const variantStyling =
//     variant === "testimonial"
//       ? " p-4 rounded-md flex flex-col items-center justify-center "
//       : " p-2 rounded-lg p-5 ";

//   const classes = cn(generalStyling, variantStyling);

//   return (
//     <div className={classes}>
//       <Image src={imageUrl} width={64} height={64} alt="avatar" />
//       <div>
//         <BText as="strong" size="base" weight="normal" color="blue-gray-900">
//           {name}
//         </BText>
//         <BText as="strong" size="sm" weight="normal" color="blue-gray-600">
//           {tagline}
//         </BText>
//       </div>
//     </div>
//   );
// };

// export default BAvatar;
import { BText } from "@/components/LV1_Atoms";
import { cn } from "@/utils";
import Image from "next/image";
import { BAvatarProps } from "./@types";

const BAvatar: React.FC<BAvatarProps> = ({
  imageUrl,
  name,
  tagline,
  variant,
}) => {
  const generalStyling = "flex gap-x-6 items-center ";
  const variantStyling =
    variant === "testimonial"
      ? "p-4 rounded-md flex flex-col items-center justify-center"
      : "p-2 rounded-lg p-5";

  const textAlignStyling =
    variant === "testimonial"
      ? "flex flex-col text-center items-center pt-4"
      : "text-left";

  const classes = cn(generalStyling, variantStyling);

  return (
    <div className={classes}>
      <Image src={imageUrl} width={64} height={64} alt="avatar" />
      <div className={textAlignStyling}>
        <BText as="strong" size="base" weight="normal" color="blue-gray-900">
          {name}
        </BText>
        <BText as="strong" size="sm" weight="normal" color="blue-gray-600">
          {tagline}
        </BText>
      </div>
    </div>
  );
};

export default BAvatar;
