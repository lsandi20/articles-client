import Layout from '../components/layout'
import Articles from '../components/articles'

export default function Article() {
   
  return (
    <div className="container py-5 mb-5">
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

