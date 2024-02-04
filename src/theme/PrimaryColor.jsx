import React from "react";
import { useThemeContext } from "../context/theme-context";
export default function PrimaryColor({ className }) {
  const { themeHandler } = useThemeContext();
  return (
    <button
      className={className}
      onClick={() => themeHandler(className)}
    ></button>
  );
}
