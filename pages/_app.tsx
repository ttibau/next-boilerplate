import '../styles/globals.css';
import type { AppProps } from 'next/app';
import DashboardLayout from '../components/DashboardLayout';
import { ThemeProvider } from 'styled-components';
import { theme } from '../constants/theme';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { DialogContextProivder } from '../components/context/DialogContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Toaster />
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
