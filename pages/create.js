const ReactQuill = typeof window === 'object' ? require('react-quill'): () => false
import 'react-quill/dist/quill.snow.css'
import Router from 'next/router'
import { useEffect, useState, useRef, useContext } from 'react'
import { AuthContext } from '../components/auth'

export default function CreateArticle() {
    const [state] = useContext(AuthContext)
    if (!state.token) {
        Router.push('/')
        return;
    }
    const [description, setDescription] = useState('')
    const form = useRef(null)

    const submitForm = (event) => {
        event.preventDefault()
        let formData = new FormData(form.current)
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/article/create`, {method: 'POST', body: formData, headers: {
            'Authorization': `Bearer ${state.token}`
        }})
        .then((res) => res.json())
        .then((data)=> {
            Router.push('/article')
        }).catch((error)=>{
            console.error(error)
            Router.push('/article')
        })
    }

    let [categories, setCategories] = useState(null)

    useEffect(()=>{
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/article-category`)
        .then((res) => res.json())
        .then((data)=> {
            if (data.data) {
                categories = data.data.map((category) => {
                    return(
                        <option key={category.id} value={category.id}>{category.title}</option>
                )})
            }
            setCategories(categories)
        }).catch((error)=>{
            console.error(error)
        })
    }, [])
   const modules = {
        toolbar: [
            [{'header': [1,2, false]}],
            ['bold', 'italic', 'underline']
        ]
    }

    const formats = [
        'header',
        'bold', 'italic', 'underline'
    ]

    return (
        <div className="container py-5 mb-5" style={{ maxWidth: 954 }}>
            <div className="row g-5 mb-4">
                        <form ref={form} onSubmit={submitForm}>
                <div className="col-md-8">
                    <h4 className="h4 fw-bold mb-4">Create Article</h4>
                    <div>
                            <div className="mb-3">
                                <label htmlFor="titleInput" className="form-label">Title</label>
                                <input type="text" className="form-control" id="titleInput" name="title"></input>
                            </div>
                            <div>
                                <input type="hidden" value={description} name="description"></input>
                            <ReactQuill theme="snow" modules={modules} formats={formats} onChange={setDescription}/>
                            </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <h4 className="h4 fw-bold mb-4">Publication Detail</h4>
                    <div>

                            <label className="form-label">Short Description</label>
                            <div className="form-floating">
                                <textarea name="short_description" className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: 132 }}></textarea>
                            </div>
                            <div className="my-3">
                                <label htmlFor="formFile" className="form-label">Thumbnail</label>
                                <input className="form-control" type="file" name="image" id="formFile"></input>
                            </div>
                            <label className="form-label">Categories</label>
                            <select className="form-select" name="category_id" >
                               {categories}
                            </select>
                            <div className="d-flex justify-content-between mt-3">
                                <span>Published</span>
                                <div className="form-check form-switch"><input className="form-check-input" name="is_visible" type="checkbox" role="switch" id="flexSwitchCheckDefault"></input></div>
                            </div>
                            <button className="btn btn-danger mt-3">Publish</button>
                    </div>
                </div>
            </form>
            </div>
        </div>
    )
}