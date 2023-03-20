import '@/styles/globals.css'
import type { AppProps } from 'next/app'
// Feature 5
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
