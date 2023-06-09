import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: {
      default: string;
      variant: string;
      highlight: string;
    };
    secondary: {
      default: string;
      secondary: string;
      highlight: string;
    };
    onColour: {
      primary: string;
      secondary: string;
    };
    surface: {
      lvl0: string;
      lvl1: string;
      lvl2: string;
    };
    onSurface: {
      lvl0: string;
      lvl1: string;
      lvl2: string;
      lvl3: string;
    };
    status: {
      error: string;
      alert: string;
      success: string;
    };
    specific: {
      live: string;
    };
    elevation: {
      elevation1: string;
      elevation2: string;
    };
  }
}
