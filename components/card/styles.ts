import styled from "@emotion/styled";
import { CardStyle } from "@/interfaces/card";

export const CardContentStyled = styled.div<CardStyle>`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding};
  background: no-repeat center / contain url(${({ background }) => background})
    transparent;
`;

export const CardTitleStyled = styled.h2<CardStyle>`
  font-style: normal;
  font-weight: 700;
  font-size: ${({ fontSize }) => fontSize};
  line-height: ${({ lineHeight }) => lineHeight};
  text-align: center;
  font-family: var(${`--font-syne`});
  color: ${({ color }) => color};
  padding: ${({ padding }) => padding};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

export const CardDescriptionStyled = styled.p<CardStyle>`
  font-style: normal;
  font-weight: 400;
  font-size: ${({ fontSize }) => fontSize};
  line-height: ${({ lineHeight }) => lineHeight};
  text-align: center;
  font-family: var(${`--font-sen`});
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding};
  color: ${({ color }) => color};
`;
