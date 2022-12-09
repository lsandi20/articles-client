import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white px-5 shadow-sm">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><Image src="/logo.png" alt="Sahaware Logo" width={248.87} height={24} /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" href="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/article">Article</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/create">Create</Link>
                            </li>
                        </ul>
                        <a className="nav-link text-primary" data-bs-toggle="modal" href="#authModal" role="button">Login</a>
                    </div>
                </div>
            </nav>

            <div className="modal fade" id="authModal" aria-hidden="true" aria-labelledby="authModalLabel" tabIndex="-1">
                <div className="modal-dialog modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="container p-4">
                                <h3 className="modal-title fw-bold h-3" id="authModalLabel">Login</h3>
                                <div className="my-3">Don't have an account? <a className="text-decoration-none text-danger" data-bs-target="#authModal2" data-bs-toggle="modal" role="button">Create Account</a></div>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="loginInputEmail" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="loginInputEmail" aria-describedby="emailHelp" placeholder="Entry your email"></input>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="loginInputPassword1" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="loginInputPassword1" placeholder="Entry your password"></input>
                                    </div>
                                    <button type="submit" className="btn btn-danger mt-3">Log in</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="authModal2" aria-hidden="true" aria-labelledby="authModalLabel2" tabIndex="-1">
                <div className="modal-dialog modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="container p-4">
                                <h3 className="modal-title fw-bold h-3" id="authModalLabel">Create Account</h3>
                                <div className="my-3">Have an account? <a className="text-decoration-none text-danger" data-bs-target="#authModal" data-bs-toggle="modal" role="button">Login</a></div>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="registerInputName" className="form-label">Fullname</label>
                                        <input type="text" className="form-control" id="registerInputName" placeholder="Entry your fullname"></input>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="registerInputEmail" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="registerInputEmail" aria-describedby="emailHelp" placeholder="Entry your email"></input>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="registerInputPassword1" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="registerInputPassword1" placeholder="Entry your password"></input>
                                    </div>
                                    <button type="submit" className="btn btn-danger mt-3">Create account</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
