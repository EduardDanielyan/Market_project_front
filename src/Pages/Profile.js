import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom";

function Profile() {
    const { login } = useSelector(state => state.logState)
    console.log(login);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        dispatch({ type: "profile", navigate })
    }, [])
    return (
        <>
            <div className="profile">
                <h1
                    className="profileH1">Profile</h1>

                <h3>{login.name} {login.surname} age {login.age}</h3>
                <div className="linkbutton">
                    <Link to='/addProduct'
                        className="btn btn-warning btn-sm"
                    >Add Product</Link>

                    <Link to='/myProduct'
                        className="btn btn-warning btn-sm">My Product</Link>
                    <div className="logout">
                            <button 
                            className="btn btn-danger btn-sm"
                            onClick={() => {
                                dispatch({type:'out' , navigate})
                            }}>
                                Log Out
                            </button>
                    </div>
                </div>
                
            </div>
        </>
    )
}


export default Profile