type ThemeInterface = {
  flexboxgrid: {
    gridSize: number;
    gutterWidth: number;
    outerMargin: number;
    mediaQuery: string;
    container: {
      xs?: number;
      sm?: number;
      md?: number;
      lg?: number;
    };
    breakpoints: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
    };
  };
  colors?: {
    gray: string,
    lightGray: string,
    lighterGray: string,
    darkGray: string,
    darkerGray: string,
  };
};

type Theme = {
  theme?: ThemeInterface;
}
