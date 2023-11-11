import { NavLink } from 'react-router-dom'
import images from '../assets/images.png'

const Navbar = () => {
    const setActive = ({ isActive}) => (isActive ? 'active' : 'undenfined')
  return (
    <>
        <div className="Navbar">
            <img className="logo" src={images} alt="Logo" />
            <NavLink to="/" className={ setActive }>Home</NavLink>
            <NavLink to="/pokemones" className={ setActive }>Pokemones</NavLink>
        </div>
    </>
  );
};

export default Navbar
