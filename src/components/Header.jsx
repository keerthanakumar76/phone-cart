/* eslint-disable react/prop-types */
import './Header.css';

function Header({ cartItems }) {
    let totalcount = 0;
    for (let cartItem of cartItems) {
        totalcount += cartItem.count;
    }
    return (
        <div>
            <header className='header'>
                <h2>UseReducer</h2>
                <div className="cart-icon">
                    <i className="fa-sharp fa-solid fa-cart-plus"></i>
                    <p>{totalcount}</p>
                </div>
            </header>
        </div>
    )
}

export default Header;