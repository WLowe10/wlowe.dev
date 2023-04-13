import { createUseStyles } from 'react-jss';
import { Theme } from '@global/constants/theme';
import { Context as ResponsiveContext } from "react-responsive";
import type { AppProps } from 'next/app'

import "reset-css";
import 'react-circular-progressbar/dist/styles.css';

import "@global/assets/fonts/saiyan-sans/font.css";
import "@fontsource/nunito-sans/400.css";
import "@fontsource/nunito-sans/600.css";
import "@fontsource/nunito-sans/700.css";

import "@fontsource/inter/400.css";
import "@fontsource/ubuntu/400.css";

import "@fontsource/satisfy/400.css";
import { useMounted } from '@global/hooks';

const useGlobalStyles = createUseStyles({
  "@global": {
    "body": {
      overflow: "overlay",
      fontSize: "100%",
      backgroundColor: Theme.background
    },
    "button": {
      background: "none",
      color: "inherit",
      border: "none",
      padding: 0,
      font: "inherit",
      cursor: "pointer",
      outline: "inherit"
    },
  }
}, { link: true })

const App = ({ Component, pageProps }: AppProps) => {
    const mounted = useMounted();
    useGlobalStyles();

    console.log(mounted)

    return (
      <ResponsiveContext.Provider value={mounted ? {} : { width: 1600 }}>
        <Component {...pageProps} />
      </ResponsiveContext.Provider>
    )
}

export default App;
