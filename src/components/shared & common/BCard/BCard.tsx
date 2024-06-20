import { BBox } from "@/components/LV2_Molecules";
import Image from "next/image";
import { CardProps } from "./@types";

const Card: React.FC<CardProps> = ({ image, title, description }) => {
  return (
    <BBox
      icon={<Image src={image} alt={title} width={64} height={64} />}
      title={title}
      description={description}
    />
  );
};

export default Card;
