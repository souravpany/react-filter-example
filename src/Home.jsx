import './Home.css';

import { useEffect,useState, useRef } from 'react';

import Product from './Product';

import { 
    filterProductsByCategories ,
    filterProductsByBrand,
    filterProductsByTitile,
    filterProductsByPrice,
    filterProductsDefaultBrandAndPrice
} from '../src/features/productSlice';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


function Home() {

    const dispatch = useDispatch()
    const { products } = useSelector((state) => state.productDetails)


    const inputText = useRef();
    const [ price, setPrice ] = useState(40);

    const handleInput = (e)=>{
        setPrice(e.target.value);
        dispatch(filterProductsByPrice(e.target.value))
      }

    useEffect(() => {
        // by default showing only brand values data.
        dispatch(filterProductsDefaultBrandAndPrice({brand: 'Brand', price: 40}))
    }, [dispatch])


    const onCategoryClciked = (type) => {
        dispatch(filterProductsByCategories(type))
    }

    const onDWBrandClciked = (brandValue) => {
        dispatch(filterProductsByBrand(brandValue))
    }

    const onCBBrandClciked = (checkedValue) => {

        if(checkedValue.checked) {
            dispatch(filterProductsByBrand(checkedValue.value))
        } else {
            dispatch(filterProductsByBrand('Brand'))
        }
    }

    const onSearchBoxChange = () => {

        if(inputText.current.value === '') {
            dispatch(filterProductsByBrand('Brand'))
        } else {
            dispatch(filterProductsByTitile(inputText.current.value))
        }
    }



  return (
    <div className='container'>

        <div className="leftMenu">
            <input ref={inputText} type='text' placeholder='Search...' className='search' onChange={onSearchBoxChange}/>
            <h1>Categories</h1>
            <div className="cats">
                <span className="cat" onClick={() => onCategoryClciked('All')}>All</span>
                <span className="cat" onClick={() => onCategoryClciked('Dress')}>Dress</span>
                <span className="cat" onClick={() => onCategoryClciked('Sport')}>Sport</span>
                <span className="cat" onClick={() => onCategoryClciked('Luxury')}>Luxury</span>
                <span className="cat" onClick={() => onCategoryClciked('Casual')}>Casual</span>
            </div>
            <div className="brands">
                <div className='brand'>
                <input 
                className='checkbox' 
                type="checkbox" 
                value='Brand' 
                onChange={(e) => onCBBrandClciked(e.target)}
                />
                <label className='checkBoxTitle' for="brand">Brand</label>
                </div>
               
               <div className='brand'>
               <input className='checkbox' type="checkbox" value='Non-brand' onChange={(e) => onCBBrandClciked(e.target)}/>
                <label className='checkBoxTitle' for="nonbrand">Non-Brand</label>
               </div>
            </div>

            <div className='dropDown'>
                <select type='dropdown' onChange={(e) => onDWBrandClciked(e.target.value)}>
                    <option value="Brand">Brand</option>
                    <option value="Non-brand">Non-brand</option>
                </select>
            </div>

            <h1>Maximum Price</h1>
            <div className="price">
                <input type="range" className='priceRange' onInput={handleInput}/>
                <span className="priceValue">${price}</span>
            </div>
        </div>
        <div className="mainContent">
            <div className='products'>
                {products.map((item) => {
                    return <Product key={item.id} item={item}/>
                })}
            </div>
        </div>

    </div>
  )
}

export default Home
