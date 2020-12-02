import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      accent: string;
      dark: string;
      light: string;
      primary: string;
      secondary: string;
      grey: string;
    };
  }
}
