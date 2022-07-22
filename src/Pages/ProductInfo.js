import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";

function ProductInfo() {
    const { productInfo } = useSelector(state => state.logState)
    let { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({ type: 'myProdInfo', id: id })
    }, [])
    console.log(productInfo);
    return (
        <>
            <div className="prodInfo">
                <h1
                    className="prodH1">Product Info</h1>

                <h4
                className="prodH3">
                    {productInfo.name} {productInfo.description} , count - {productInfo.count} , {productInfo.price} AMD</h4>

                <div id="demo" className="carousel slide w-50 mx-auto" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        {
                            productInfo.photos && productInfo.photos.map((photo, photoId) => {
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
                            productInfo.photos && productInfo.photos.map((photo, photoId) => {
                                return (
                                    <div className={`carousel-item ${photoId == 0 ? 'active' : ''}`} key={photoId}>
                                        <img src={'http://localhost:4000/images/' + photo.url} alt="Los Angeles" height={550} style={{ objectFit: 'cover' }} className="d-block w-100" />
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
        </>
    )
}


export default ProductInfo