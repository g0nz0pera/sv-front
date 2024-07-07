export interface ICard {
  id: number;
  title: ICardTitle;
  description?: ICardDescription;
  styles?: CardStyle;
}

interface ICardTitle {
  text: string;
  styles?: CardStyle;
}

interface ICardDescription {
  text: string;
  styles?: CardStyle;
}

export interface CardStyle {
  position?: string;
  display?: string;
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
  textAlign?: string;
  background?: string;
  width?: string;
  height?: string;
  padding?: string;
  color?: string;
  fontSize?: string;
  lineHeight?: string;
  borderImage?: string;
  marginLeft?: string;
}
