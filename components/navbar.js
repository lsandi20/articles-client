import Image from "next/image"
import Link from "next/link"
import { AuthContext } from "./auth"
import { useContext, useEffect, useState } from "react"

export default function Navbar() {
    const [state, dispatch] = useContext(AuthContext)
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const [registerEmail, setRegisterEmail] = useState('')
    const [registerPassword, setRegisterPassword] = useState('')
    const [registerName, setRegisterName] = useState('')

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLoginEmailChange = (e) => {
        setLoginEmail(e.target.value)
    }

    const handleLoginPasswordChange = (e) => {
        setLoginPassword(e.target.value)
    }

    const handleRegisterEmailChange = (e) => {
        setRegisterEmail(e.target.value)
    }

    const handleRegisterPasswordChange = (e) => {
        setRegisterPassword(e.target.value)
    }

    const handleRegisterNameChange = (e) => {
        setRegisterName(e.target.value)
    }

    const handleLogin = (e) => {
        let body = JSON.stringify({email:loginEmail, password:loginPassword})
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {method: 'POST', body, headers: {'Content-Type': 'application/json'}})
        .then((res) => res.json())
        .then((data)=> {
            setLoginEmail('')
            setLoginPassword('')
            dispatch({
                type: 'LOGGED_IN',
                payload: {token: data.token}
            })
        }).catch((error)=>{
            setLoginEmail('')
            setLoginPassword('')
            console.error(error)
        })
        
    }

    const handleRegister = (e) => {
        let body = JSON.stringify({email:registerEmail, password:registerPassword, name: registerName})
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`, {method: 'POST', body, headers: {'Content-Type': 'application/json'}})
        .then((res) => res.json())
        .then((data)=> {
            setRegisterEmail('')
            setRegisterPassword('')
            setRegisterName('')
            dispatch({
                type: 'LOGGED_IN',
                payload: {token: data.token}
            })
        }).catch((error)=>{
            setRegisterEmail('')
            setRegisterPassword('')
            setRegisterName('')
            console.error(error)
        })
        
    }

    const handleLogout = (e) => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/logout`, {method: 'GET'})
        .then((res) => res.json())
        .then((data)=> {
            dispatch({
                type: 'LOGGED_OUT'
            })
        }).catch((error)=>{
            console.error(error)
        })
        
    }

    useEffect(()=>{ 
        if (!state.token) {
            setIsLoggedIn(false)
        } else {
            setIsLoggedIn(true)
        }
    }, [state])

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
                        <a className={isLoggedIn ? 'nav-link text-primary d-none' : 'nav-link text-primary'} data-bs-toggle="modal" href="#authModal" role="button">Login</a>
                        <a className={isLoggedIn ? 'nav-link text-primary' : 'nav-link text-primary d-none'} role="button" onClick={handleLogout}>Logout</a>
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
                                        <input type="email" className="form-control" id="loginInputEmail" value={loginEmail} onChange={handleLoginEmailChange} aria-describedby="emailHelp" placeholder="Entry your email"></input>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="loginInputPassword1" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="loginInputPassword1" onChange={handleLoginPasswordChange} value={loginPassword} placeholder="Entry your password"></input>
                                    </div>
                                </form>
                                    <button className="btn btn-danger mt-3" onClick={handleLogin} data-bs-dismiss="modal">Log in</button>
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
                                        <input type="text" value={registerName} onChange={handleRegisterNameChange} className="form-control" id="registerInputName" placeholder="Entry your fullname"></input>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="registerInputEmail" className="form-label">Email</label>
                                        <input type="email" value={registerEmail} onChange={handleRegisterEmailChange} className="form-control" id="registerInputEmail" aria-describedby="emailHelp" placeholder="Entry your email"></input>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="registerInputPassword1" className="form-label">Password</label>
                                        <input type="password" value={registerPassword} onChange={handleRegisterPasswordChange} className="form-control" id="registerInputPassword1" placeholder="Entry your password"></input>
                                    </div>
                                   <button className="btn btn-danger mt-3" onClick={handleRegister} data-bs-dismiss="modal">Create account</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
