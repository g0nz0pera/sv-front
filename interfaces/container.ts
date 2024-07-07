import { Property } from "csstype";
import JustifyContent = Property.JustifyContent;
import AlignItems = Property.AlignItems;
import FlexWrap = Property.FlexWrap;
import FlexDirection = Property.FlexDirection;
import Display = Property.Display;
import Width = Property.Width;
import Height = Property.Height;
import Position = Property.Position;
import Padding = Property.Padding;

export interface IContainer {
  position?: Position;
  display?: Display;
  height?: Height;
  width?: Width;
  justifyContent?: JustifyContent;
  alignItem?: AlignItems;
  flexWrap?: FlexWrap;
  flexDirection?: FlexDirection;
  padding?: Padding;
  textAlign?: Property.TextAlign;
  color?: string;
  bg?: string;
}
