import { BText } from "@/components/LV1_Atoms";
import { BAvatar } from "@/components/LV2_Molecules";
import { FC } from "react";
import { TestimonialCardProps } from "./@types";

const TestimonialCard: FC<TestimonialCardProps> = ({
  title,
  description,
  imageUrl,
  name,
  tagline,
}) => {
  return (
    <div className="h-full flex items-center justify-center min-w-[342px] sm-min-w-[600px] lg:min-w-[750px] space-x-6  ">
      <div className="h-full max-w-[756px]  flex-1 space-y-8 flex justify-center items-center flex-col sm:pr-12 sm:pt-12 sm:pl-12 sm:pb-6  rounded-lg shadow-xl bg-white pt-4">
        <BText
          as="h2"
          weight="bold"
          size="3xl"
          color="blue-gray-900"
          align="center"
          className="text-2xl lg:text-3xl"
        >
          {title}
        </BText>
        <BText
          as="p"
          weight="normal"
          size="2xl"
          color="blue-gray-600"
          align="center"
          className="text-base lg:text-2xl"
        >
          {description}
        </BText>
        <BAvatar
          imageUrl={imageUrl}
          name={name}
          tagline={tagline}
          variant="testimonial"
        />
      </div>
    </div>
  );
};

export default TestimonialCard;
