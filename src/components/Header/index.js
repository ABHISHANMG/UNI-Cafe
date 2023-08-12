import {HiOutlineShoppingCart} from 'react-icons/hi'

import './index.css'

const Header = () => {
  const value = 0

  return (
    <div className="header-container">
      <h1>UNI Resto Cafe</h1>
      <div className="cart-container">
        <p>My orders</p>
        <HiOutlineShoppingCart size={30} />
      </div>
    </div>
  )
}

export default Header
