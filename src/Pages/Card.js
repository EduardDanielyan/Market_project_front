import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { ADD_CARD, ADD_ORDER } from "../store/Login/types"
import StripeCheckout from "react-stripe-checkout";

function Card() {
    const { card } = useSelector(state => state.logState)
    let { id } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    console.log(card);
    useEffect(() => {
        dispatch({ type: 'showcard', id: id })
    }, [])
    const total = card.reduce((price, item) => price + item.count * item.product.price, 0)

    const makePayment = (token) => {
        const body = {
            token,
            card,
        };
        const headers = {
            "Content-Type": "application/json",
        };
        return fetch(`http://localhost:4000/payment`, {
            method: "POST",
            credentials: "include",
            headers,
            body: JSON.stringify(body),
        })
            .then((response) => {
                console.log("RESPONSE", response);
                const { status } = response;
                console.log("STATUS", status);
                return response.json();
            })
            .then((data) => {
                dispatch(ADD_CARD(data.allcarts));
            })
            .catch((error) => console.log(error));
    };
    return (
        <>
            

            <div
                className="card">
                <h1
                    className="prodH1">My Card</h1>
                <div
                    className="linkbutton">
                    <button
                        className="b1 btn btn-warning btn-sm"
                        onClick={() => {
                            dispatch({ type: 'orderProd' })
                        }}>Check Out</button>

                    <button
                        className="b1 btn btn-warning btn-sm"
                        onClick={() => {
                            navigate('/orderProducts')
                        }}>
                        Order Table</button>
                </div>

                <div 
            className="pay">
                {card.length !== 0 && (
                    <StripeCheckout
                        stripeKey="pk_test_51KjlUTEwie5RP3GFCoy7d0WcuxuirvcV5WYJOPLESniX7ynlSQk9SaH3qak0ulgLzRDE7NKuKHwQT1j4UB29JHFJ00RjERj3yN"
                        token={makePayment}
                        name="Buy products"
                        amount={total * 100}
                    />
                )}
            </div>

                <table className="cardT table table-dark">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Count</th>
                            <th>Price</th>
                            <th>Photo</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            card.map((ca, caId) => {
                                return <tr key={caId}>
                                    <td>{ca.product.name}</td>
                                    <td>{ca.count}</td>
                                    <td>{ca.product.price * ca.count} USD</td>
                                    <td>{ca.product.photos && <img src={'http://localhost:4000/images/' + ca.product.photos[0].url} width="80" height='80' />}</td>
                                    <td>
                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => {
                                                dispatch({ type: 'remove', id: ca.id })
                                            }}>Delete</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
                <h3
                    className="CardH1">Total amount {total} USD</h3>
            </div>

        </>
    )
}


export default Card