import { useState } from "react";

interface ButtonProps {
  textColor: string;
  cardColor: string;
  hoverColor: string;
  text: string;
  onClick: () => void; // La prop attend une fonction qui ne prend pas d'argument, et qui ne renvoie rien
}

const ChangeTitleButton: React.FunctionComponent<ButtonProps> = ({
  textColor,
  cardColor,
  hoverColor,
  text,
  onClick,
}) => {
  //Usestates
  const [buttonColor, setButtonColor] = useState(textColor);

  //Fonctions liées au bouton
  const handleMouseEnter = () => {
    setButtonColor(hoverColor);
  };
  const handleMouseLeave = () => {
    setButtonColor(textColor);
  };

  return (
    <button
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ backgroundColor: buttonColor, color: cardColor }}
      className="px-6 py-2 rounded-lg text-lg font-semibold transition-all mb-[12px] cursor-grab active:cursor-grabbing"
    >
      {text}
    </button>
  );
};

export default ChangeTitleButton;
