import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";

function UserChek() {
    let { auth, login } = useSelector(state => state.logState)
    console.log(login);
    const dispatch = useDispatch()
    console.log(auth, 111);
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(() => {
        dispatch({
            type: 'checkUser',
            path: location.pathname,
            navigate: navigate
        })
    }, [])
    return login ? <Outlet /> : "" ;
}

export default UserChek