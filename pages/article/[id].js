import Layout from '../../components/layout'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.bubble.css'

export default function ArticleDetail() {

    const router = useRouter()
    const { id } = router.query

    let [article, setArticles] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/article/${id}`)
        .then((res) => res.json())
        .then((data)=> {
            if (data.data) {
                const articleData = data.data
                article = 
                <div className="container py-5 mb-5" style={{ maxWidth: 628 }}>
                <div className="row mb-4">
                    <div className="col">
                        <h2 className="h2 fw-bold">{articleData.title}</h2>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col">
                        <h5 className="h5">{articleData.short_description}</h5>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col">
                        <Image className="img-fluid" src={articleData.image ? `${process.env.NEXT_PUBLIC_API_URL}${articleData.image}` : "/noimage.png"} width={1280} height={706} alt="homeimage" />
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col">
                        <ReactQuill theme="bubble" value={articleData.description} readOnly="true"/>
                    </div>
                </div>
            </div>
            }
            setArticles(article)
            setLoading(false)
        }).catch((error)=>{
            console.error(error)
        })
    }, [])

    if(isLoading) return <p>Loading Article...</p>
    
    return article
       
    
}
