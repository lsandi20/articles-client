import "bootstrap/dist/css/bootstrap.min.css"

import { useEffect } from "react"


function ArticleApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js")
    require('../styles/style.css')
  })
    const getLayout = Component.getLayout || ((page) => page)
    return getLayout(<Component {...pageProps} />)

}

export default ArticleApp
