import { Color } from "@/~types";
import { TextWeight } from "../BText/@types";

export type ButtonSize = "sm" | "lg";
export type ButtonColor = Color;
export type ButtonWeight = TextWeight;

export interface BButtonProps {
  children: React.ReactNode;
  size: ButtonSize;
  weight?: TextWeight;
  IconStart?: React.ReactNode;
  IconEnd?: React.ReactNode;
  className?: string;
  color?: ButtonColor;
}
