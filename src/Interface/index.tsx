import React, { useEffect, useState } from "react";
import "./style.css";
import image from "../components/Image/HPIcon.png";
import { Button } from "@/components/Button";
import { Enter } from "@/components/ButtonEnter";

export const FinancialCalculator: React.FC = () => {
  const [i, setI] = useState<string>("0");
  const [n, setN] = useState<string>("0");
  const [FV, setFV] = useState<string>("0");
  const [PV, setPV] = useState<string>("0");
  const [display, setDisplay] = useState<string>("0.00");
  const [F, setF] = useState<boolean>(false);
  const [CHSON, setCHSON] = useState<boolean>(false);
  const [Y, setY] = useState<string>("0");
  const [X, setX] = useState<string>("0");
  const [Lx, setLx] = useState<string>("0");
  const [operator, setOperator] = useState<string>("");

  const handleSetY = (value: string) => {
    setY(value);
    setDisplay("0.00");
  };

  const handleSetX = (value: string) => {
    setX(value);
  };

  const handleBasicCalc = () => {
    if (
      operator === "*" ||
      operator === "+" ||
      operator === "-" ||
      operator === "/"
    ) {
      const result = eval(`${Y} ${operator} ${X}`);
      setDisplay(result);
      setY(result);
      setX("");
      setOperator("");
    }
  };

  useEffect(() => {
    handleBasicCalc();
  }, [operator]);

  useEffect(() => {
    setDisplay(FV);
  }, [FV]);

  useEffect(() => {
    CHSON ? setDisplay("-" + display) : setDisplay(display.replace("-", ""));
    // eslint-disable-next-line
  }, [CHSON]);

  const verifyNumber = (number: string) => {
    return number.includes(".");
  };

  const handleCLX = () => {
    if (F) {
      setI("0");
      setN("0");
      setFV("0");
      setPV("0");
      setY("0");
      setX("0");
      setLx("0");
      setDisplay("0.00");
    }
    setF(false);
  };

  const handleCHS = () => {
    setCHSON(!CHSON);
  };

  const handleSetDisplayValue = (value: string) => {
    let newDisplay = display === "0.00" ? value : display + value;

    // eslint-disable-next-line
    newDisplay = newDisplay.replace(/\,/g, "");

    let formattedDisplay = "";
    let count = 0;

    for (let i = newDisplay.length - 1; i >= 0; i--) {
      formattedDisplay = newDisplay.charAt(i) + formattedDisplay;
      count++;
      if (count === 3 && i !== 0) {
        formattedDisplay = "," + formattedDisplay;
        count = 0;
      }
    }

    setDisplay(formattedDisplay);
    handleSetX(display);
  };

  const handleSetPV = (value: string) => {
    setPV(value.replace(",", ""));
    setDisplay("0.00");
  };

  const handleSetI = (value: string) => {
    const result = value.replace(",", "");
    const result2 = Number(result) / 100;
    setI(String(result2));
    setDisplay("0.00");
  };

  const handleSetN = (value: string) => {
    setN(value.replace(",", ""));
    setDisplay("0.00");
  };

  const handleSetFV = () => {
    const result = eval(`${PV} * (1 + ${i}) ** ${n}`);

    verifyNumber(String(result))
      ? setFV(String(result.toFixed(2)).replace("-", ""))
      : setFV(String(result).replace("-", ""));
  };

  return (
    <div className="financial-calculator-screen">
      <div className="financial-calculator">
        <div className="financial-calculator-header">
          <div className="financial-calculator-display">{display}</div>
          <img src={image} alt="hp" />
        </div>

        <div className="financial-calculator-keyboard">
          <div className="financial-calculator-keyboard-line">
            <Button
              characterTop="AMORT"
              characterCenter="n"
              characterBottom="12 x"
              onClick={() => handleSetN(display)}
            />
            <Button
              characterTop="INT"
              characterCenter="i"
              characterBottom="12 ÷"
              onClick={() => handleSetI(display)}
            />
            <Button
              characterTop="NPV"
              characterCenter="PV"
              characterBottom="CFo"
              onClick={() => handleSetPV(display)}
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
              onClick={() => handleSetFV()}
            />
            <Button
              characterTop="⠀⠀⠀⠀⠀⠀⠀⠀⠀"
              characterCenter="CHS"
              characterBottom="DATE"
              onClick={() => handleCHS()}
            />
            <Button
              characterTop="⠀⠀⠀⠀⠀⠀⠀⠀⠀"
              characterCenter="7"
              characterBottom="BEG"
              onClick={() => handleSetDisplayValue("7")}
            />
            <Button
              characterTop="⠀⠀⠀⠀⠀⠀⠀⠀⠀"
              characterCenter="8"
              characterBottom="END"
              onClick={() => handleSetDisplayValue("8")}
            />
            <Button
              characterTop="⠀⠀⠀⠀⠀⠀⠀⠀⠀"
              characterCenter="9"
              characterBottom="MEM"
              onClick={() => handleSetDisplayValue("9")}
            />
            <Button
              characterTop="⠀⠀⠀⠀⠀⠀⠀⠀⠀"
              characterCenter="÷"
              characterBottom="⠀⠀⠀⠀⠀⠀⠀⠀⠀"
              onClick={() => setOperator("/")}
            />
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
            <Button
              characterTop="SL"
              characterCenter="%T"
              characterBottom="LN"
            />
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
              onClick={() => handleSetDisplayValue("4")}
            />
            <Button
              characterTop="⠀⠀⠀⠀⠀⠀⠀⠀⠀"
              characterCenter="5"
              characterBottom="M.DY"
              onClick={() => handleSetDisplayValue("5")}
            />
            <Button
              characterTop="⠀⠀⠀⠀⠀⠀⠀⠀⠀"
              characterCenter="6"
              characterBottom="x̅w"
              onClick={() => handleSetDisplayValue("6")}
            />
            <Button
              characterTop="⠀⠀⠀⠀⠀⠀⠀⠀⠀"
              characterCenter="x"
              characterBottom="⠀⠀⠀⠀⠀⠀⠀⠀⠀"
              onClick={() => setOperator("*")}
            />
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
                  onClick={handleCLX}
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
                  backgroundColor={F ? "orange" : "yellow"}
                  onClick={() => setF(!F)}
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
            <Enter
              characterTop="PREFIX"
              characterBottom="LST X"
              onClick={() => handleSetY(display)}
            />
            <div className="financial-calculator-keyboard-third">
              <Button
                characterTop="⠀⠀⠀⠀⠀⠀⠀⠀⠀"
                characterCenter="1"
                characterBottom="x . r"
                onClick={() => handleSetDisplayValue("1")}
              />
              <Button
                characterTop="⠀⠀⠀⠀⠀⠀⠀⠀⠀"
                characterCenter="2"
                characterBottom="y . r"
                onClick={() => handleSetDisplayValue("2")}
              />
              <Button
                characterTop="⠀⠀⠀⠀⠀⠀⠀⠀⠀"
                characterCenter="3"
                characterBottom="n !"
                onClick={() => handleSetDisplayValue("3")}
              />
              <Button
                characterTop="⠀⠀⠀⠀⠀⠀⠀⠀⠀"
                characterCenter="-"
                characterBottom="⠀⠀⠀⠀⠀⠀⠀⠀⠀"
                onClick={() => setOperator("-")}
              />
              <Button
                characterTop="⠀⠀⠀⠀⠀⠀⠀⠀⠀"
                characterCenter="0"
                characterBottom="x"
                onClick={() => handleSetDisplayValue("0")}
              />
              <Button
                characterTop="⠀⠀⠀⠀⠀⠀⠀⠀⠀"
                characterCenter="."
                characterBottom="s"
                onClick={() => handleSetDisplayValue(".")}
              />
              <Button
                characterTop="⠀⠀⠀⠀⠀⠀⠀⠀⠀"
                characterCenter="Σ +"
                characterBottom="Σ -"
              />
              <Button
                characterTop="⠀⠀⠀⠀⠀⠀⠀⠀⠀"
                characterCenter="+"
                characterBottom="⠀⠀⠀⠀⠀⠀⠀⠀⠀"
                onClick={() => setOperator("+")}
              />
            </div>
          </div>
          <div className="financial-calculator-keyboard-fourth-line">
            <label>HEWLETT.PACKARD</label>
          </div>
        </div>
      </div>
      <div className="financial-calculator-registers">
        <label className="financial-calculator-registers-title">
          <b>Registros</b>
        </label>
        <label className="financial-calculator-registers-variables">
          n:
          <span>{n}</span>
        </label>
        <label className="financial-calculator-registers-variables">
          i:
          <span>{i}</span>
        </label>
        <label className="financial-calculator-registers-variables">
          PV:
          <span>{PV}</span>
        </label>
        <label className="financial-calculator-registers-variables">
          FV:
          <span>{FV}</span>
        </label>
        <label className="financial-calculator-registers-variables">
          X:
          <span>{X}</span>
        </label>
        <label className="financial-calculator-registers-variables">
          Y:
          <span>{Y}</span>
        </label>
      </div>
    </div>
  );
};
