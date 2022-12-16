import { ThemeProvider } from '@material-tailwind/react'
import '../styles/globals.css'

const customTheme = {
  accordion: {
    styles: {
      base: {
        body: {
          height: "!h-min",
        },
      },
    },
  },
};

function MyApp({ Component, pageProps }) {


  return (
    <ThemeProvider value={customTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
