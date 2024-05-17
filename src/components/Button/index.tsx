import React, { MouseEventHandler } from "react";
import "./style.css";

interface ButtonProps {
  characterCenter: string;
  characterTop?: string;
  characterBottom?: string;
  backgroundColor?: "black" | "blue" | "yellow";
  fontColor?: "black" | "white";
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export const Button: React.FC<ButtonProps> = ({
  characterCenter,
  characterTop,
  characterBottom,
  backgroundColor = "black",
  fontColor = "white",
  onClick,
}) => {
  return (
    <div className="button">
      <label className="character-top">{characterTop && characterTop}</label>
      <button style={{ background: backgroundColor }} onClick={onClick}>
        <label className="character-center" style={{ color: fontColor }}>
          {characterCenter}
        </label>
        <label className="character-bottom">
          {characterBottom && characterBottom}
        </label>
      </button>
    </div>
  );
};
