import Layout from '../components/layout'
export default function CreateArticle() {

    return (
        <div className="container py-5 mb-5" style={{ maxWidth: 954 }}>
            <div className="row g-5 mb-4">
                <div className="col-md-8">
                    <h4 className="h4 fw-bold mb-4">Create Article</h4>
                    <div>
                        <form>
                            <div className="mb-3">
                                <label for="titleInput" className="form-label">Title</label>
                                <input type="text" className="form-control" id="titleInput"></input>

                            </div>

                        </form>
                    </div>
                </div>
                <div className="col-md-4">
                    <h4 className="h4 fw-bold mb-4">Publication Detail</h4>
                    <div>
                        <form>

                            <label className="form-label">Short Description</label>
                            <div className="form-floating">
                                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: 132 }}></textarea>
                            </div>
                            <div className="my-3">
                                <label for="formFile" className="form-label">Thumbnail</label>
                                <input className="form-control" type="file" id="formFile"></input>
                            </div>
                            <label className="form-label">Categories</label>
                            <select className="form-select" >
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <div className="d-flex justify-content-between mt-3">
                                <span>Published</span>
                                <div className="form-check form-switch"><input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"></input></div>
                            </div>
                            <button className="btn btn-danger mt-3">Publish</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

CreateArticle.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}
