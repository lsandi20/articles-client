import Layout from '../components/layout'
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
          <div className="row row-cols-1 row-cols-md-3 g-4 px-5">
            <div className="col">
              <div className="card h-100 border-0">
                <Image className="img-fluid card-img-top" src="/article.jpg" width={302} height={205} alt="articleimage" />
                <div className="card-body">
                  <h5 className="card-title fw-bold">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 border-0">
                <Image className="img-fluid card-img-top" src="/article.jpg" width={302} height={205} alt="articleimage" />
                <div className="card-body">
                  <h5 className="card-title fw-bold">Card title</h5>
                  <p className="card-text">This is a short card.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 border-0">
                <Image className="img-fluid card-img-top" src="/article.jpg" width={302} height={205} alt="articleimage" />
                <div className="card-body">
                  <h5 className="card-title fw-bold">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 border-0">
                <Image className="img-fluid card-img-top" src="/article.jpg" width={302} height={205} alt="articleimage" />
                <div className="card-body">
                  <h5 className="card-title fw-bold">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
          </div>
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
