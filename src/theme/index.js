import { useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import palette from "./palette"
import typography from './typography';
import breakpoints from './breakpoints'

export default function CustomTheme ({ children }) {

  const themeOptions = useMemo(
    () => ({
      palette,
      typography,
      breakpoints
    }),[]
  );

  const theme = createTheme(themeOptions);

  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
          {children}
      </ThemeProvider>
  );
}
