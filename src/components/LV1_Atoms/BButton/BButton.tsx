import { cn } from "@/utils";
import { TextColor, TextSize } from "../BText/@types";
import BText from "../BText/BText";
import { BButtonProps, ButtonSize, ButtonWeight } from "./@types";

const ContainedButton: React.FC<BButtonProps> = ({
  children,
  size,
  color,
  IconStart,
  IconEnd,
  ...props
}) => {
  // size
  const sizeVariants: Record<ButtonSize, string> = {
    sm: "py-3 pl-7 pr-7 min-w-max ",
    lg: "py-3 pl-10 pr-10 border rounded-3xl  min-w-max",
  };
  // text weight
  const weightVariants: Record<ButtonWeight, string> = {
    thin: "font-thin",
    extralight: "font-extralight",
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
    black: "font-black",
  };

  // color variants
  const colorVariants: Record<TextColor, string> = {
    "fuchsia-600": "text-fuchsia-600",
    "fuchsia-50": "text-fuchsia-50",
    "blue-gray-900": "text-blue-gray-900",
    "blue-gray-600": "text-blue-gray-600",
    "blue-gray-300": "text-blue-gray-300",
    "blue-gray-100": "text-blue-gray-100",
    "blue-light-700": "text-blue-light-700",
    white: "text-white",
    "custom-gradient": "text-custom-gradient",
    "blue-800": "",
    "blue-100": "",
  };

  const generalStyling =
    " border rounded-[18px] flex items-center cursor-pointer hover:opacity-80 bg-fuchsia-600 ";

  // Text Variants
  const TextVariants: Record<ButtonSize, TextSize> = {
    sm: "base",
    lg: "2xl",
  };

  // variant

  const classes = cn(
    generalStyling,
    weightVariants[props.weight || "normal"],
    sizeVariants[size],
    colorVariants[color || "blue-light-700"],
    props.className
  );

  return (
    <button className={classes} {...props}>
      <BText
        as="span"
        size={TextVariants[size]}
        weight={props.weight}
        color={color}
      >
        {children}
      </BText>
    </button>
  );
};

export default ContainedButton;
