import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className='navbar navbar-expand-md navbar-light bg-light fixed-top'>
        <Link className='navbar-brand' to='#'>
          THE <span className='text-success '>HEALTH</span> CONSULTANT
        </Link>
        <button
          className='navbar-toggler  text-success'
          type='button'
          data-toggle='collapse'
          data-target='#navbarsExample04'
          aria-controls='navbarsExample04'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarsExample04'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item dropdown '>
              <div className='dropdown-menu' aria-labelledby='dropdown04'>
                <Link className='dropdown-item text-success' to='/'>
                  HOME
                </Link>
                <Link className='dropdown-item text-success' to='/consulting'>
                  CONSULTING
                </Link>
                <Link className='dropdown-item text-success' to='/about'>
                  ABOUT
                </Link>
                <Link className='dropdown-item text-success' to='/blog'>
                  BLOG
                </Link>
                <Link className='dropdown-item text-success' to='/contact'>
                  CONTACT
                </Link>
                <Link className='dropdown-item text-success' to='/search'>
                  SEARCH
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
