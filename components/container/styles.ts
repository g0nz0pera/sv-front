import { IContainer } from "@/interfaces/container";
import styled from "@emotion/styled";
import { device } from "@/interfaces/breakpoints";

export const ContainerStyled = styled.div<IContainer>`
  position: ${({ position }) => position};
  display: ${({ display }) => display};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItem }) => alignItem};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  flex-direction: ${({ flexDirection }) => flexDirection};
  padding: ${({ padding }) => padding};
  text-align: ${({ textAlign }) => textAlign};
  background: no-repeat center / contain url(${({ bg }) => bg}) transparent;
  color: ${({ color }) => color};

  @media ${device.sm} {
    ${`flex-direction`}: column;
  }
`;
