
import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
            <div className='header-left'>
                <a href="/home">Home</a>
            </div>
            <div className='header-right'>
                <a href="/Home">Order</a>
                <a href="/Home">Blog</a>
                <a href="/Home">About Us</a>
                <a href="/Home">Login</a>
            </div>
        </nav>
    );
};

export default Header;