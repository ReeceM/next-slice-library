import { ThemeProvider, BaseStyles } from 'theme-ui';
import { default as theme } from './styles/theme';

export const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <BaseStyles>
        {children}
      </BaseStyles>
    </ThemeProvider>
  )
}

export function linkResolver(doc) {
  return `/${doc.uid}`
}
