import { ThemeProvider, BaseStyles } from 'theme-ui';
import { default as theme } from './theme';

export const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <BaseStyles>
        {children}
      </BaseStyles>
    </ThemeProvider>
  )
}
