"use client";
import type { IContainer } from "@/interfaces/container";
import type { FC, PropsWithChildren } from "react";
import { ContainerStyled } from "./styles";

export const Container: FC<PropsWithChildren & IContainer> = ({
  children,
  position = "relative",
  display = "flex",
  height = "auto",
  width = "auto",
  justifyContent = "center",
  alignItem = "center",
  flexWrap = "wrap",
  flexDirection,
  padding = "0",
  textAlign,
  color,
  bg,
}) => (
  <ContainerStyled
    display={display}
    height={height}
    width={width}
    alignItem={alignItem}
    flexWrap={flexWrap}
    justifyContent={justifyContent}
  >
    {children}
  </ContainerStyled>
);
