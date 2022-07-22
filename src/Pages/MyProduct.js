import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";

function MyProduct() {
    const { products } = useSelector(state => state.logState)
    const dispatch = useDispatch()
    console.log(products);
    useEffect(() => {
        dispatch({ type: "showProduct" })
    }, [])
    return (
        <>
            <div className="myProduct">
                <h1>My Products</h1>

                <table
                    className="table table-dark table-hovered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Photo</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map((prod, prodId) => {
                                return <tr key={prodId}>
                                    <td>{prod.name}</td>
                                    <td><img src={'http://localhost:4000/images/' + prod.photos[0].url} width="100"/></td>
                                    <td>
                                        <Link
                                            className="btn btn-danger btn-sm"
                                            to={'/productInfo/' + prod.id}>See More</Link>
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


export default MyProduct