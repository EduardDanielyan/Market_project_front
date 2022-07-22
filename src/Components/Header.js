import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom"

function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()
    useEffect(() => {
        dispatch({
            type: 'checkUser',
            path: location.pathname,
            navigate: navigate
        })
    },[])
    
    return (
        <div className="home">
            <h4 className="navH">Blue</h4 > <h4 className="navH1">Moon</h4 >
            <img src="images/2.png"
                className="logo" />
            <img
                className="message"
                src="images/3.jpg" />
            <button
                className="chatButton  "
                onClick={() => {
                    navigate('/chat')
                }}>Chat</button>
            <img
                className="userIcon"
                src="images/4.png" />
            <button
                className="profButton  "
                onClick={() => {
                    navigate('/profile')
                }}
            ></button>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/registration">Registretion</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/signin">Sign In</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/allProducts">All Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/showCard">Card</Link>
                        </li>
                    </ul>

                </div>
            </nav>
            <Outlet />




        </div>
    )
}


export default Header