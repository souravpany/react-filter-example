import './Product.css'

function Product({item}) {
  return (
    <div className="product">
        <img src={item.img} alt={item.name}/>
        <span className='productName'>{item.name}</span>
        <span className='priceText'>${item.price}</span>
    </div>
  )
}

export default Product