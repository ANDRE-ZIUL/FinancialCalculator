import React from "react";
import "./style.css";
import image from "../components/Image/HPIcon.png";
import { Button } from "@/components/Button";
import { Enter } from "@/components/ButtonEnter";

export const FinancialCalculator: React.FC = () => {
  return (
    <div className="financial-calculator">
      <div className="financial-calculator-header">
        <div className="financial-calculator-display">123,456</div>
        <img src={image} alt="hp" />
      </div>

      <div className="financial-calculator-keyboard">
        <div className="financial-calculator-keyboard-line">
          <Button
            characterTop="AMORT"
            characterCenter="PMT"
            characterBottom="12 x"
          />
          <Button
            characterTop="INT"
            characterCenter="i"
            characterBottom="12 ÷"
          />
          <Button
            characterTop="NPV"
            characterCenter="PV"
            characterBottom="CFo"
          />
          <Button
            characterTop="RND"
            characterCenter="PMT"
            characterBottom="CFj"
          />
          <Button
            characterTop="IRR"
            characterCenter="FV"
            characterBottom="Nj"
          />
          <Button
            characterTop="⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            characterCenter="CHS"
            characterBottom="DATE"
          />
          <Button
            characterTop="⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            characterCenter="7"
            characterBottom="BEG"
          />
          <Button
            characterTop="⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            characterCenter="8"
            characterBottom="END"
          />
          <Button
            characterTop="⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            characterCenter="9"
            characterBottom="MEM"
          />
          <Button characterTop="⠀⠀⠀⠀⠀⠀⠀⠀⠀" characterCenter="÷" />
        </div>
        <div className="financial-calculator-keyboard-line">
          <Button
            characterTop="PRICE"
            characterCenter="yx"
            characterBottom="√x"
          />
          <Button
            characterTop="YTM"
            characterCenter="1/x"
            characterBottom="ex"
          />
          <Button characterTop="SL" characterCenter="%T" characterBottom="LN" />
          <Button
            characterTop="SOYD"
            characterCenter="Δ%"
            characterBottom="FRAC"
          />
          <Button
            characterTop="DB"
            characterCenter="%"
            characterBottom="INTG"
          />
          <Button
            characterTop="⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            characterCenter="EEX"
            characterBottom="ΔDYS"
          />
          <Button
            characterTop="⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            characterCenter="4"
            characterBottom="D.MY"
          />
          <Button
            characterTop="⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            characterCenter="5"
            characterBottom="M.DY"
          />
          <Button
            characterTop="⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            characterCenter="6"
            characterBottom="x̅w"
          />
          <Button characterTop="⠀⠀⠀⠀⠀⠀⠀⠀⠀" characterCenter="x" />
        </div>
        <div className="financial-calculator-bottom">
          <div className="financial-calculator-keyboard-second">
            <div style={{ display: "flex", gap: "26px" }}>
              <Button
                characterTop="P/R"
                characterCenter="R/S"
                characterBottom="PSE"
              />
              <Button
                characterTop="Σ"
                characterCenter="SST"
                characterBottom="BST"
              />
              <Button
                characterTop="PRGM"
                characterCenter="R↓"
                characterBottom="GTO"
              />
              <Button
                characterTop="FIN"
                characterCenter="x≤y"
                characterBottom="x̅≤y"
              />
              <Button
                characterTop="REG"
                characterCenter="CLX"
                characterBottom="x=0"
              />
            </div>
            <div style={{ display: "flex", gap: "26px" }}>
              <Button
                characterTop="⠀⠀⠀⠀⠀⠀⠀⠀⠀"
                characterCenter="ON"
                characterBottom="⠀⠀⠀⠀⠀⠀⠀⠀⠀"
              />
              <Button
                characterTop="⠀⠀⠀⠀⠀⠀⠀⠀⠀"
                characterCenter="f"
                characterBottom="⠀⠀⠀⠀⠀⠀⠀⠀⠀"
                fontColor="black"
                backgroundColor="yellow"
              />
              <Button
                characterTop="⠀⠀⠀⠀⠀⠀⠀⠀⠀"
                characterCenter="g"
                characterBottom="⠀⠀⠀⠀⠀⠀⠀⠀⠀"
                fontColor="black"
                backgroundColor="blue"
              />
              <Button
                characterTop="⠀⠀⠀⠀⠀⠀⠀⠀⠀"
                characterCenter="STO"
                characterBottom="⠀⠀⠀⠀⠀⠀⠀⠀⠀"
              />
              <Button
                characterTop="⠀⠀⠀⠀⠀⠀⠀⠀⠀"
                characterCenter="RCL"
                characterBottom="⠀⠀⠀⠀⠀⠀⠀⠀⠀"
              />
            </div>
          </div>
          <Enter characterTop="PREFIX" characterBottom="LST X" />
        </div>
        <div className="financial-calculator-keyboard-fourth-line"></div>
      </div>
    </div>
  );
};
