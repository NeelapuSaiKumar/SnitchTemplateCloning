import './Nav.css';
import logo from '../snitchh.webp';
import {FaBars,FaUser, FaHeart, FaShoppingCart, FaSearch,FaGift} from 'react-icons/fa'
function Nav(){
    return(
        <>
        <div className="navbar navbar-expand-lg">
            <button className='menu'>
                <FaBars title='menu'/>
            </button>
        <img className='imagee' src={logo} alt='snitch'></img>
        <button className='search'>
                <FaSearch title='search'/>
            </button>
            <button className='heart'>
                <FaHeart title='liked'/>
            </button>
            <button className='cart'>
                <FaShoppingCart title='cart'/>
            </button>
            <button className='gift'>
                <FaGift title='rewards'/>
            </button>
            <button className='profile'>
                <FaUser title='profile'/>
            </button>
        </div>
        </>
    )
}
export default Nav;