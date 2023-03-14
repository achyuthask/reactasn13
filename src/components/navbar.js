import './navbar.css'
import { Link } from 'react-router-dom';
import AppsIcon from '@mui/icons-material/Apps';

const Navbar =()=>{
    return(

        <>
      <ul>
     <li>
    <AppsIcon />
 </li>
  <li> <Link to="/">Home</Link></li>
  <li> <Link to="/about">about</Link></li>
  <li> <Link to="/project">project</Link></li>
  <li> <Link to="/blog">blog</Link></li>
  <li> <Link to="/contact">contact</Link></li>

  
  
</ul>
        </>
    );
}

export default Navbar;