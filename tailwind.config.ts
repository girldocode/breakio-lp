import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        "fuchsia-600": "#C026D3",
        "fuchsia-50": "#FDF4FF",
        "blue-gray-900": "#0F172A",
        "blue-gray-600": "#475569",
        "blue-gray-300": "#CBD5E1",
        "blue-gray-100": "#F1F5F9",
        "blue-800": "#1E40AF",
        "blue-100": "#DBEAFE",
        white: "#FFFFFF",
        "custom-gradient":
          "linear-gradient(90deg, rgba(164,16,173,1) 27%, rgba(69,10,77,1) 85%)",
      },
      backgroundImage: {
        "gradient-to-r-custom":
          "linear-gradient(90deg, rgba(164,16,173,1) 27%, rgba(69,10,77,1) 85%)",
      },
    },
  },
  plugins: [],
};
export default config;
