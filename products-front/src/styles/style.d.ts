import "styled-components";

export interface Colors {
  blue: string;
  background: string;
}

export interface Borders {
  default: string;
}

export interface Default {
  color: string;
  fontFamily: string;
  fontSize: string;
  fontWeight: string;
  lineHeight: string;
}

export interface Heading {
  color: string;
  fontFamily: string;
  fontSize: string;
  fontWeight: string;
  lineHeight: string;
}

export interface Brand {
  color: string;
  fontFamily: string;
  fontSize: string;
  fontWeight: string;
  lineHeight: string;
}

export interface Price {
  color: string;
  fontFamily: string;
  fontSize: string;
  fontWeight: string;
  lineHeight: string;
}

export interface Text {
  default: Default;
  heading: Heading;
  brand: Brand;
  price: Price;
}

export interface Shadows {
  default: string;
}

export interface BorderRadius {
  default: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: Colors;
    borders: Borders;
    text: Text;
    shadows: Shadows;
    borderRadius: BorderRadius;
  }
}
