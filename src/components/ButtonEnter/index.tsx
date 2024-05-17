import React, { MouseEventHandler } from "react";
import "./style.css";

interface EnterProps {
  characterTop?: string;
  characterBottom?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export const Enter: React.FC<EnterProps> = ({
  characterTop,
  characterBottom,
  onClick,
}) => {
  return (
    <div className="enter">
      <label className="enter-character-top">
        {characterTop && characterTop}
      </label>
      <button onClick={onClick}>
        <label className="enter-character-center">
          E <br /> N <br /> T <br /> E <br /> R
        </label>
        <label className="enter-character-bottom">
          {characterBottom && characterBottom}
        </label>
      </button>
    </div>
  );
};
