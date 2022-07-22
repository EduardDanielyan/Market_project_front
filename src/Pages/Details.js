import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";

function Details() {
    const { orderDetails } = useSelector(state => state.logState)
    let { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({ type: 'prodDetails', id: id })
    }, [])
    console.log(orderDetails);
    return (
        <>
            <div
                className="details">
                <h1
                    className="prodH1">Details</h1>
                <div
                    className="detailBG">
                    <h3>{orderDetails.name} {orderDetails.description}
                        <br />count - {orderDetails.count} {orderDetails.price}(AMD) </h3>
                    <div id="demo" className="carousel slide w-50 mx-auto" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            {
                                orderDetails.photos && orderDetails.photos.map((photo, photoId) => {
                                    return (
                                        <button
                                            type="button"
                                            data-bs-target="#demo"
                                            data-bs-slide-to={photoId}
                                            key={photoId}
                                            className={photoId == 0 ? 'active' : ''}>
                                        </button>
                                    )
                                })
                            }
                        </div>

                        <div className="carousel-inner">

                            {
                                orderDetails.photos && orderDetails.photos.map((photo, photoId) => {
                                    return (
                                        <div className={`carousel-item ${photoId == 0 ? 'active' : ''}`} key={photoId}>
                                            <img src={'http://localhost:4000/images/' + photo.url} alt="Los Angeles" height={210} style={{ objectFit: 'cover' }} className="d-block w-100" />
                                        </div>
                                    )
                                })
                            }

                        </div>

                        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </button>
                    </div>

                </div>
            </div>

        </>
    )
}


export default Details