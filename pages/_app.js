import "bootstrap/dist/css/bootstrap.min.css"

import { useEffect } from "react"
import {AuthContextProvider} from '../components/auth'
import Layout from "../components/layout"

function ArticleApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js")
    require('../styles/style.css')
  })
    const getLayout = Component.getLayout || ((page) => page)
    return getLayout(
      <AuthContextProvider>
        <Layout>
    <Component {...pageProps} />
    </Layout>
    </AuthContextProvider>
    )

}

export default ArticleApp
