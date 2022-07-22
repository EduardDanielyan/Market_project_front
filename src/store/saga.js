import axios from "axios";
import { takeEvery, put } from 'redux-saga/effects'
import Swal from "sweetalert2";
import { addOrd, cardAdd, cardShop, checkUser, setLogin, setProduct, setProducts, showdetails } from "./Login/action";


const Axios = axios.create({
    withCredentials: true
})


function* add({ data }) {
    yield Axios.post("http://localhost:4000/registration", { data: data })

}

function* login({ data, navigate }) {
    let result = yield Axios.post("http://localhost:4000/signin", data)
    console.log(result);
    if ('error' in result.data) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'User not found!',
            footer: '<a href="">Why do I have this issue?</a>'
        })
    }
    else {
        yield put(checkUser(true))
        navigate('/profile')
    }
}

function* profile() {
    let { data } = yield Axios.post("http://localhost:4000/profile")
    console.log(data);
    yield put(setLogin(data.user))
}

function* logout({navigate}){
    let logOut = yield Axios.post("http://localhost:4000/logout")
    if(logOut){
        yield put(checkUser(false))
        console.log(logOut);
        navigate('/signin')
    }
}

function* addProduct({ data }) {
    const form = new FormData(data)
    yield Axios({
        method: "post",
        url: "http://localhost:4000/addProduct",
        data: form,
        headers: { "Content-Type": "multipart/form-data" },
    })
    console.log(data);
    console.log(form);
}

function* showProduct() {
    let { data } = yield Axios.post("http://localhost:4000/myProduct")
    console.log(data);

    yield put(setProducts(data))
}

function* productInfo({ id }) {
    let { data } = yield Axios.post("http://localhost:4000/productInfo", { id: id })
    console.log(data);
    yield put(setProduct(data))
}

function* userCHECK({path , navigate}) {
    let { data } = yield Axios.post("http://localhost:4000/userCheck")
    console.log(data);
    yield put(checkUser(data))
    if(data){
        navigate(path)
    }else{
        navigate('/signin')
    }
}

function* allProducts(){
    let {data} = yield Axios.post("http://localhost:4000/allProducts")
    console.log(data);
    yield put(setProducts(data))
}

function* addCard({id,navigate}){
    let data = yield Axios.post("http://localhost:4000/addCard" , {id:id})
    if ('error' in data.data) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please Signin!',
            footer: '<a href="">Why do I have this issue?</a>'
        })
    }
    else {
        navigate('/allProducts')
    }
    console.log(data,'add');
    // yield put(cardAdd(data))
}

function* cardShow({id}){
   let {data} = yield Axios.post("http://localhost:4000/showCard" , {id:id})
   yield put(cardShop(data))
   yield put(checkUser(true))
   console.log(data);
}

function* removeProduct({id , navigate}){
    let {data} = yield Axios.post("http://localhost:4000/removeProd" , {id:id})
    console.log(data);
    
}

function* orderProd(){
    let {data} = yield Axios.post("http://localhost:4000/orderProducts")
    console.log(data);
}

function* orderTab(){
    let {data} = yield Axios.post('http://localhost:4000/orderTable')
    yield put(addOrd(data))
    console.log(data);
}

function* details({id}){
    let {data} = yield Axios.post('http://localhost:4000/details' , {id:id})
    yield put(showdetails(data))
    console.log(data);
}



export function* rootSaga() {
    yield takeEvery('signin', add)
    yield takeEvery('login', login)
    yield takeEvery('profile', profile)
    yield takeEvery('AddProduct', addProduct)
    yield takeEvery('showProduct', showProduct)
    yield takeEvery('myProdInfo', productInfo)
    yield takeEvery('allprods' , allProducts)
    yield takeEvery('checkUser', userCHECK)
    yield takeEvery('out' , logout)
    yield takeEvery('addCARD' , addCard)
    yield takeEvery('showcard' , cardShow)
    yield takeEvery('remove' , removeProduct)
    yield takeEvery('orderProd' , orderProd)
    yield takeEvery('table' , orderTab)
    yield takeEvery('prodDetails' , details)
}
