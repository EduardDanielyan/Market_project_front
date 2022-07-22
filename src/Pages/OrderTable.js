import userEvent from "@testing-library/user-event";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate, useParams } from "react-router-dom";

function OrderTable() {
    const { order } = useSelector(state => state.logState)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    console.log(order);
    useEffect(() => {
        dispatch({ type: 'table' })
    }, [])
    return (
        <>
            <div className="order">
                <h1 className="prodH1">Order Table</h1>

                <table className="cardT table table-dark">
                    <thead>
                        <tr>
                            <th>Total price</th>
                            <th>Date</th>
                            <th>More Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            order.map((ord, ordI) => {
                                return <tr key={ordI}>
                                    <td>{ord.total} USD</td>
                                    <td>{ord.date}</td>
                                    <td>
                                        <Link
                                            className="btn btn-light btn-sm"
                                            to={'/details/' + ord.user.id}>Details</Link>

                                        {/* <button
                                        className="btn btn-light btn-sm"
                                        onClick={() => {
                                            navigate('/details/' + ord.id)
                                            dispatch({type:'order_details' , id:id})
                                        }}
                                        >See More</button>     */}
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>

            </div>

        </>

    )

}


export default OrderTable