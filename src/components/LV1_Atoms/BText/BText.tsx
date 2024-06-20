import { cn } from "@/utils";
import {
  BTextProps,
  clamp,
  FluidSize,
  offset,
  TextAlign,
  TextColor,
  TextDecor,
  TextLeading,
  TextSize,
  TextStyle,
  TextTracking,
  TextTransform,
  TextWeight,
} from "./@types";

/**
 * Renders a styled text component with various customizable properties.
 *
 * @param {React.ReactNode} children - The content to be rendered inside the component.
 * @param {keyof JSX.IntrinsicElements} as - The HTML tag to be used for the component. Defaults to 'p'.
 * @param {TextSize} size - The size of the text. Defaults to 'base'.
 * @param {TextLeading} leading - The line height of the text. Defaults to 'normal'.
 * @param {TextTracking} tracking - The letter spacing of the text. Defaults to 'normal'.
 * @param {TextWeight} weight - The weight of the text. Defaults to 'normal'.
 * @param {TextStyle} textStyle - The style of the text. Defaults to 'normal'.
 * @param {clamp} clamp - The number of lines to clamp the text to. Defaults to 'none'.
 * @param {TextAlign} align - The alignment of the text. Defaults to 'left'.
 * @param {TextDecor} decor - The decoration of the text. Defaults to 'none'.
 * @param {TextTransform} transform - The transformation of the text. Defaults to 'none'.
 * @param {offset} offset - The outline offset of the text. Defaults to '0'.
 * @param {TextColor} color - The color of the text. Defaults to 'blue-gray-600'.
 * @return {JSX.Element} The rendered styled text component.
 */

const BText: React.FC<BTextProps> = ({
  children,
  as = "p",
  size,
  fluidSize,
  leading = "normal",
  tracking = "normal",
  weight = "normal",
  textStyle = "normal",
  clamp = "none",
  align = "left",
  decor = "none",
  transform = "none",
  offset = "0",
  color = "blue-gray-600",
  className,
}) => {
  const Tag = as;

  // size
  const sizeVariants: Record<TextSize, string> = {
    xs: "text-xs", // 12px
    sm: "text-sm", // 14px
    base: "text-base", // 16px
    lg: "text-lg", // 18px
    xl: "text-xl", // 20px
    "2xl": "text-2xl", // 24px
    "3xl": "text-3xl", // 30px
    "2rem": "text-[2rem]",
    "4xl": "text-4xl", // 36px
    "5xl": "text-5xl", // 48px
    "3.5rem": "text-[3.5rem]",
    "6xl": "text-6xl", // 60px
    "7xl": "text-7xl", // 72px
  };

  // fluid size
  const fluidSizeVariants: Record<FluidSize, string> = {
    xs: "fluid-text-xs",
    sm: "fluid-text-sm",
    base: "fluid-text-base",
    lg: "fluid-text-lg",
    xl: "fluid-text-xl",
    "2xl": "fluid-text-2xl",
    "3xl": "fluid-text-3xl",
    "4xl": "fluid-text-4xl",
    "5xl": "fluid-text-5xl",
    "6xl": "fluid-text-6xl",
    "7xl": "fluid-text-7xl",
  };

  // line height
  const leadingVariants: Record<TextLeading, string> = {
    none: "leading-none", // equivalent to line-height: 1
    tight: "leading-tight", //  line-height: 1.25
    normal: "leading-normal", // line-height: 1.5
    loose: "leading-loose", //  line-height: 2
    "x-loose": "leading-10", //  leading-{n}
  };

  // letter spacing
  const trackingVariants: Record<TextTracking, string> = {
    tighter: "tracking-tighter",
    tight: "tracking-tight",
    normal: "tracking-normal",
    wide: "tracking-wide",
    wider: "tracking-wider",
    widest: "tracking-widest",
  };

  // text weight
  const weightVariants: Record<TextWeight, string> = {
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

  // text style
  const textStyleVariants: Record<TextStyle, string> = {
    normal: "not-italic",
    italic: "italic",
  };

  // clamp variants
  const clampVariants: Record<clamp, string> = {
    "1": "line-clamp-1",
    "2": "line-clamp-2",
    "3": "line-clamp-3",
    "4": "line-clamp-4",
    "5": "line-clamp-5",
    "6": "line-clamp-6",
    none: "line-clamp-none",
  };

  // text align
  const textAlignVariants: Record<TextAlign, string> = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
    start: "text-start",
    end: "text-end",
  };

  // text decoration
  const textDecorationVariants: Record<TextDecor, string> = {
    none: "no-underline",
    underline: "underline",
    overline: "overline",
    "line-through": "line-through",
  };

  // text transform
  const textTransformVariants: Record<TextTransform, string> = {
    none: "normal-case",
    uppercase: "uppercase",
    lowercase: "lowercase",
    capitalize: "capitalize",
  };

  // offset variants
  const offsetVariants: Record<offset, string> = {
    "0": "outline-offset-0",
    "1": "outline-offset-1",
    "2": "outline-offset-2",
    "4": "outline-offset-4",
    "8": "outline-offset-8",
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
    "blue-800": "text-blue-800",
    "blue-100": "text-blue-100",
    white: "text-white",
    "custom-gradient": "text-custom-gradient",
  };
  const classes = cn(
    sizeVariants[size as keyof typeof sizeVariants],
    ...(fluidSize ? [fluidSizeVariants[fluidSize]] : []),
    leadingVariants[leading],
    trackingVariants[tracking],
    weightVariants[weight],
    textStyleVariants[textStyle],
    clampVariants[clamp],
    textAlignVariants[align],
    textDecorationVariants[decor],
    textTransformVariants[transform],
    offsetVariants[offset],
    colorVariants[color],
    className
  );

  return <Tag className={classes}>{children}</Tag>;
};

export default BText;
