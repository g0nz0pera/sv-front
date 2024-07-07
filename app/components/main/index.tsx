"use client";
import type { FC, PropsWithChildren } from "react";
import { MainStyled } from "./styles";

export const Main: FC<PropsWithChildren> = ({ children }) => (
  <MainStyled>{children}</MainStyled>
);
