"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ChangeTitleButton from "./ChangeTitleButton";
import Stack from "./Stack";

interface ProfileProps {
  mainColor: string;
  title1: string;
  title2: string;
  src1: string;
  src2: string;
  subtitle: string;
  description: React.ReactNode;
  backgroundColor: string;
  cardColor: string;
  textColor: string;
  hoverColor: string;
  skills: string[];
}

// Je crée un composant fonctionnel (utilisé pour composants créés avec fonction fléchée, peut prendre en charge des props).
const ProfileCard: React.FunctionComponent<ProfileProps> = ({
  mainColor,
  title1,
  title2,
  src1,
  src2,
  subtitle,
  description,
  backgroundColor,
  cardColor,
  textColor,
  hoverColor,
  skills,
}) => {
  //States
  const [title, setTitle] = useState(title1);
  const [src, setSrc] = useState(src1);
  const [shadowColor, setShadowColor] = useState("");

  //Fonction associée au bouton
  const changeTitle = () => {
    if (title === title1) {
      setTitle(title2);
      setSrc(src2);
    } else {
      setTitle(title1);
      setSrc(src1);
    }
  };

  useEffect(() => {
    const getShadowColor = (cssVariable: string) => {
      const root = document.documentElement;
      const styles = getComputedStyle(root);
      // Récupérer uniquement le nom de la variable pour le chercher
      let cssNew: string | undefined;
      if (cssVariable) {
        const match = cssVariable.match(/var\((--[\w-]+)\)/);
        if (match) {
          cssNew = match[1];
        }
      }

      if (cssNew !== undefined) {
        return styles.getPropertyValue(cssNew).trim();
      }
    };

    let newTextColor: string;
    if (textColor === undefined) {
      newTextColor = "black";
    } else {
      newTextColor = textColor;
    }

    const color = getShadowColor(newTextColor);
    console.log("couleur", color);

    if (color !== undefined) {
      setShadowColor(color);
    }
  }, []);

  return (
    <div
      style={{ backgroundColor: backgroundColor }}
      className="w-full mx-auto h-screen flex justify-center items-center"
    >
      <div
        style={{ backgroundColor: cardColor }}
        className="w-4/5 min-h-[840px] rounded-lg flex flex-col items-center justify-center p-[40px]"
      >
        <Image
          src={src}
          alt="profile picture"
          width={300}
          height={300}
          style={{ boxShadow: `0px 0px 6px 4px ${shadowColor}` }}
          className="rounded-full"
        />
        <h2
          style={{ color: textColor }}
          className="text-4xl font-bold mt-[20px] mb-[12px]"
        >
          {title}
        </h2>
        <ChangeTitleButton
          textColor={textColor}
          cardColor={cardColor}
          hoverColor={hoverColor}
          text="Changer de titre?"
          onClick={changeTitle}
        />
        <p style={{ color: textColor }} className="text-xl font-bold mb-[20px]">
          {subtitle}
        </p>
        <div className="text-[15px] font-medium text-justify leading-[26px] w-5/7">
          {description}
        </div>
        <Stack skills={skills} mainColor={mainColor} textColor={textColor} />
      </div>
    </div>
  );
};

export default ProfileCard;
