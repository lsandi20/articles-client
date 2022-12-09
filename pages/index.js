import Layout from '../components/layout'
import Articles from '../components/articles'
import Image from 'next/image'
export default function Home() {

  return (
    <div className="container py-5 mb-5">
      <div className="row py-5">
        <div className="col">
          <Image className="img-fluid" src="/mountain.jpg" width={1280} height={706} alt="homeimage" />
        </div>
      </div>
      <div className="row py-3">
        <div className="col">
          <div className="row text-center my-3">
            <h1 className="display-5 fw-bold">Article</h1>
          </div>
          <Articles />
        </div>
      </div>
    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
