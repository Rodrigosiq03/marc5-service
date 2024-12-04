import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string,
      primary: string,
      green_500: string,
      green_300: string,
      red_500: string,
      red_300: string,

      input: {
        background: string,
        placeholder: string,
        border: string,
        background_hover: string,
        border_hover: string,
      },

      badges: {
        success: {
          background: string;
          color: string;
        };
        neutral: {
          background: string;
          color: string;
        };
        danger: {
          background: string;
          color: string;
        }
      },

      icons: {
        color: string,
        background: string,
        background_hover: string,
        border: string,
        theme_switcher_hover: string,
      },
    },
  
    fontsSizes: {
      desktop: {
        h1: string,
        h2: string,
        h3: string,
        h4: string,
        h5: string,
        h6: string,
        p: string,
        p_small: string,
        caption: string,
      },
      mobile: {
        h1: string,
        h2: string,
        h3: string,
        h4: string,
        h5: string,
        h6: string,
        p: string,
        p_small: string,
        caption: string,
      },
      colors: {
        black: string,
        white: string,
      }
    }
  }
}