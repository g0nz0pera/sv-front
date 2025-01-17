"use client";
import type { FC } from "react";
import {
  CardContentStyled,
  CardDescriptionStyled,
  CardTitleStyled,
} from "./styles";
import { ICard } from "@/interfaces/card";

export const Card: FC<ICard> = ({ id, title, description, styles }) => {
  const titleStyles = title.styles;
  const descriptionStyles = description?.styles;
  return (
    <CardContentStyled
      data-testid={`card-${id}`}
      background={styles?.background}
      width={styles?.width}
      height={styles?.height}
    >
      <CardTitleStyled {...titleStyles}>{title.text}</CardTitleStyled>
      <CardDescriptionStyled {...descriptionStyles}>
        {description?.text}
      </CardDescriptionStyled>
    </CardContentStyled>
  );
};
