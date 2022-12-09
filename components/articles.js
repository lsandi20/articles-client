import Layout from '../components/layout'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Articles() {
    let [articles, setArticles] = useState(null)
    let [page, setPage] = useState(1)
    const [isLoading, setLoading] = useState(false)
    let articlesData = null

    useEffect(()=>{
        setLoading(true)
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/article`)
        .then((res) => res.json())
        .then((data)=> {
            if (data.data) {
              let visibleArticles = data.data.filter((article)=>{
                return article.is_visible
              })
                articles = visibleArticles.map((article) => {
                    return(
        <div className="col" key={article.id}>
             <Link className="text-decoration-none text-black" href={`/article/${article.id}`}>
                      <div className="card h-100 border-0">
                        <Image className="img-fluid card-img-top" src={article.image ? `${process.env.NEXT_PUBLIC_API_URL}${article.image}` : "/noimage.png"} width={302} height={205} alt="articleimage" />
                        <div className="card-body">
                          <h5 className="card-title fw-bold">{article.title}</h5>
                          <p className="card-text">{article.short_description}</p>
                        </div>
                      </div>
                      </Link>
                    </div>)
                })
            }
            setArticles(articles)
            setLoading(false)
            setPage(data.page)
        }).catch((error)=>{
          console.error(error)
      })
      window.onscroll = (()=>{
        if (document.body.scrollHeight - (window.innerHeight + window.scrollY )< 10) {
          setPage(page+1)
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/article?page=${page+1}`)
          .then((res) => res.json())
          .then((data)=> {
              if (data.data) {
                let visibleArticles = data.data.filter((article)=>{
                  return article.is_visible
                })
                  articlesData = visibleArticles.map((article) => {
                      return(
          <div className="col" key={article.id}>
               <Link className="text-decoration-none text-black" href={`/article/${article.id}`}>
                        <div className="card h-100 border-0">
                          <Image className="img-fluid card-img-top" src={article.image ? `${process.env.NEXT_PUBLIC_API_URL}${article.image}` : "/noimage.png"} width={302} height={205} alt="articleimage" />
                          <div className="card-body">
                            <h5 className="card-title fw-bold">{article.title}</h5>
                            <p className="card-text">{article.short_description}</p>
                          </div>
                        </div>
                        </Link>
                      </div>)
                  })
              }
              setArticles(articles.concat(articlesData))
              setLoading(false)
          }).catch((error)=>{
            console.error(error)
        })
        }
      })
    }, [])
    
      
    
    if(isLoading) return <p>Loading Articles..</p>

   
    
  return (
          <div className="row row-cols-1 row-cols-md-3 g-4 px-5">
           {articles}
          </div>
  )
}

Articles.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
