import { createPreset } from "fumadocs-ui/tailwind-plugin";
import {  nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
    "./mdx-components.{ts,tsx}",
    "./node_modules/fumadocs-ui/dist/**/*.js",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/select/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/modal/dist/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [nextui()],
  presets: [createPreset()],
};
