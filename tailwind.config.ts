import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx,html}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#CC8648",
        "primary-light" :"#F9F1EB",
        "secondary": "#782F40",
        "secondary-dark": "#450202",
        "green": "#3FA86F",
        "green-light": "#F3F7E9",
        "green-dark": "#00733F",
        "brown": "#BAA89B",
        "brown-light": "#F9F6F4",
        "gray-100": "#F8F9FA",
        "gray-200": "#E9ECEF",
        "gray-300": "#DEE2E6",
        "gray-400": "#CED4DA",
        "gray-500":"#ADB5BD",
        "gray-600":"#6C757D",
        "gray-700":"#495057",
        "gray-800":"#343A40",
        "gray-900": "#212529",
        "opacity-black": "rgba(0,0,0,0.65)",
        "error-300": "#B71106",
        "purple":"#6A00F5",
        "red-100":"#ff0000d9",
        "yellow":"#FFFF00"
      },
      gridTemplateColumns: {
        "40/60": "40% 60%",
        "10/90": "10% 90%",
        fixed: "40px 260px",
      },
      boxShadow: {
        "3xl":
          "0px 6px 16px rgba(58, 53, 65, 0.10), 0px 2px 12px rgba(58, 53, 65, 0.08), 0px 2px 12px rgba(58, 53, 65, 0.10)",
      },

      fontWeight: {
        priority: "none",
      },
 
      fontSize: {
        "header-h1": "1.5rem",
        "header-h3": "1.063rem",
        "main-text": "0.875rem",
        "small-text": "0.688rem",
        "13px": "0.8125em",
        "11px": "0.6875em",
      },
      letterSpacing: {
        "09": "0.009rem",
      },
    },
  },
  plugins: [],
};
export default config;
