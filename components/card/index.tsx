"use client";
import type { FC } from "react";
import {
  CardContentStyled,
  CardDescriptionStyled,
  CardTitleStyled,
} from "./styles";
import { ICard } from "@/interfaces/card";

export const Card: FC<ICard> = ({ title, description, styles }) => {
  const titleStyles = title.styles;
  const descriptionStyles = description?.styles;
  return (
    <CardContentStyled
      background={styles?.background}
      width={styles?.width}
      height={styles?.height}
      padding={styles?.padding}
    >
      <CardTitleStyled {...titleStyles}>{title.text}</CardTitleStyled>
      <CardDescriptionStyled {...descriptionStyles}>
        {description?.text}
      </CardDescriptionStyled>
    </CardContentStyled>
  );
};
