import { useState } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { light, dark, ThemeName } from '@/utils/theme';
import { ThemeSetterContext } from '@/utils/context';
import { SWRConfig } from 'swr';
import { fetcher } from '@/utils/fetcher';

export default function App({ Component, pageProps }) {

  const [theme, setTheme] = useState<DefaultTheme>(dark);

  const toggleTheme = () => {
    setTheme(theme === light ? dark : light);
  };

  return (
    <ThemeSetterContext.Provider value={{ setTheme: toggleTheme }}>
      <ThemeProvider theme={theme}>
        <SWRConfig value={{ fetcher }}>
          <div id="portal-root" />
          <Component {...pageProps} />
        </SWRConfig>
      </ThemeProvider>
    </ThemeSetterContext.Provider>
  );
}
