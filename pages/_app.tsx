
import { AppProps } from 'next/app'
import '../styles/index.css'
import '../styles/terminal.css'
import '../styles/timeline.css'
import {ThemeProvider as NextThemesProvider} from "next-themes";



export default function MyApp({ Component, pageProps }: AppProps) {
  return (    
    <NextThemesProvider attribute="class" defaultTheme="dark">         
        <Component {...pageProps} />      
    </NextThemesProvider>    
    );
}