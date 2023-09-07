
import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
            <div className='header-left'>
                <a href="/">Home</a>
            </div>
            <div className='header-right'>
                <a href="/my-task">My task</a>
                <a href="/inbox">Inbox</a>
                <a href="/create">Create</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;