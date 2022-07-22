import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom";

function AllProducts() {
    const { products } = useSelector(state => state.logState)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    console.log(products);
    useEffect(() => {
        dispatch({type:"allprods" , navigate})
    },[])

    return (
        <>
            <div
                className="allProd">
                <h1
                    className="prodH1">All Products</h1>

                <table 
                className="tb table table-dark">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Count</th>
                            <th>Price</th>
                            <th>Add to card</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map((prod,prodId) => {
                                return <tr key={prodId}>
                                     <td>{prod.name}</td>
                                     <td>{prod.count}</td>
                                     <td>{prod.price} USD</td>
                                     <td>
                                         <button 
                                         className="btn btn-success btn-sm"
                                         onClick={() => {
                                             dispatch({type:'addCARD', id:prod.id , navigate})
                                         }}>Add</button>
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

export default AllProducts