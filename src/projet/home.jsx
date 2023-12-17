import { useEffect, useState } from "react"
import Products from "./product"
import image2 from '../image/bg9.jpg'

export default function ProductList(){


    const [productList,setProductList] = useState([])
    const [searchInput,setSearchInput] = useState('')
    const[categories,setCategories] = useState([])
    const [currentCategory, setCurrentCategory] = useState()
    


    const displayCategories = () => {
        return categories.map((category,key)=>
        <button key={key}
            className={'btn ' + (currentCategory === category ? 'btn-dark m-2' : 'btn-secondary m-2')}
            onClick={(e) => {
            e.preventDefault()
            setCurrentCategory(category)
            }}>
            {category}
        </button>
        )
    }
    const displayProducts = () => {
        let productsTemp = productList
        if (searchInput !== undefined) {
            productsTemp = productList.filter(product =>
                product.title.includes(searchInput)
                || product.id.toString().includes(searchInput)
                || product.description.includes(searchInput)
            )
        }
        if (currentCategory !== undefined) {
            productsTemp = productsTemp.filter(product => {
                return product.category === currentCategory
            })
        }
        if (productsTemp.length > 0) {
            return productsTemp.map((product, key) => {
                return <Products product={product} key={key}/>
            })
        }
    }

    const getProducts = () => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(res => setProductList(res))
    }
    const getCategories = () => {
        fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())
        .then(res => setCategories(res))
    }


    useEffect(()=>{
    getProducts()
    getCategories()
    },[])
    const handleSearch = (e) => {
        e.preventDefault()
        const SearchValue = document.querySelector('#search').value
        setSearchInput(SearchValue)

    }
    // const border = {
    //     border: '1px solid red'
    // }
    return <>
    <h2 className="text-center text-light ">Search :</h2>
    <form>
        <div className="form-group">
            <label ></label>
            <input type="text" id="search" className="form-control mb-2"/>
        </div>
        <div className="col-auto">
        <input className="btn btn-primary m-1" type="submit" value='Search' onClick={handleSearch} />
        <input className="btn btn-primary" type="reset" value='Reset'/>
        </div>
        <hr />
        <h5 className="text-light">Categories :</h5>
        <div className="row g-3 align-items-center">
            <div className="form-group">
                {displayCategories()}
            </div>
        </div>
    </form>
    <h1 className="text-center mb-5">les listes de produits : </h1>
    <table className='table'>
        <thead>
            <tr>
                <th>#ID:</th>
                <th>Tittle</th>
                <th>Price</th>
                <th>Description</th>
                <th>Category</th>
                <th>image</th>
                <th>Rating</th>
            </tr>
        </thead>
        <tbody>
            {displayProducts()}
        </tbody>
    </table>
    </>
}