/* eslint-disable react/prop-types */
import './ProductItems.css'

function ProductItem({ item, removeItem, increment, decrement }) {
    return (
        <div className="card">
            <div className='img-details'>
                <div className="img-div">
                    <img src={item.imgPath} alt="" />
                </div>
                <div className="details">
                    <h2>{item.name}</h2>
                    <p>{item.price}</p>
                    <button className='removebtn'
                        onClick={() => {
                            removeItem(item.id);
                        }}
                    >
                        remove
                    </button>
                </div>
            </div>
            <div>
                <button onClick={decrement}>-</button>
                {item.count}
                <button onClick={increment}>+</button>
            </div>
        </div>
    );
}

export default ProductItem;