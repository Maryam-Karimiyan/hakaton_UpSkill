// import '../styles/globals.css'

// import {Inter} from '@next/font/google'
import Layout from "../components/Layout"
function MyApp({ Component, pageProps }) {
  // const inter=Inter()
  return (
  <Layout>
    <div>
      
    <Component {...pageProps} />
    </div>
  </Layout>
  )
}

export default MyApp
