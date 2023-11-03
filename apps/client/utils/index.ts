import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import uniqolor from "uniqolor";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateColor = (string: string) => {
  return uniqolor(string, {
    saturation: 210,
    lightness: [80, 100],
  }).color;
};
