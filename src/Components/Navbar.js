import logo from '../images/UnB.png';

const Navbar = ({show}) => {

    return (
        <div className={show ? 'sidenav active' : 'sidenav'}>
            <ul>
            
            <img src={logo} alt="Logo" className='logo'/>
            <li>
                <a href="/">Home</a>
                </li>
            <li>
                <a href="/">Dados</a>
                </li>
            <li>
                <a href="/">Sobre</a>
                </li>
            <li>
                <a href="/">Créditos</a>
                </li>
            
            </ul>            
        </div>
    )
}

export default Navbar;