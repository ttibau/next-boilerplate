import '../styles/globals.css';
import type { AppProps } from 'next/app';
import DashboardLayout from '../components/DashboardLayout';
import { ThemeProvider } from 'styled-components';
import { theme } from '../constants/theme';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { DialogContextProivder } from '../components/context/DialogContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <ThemeProvider theme={theme}>
      <DashboardLayout>
        <QueryClientProvider client={queryClient}>
          <DialogContextProivder>
            <Component {...pageProps} />
          </DialogContextProivder>
        </QueryClientProvider>
      </DashboardLayout>
    </ThemeProvider>
  );
}

export default MyApp;
