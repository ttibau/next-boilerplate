import '../styles/globals.css';
import type { AppProps } from 'next/app';
import DashboardLayout from '../components/DashboardLayout';
import { ThemeProvider } from 'styled-components';
import { theme } from '../constants/theme';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <DashboardLayout>
        <Component {...pageProps} />
      </DashboardLayout>
    </ThemeProvider>
  );
}

export default MyApp;
