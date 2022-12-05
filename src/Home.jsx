import './Home.css'
import Product from './Product';

function Home() {
  return (
    <div className='container'>

        <div className="leftMenu">
            <input type='text' placeholder='Search...' className='search'/>
            <h1>Categories</h1>
            <div className="cats">
                <span className="cat">All</span>
                <span className="cat">Dress</span>
                <span className="cat">Sport</span>
                <span className="cat">Luxury</span>
                <span className="cat">Casual</span>
            </div>
            <div className="brands">
                <div className='brand'>
                <input className='checkbox' type="checkbox" value='Brand'/>
                <label className='checkBoxTitle' for="brand">Brand</label>
                </div>
               
               <div className='brand'>
               <input className='checkbox' type="checkbox" value='Non-Brand'/>
                <label className='checkBoxTitle' for="nonbrand">Non-Brand</label>
               </div>
            </div>

            <div className='dropDown'>
                <select>
                    <option value="brand">Brand</option>
                    <option value="non-brand">Non-brand</option>
                </select>
            </div>

            <h1>Maximum Price</h1>
            <div className="price">
                <input type="range" className='priceRange' />
                <span className="priceValue">$40</span>
            </div>
        </div>
        <div className="mainContent">
            <div className='products'>
                {data.map((item) => {
                    return <Product item={item}/>
                })}
            </div>
        </div>

    </div>
  )
}

export default Home




const data = [
    {
      id: 1,
      name: "Invicta Men's Pro Diver",
      img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
      price: 74,
      cat: "Dress",
    },
    {
      id: 11,
      name: "Invicta Men's Pro Diver 2",
      img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
      price: 74,
      cat: "Dress",
    },
    {
      id: 2,
      name: "Timex Men's Expedition Scout ",
      img: "https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg",
      price: 40,
      cat: "Sport",
    },
    {
      id: 3,
      name: "Breitling Superocean Heritage",
      img: "https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg",
      price: 200,
      cat: "Luxury",
    },
    {
      id: 4,
      name: "Casio Classic Resin Strap ",
      img: "https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UY879_.jpg",
      price: 16,
      cat: "Sport",
    },
    {
      id: 5,
      name: "Garmin Venu Smartwatch ",
      img: "https://m.media-amazon.com/images/I/51kyjYuOZhL._AC_SL1000_.jpg",
      price: 74,
      cat: "Casual",
    },
    {
        id: 6,
        name: "Breitling Superocean Heritage",
        img: "https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg",
        price: 100,
        cat: "Luxury",
      },
  ];