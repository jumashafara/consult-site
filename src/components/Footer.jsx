import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className=''>
      <nav className='navbar navbar-expand-md navbar-dark bg-dark '>
        <Link className='navbar-brand' to='#'>
          THE <span className='text-success '>HEALTH</span> CONSULTANT
        </Link>
        <div className='navbar-nav mr-auto'>
          <div className='nav-item row text-center'>
            <div className='col-sm-6 p-2'>
              <Link className='p-3 text-success' to='/'>
                HOME
              </Link>
              <Link className='p-3 text-success ' to='/consulting'>
                CONSULTING
              </Link>
              <Link className='p-3 text-success' to='/about'>
                ABOUT
              </Link>
            </div>
            <div className='col-sm-6 p-2'>
              <Link className='p-3 text-success' to='/blog'>
                BLOG
              </Link>
              <Link className='p-3 text-success' to='/contact'>
                CONTACT
              </Link>
              <Link className='p-3 text-success' to='/search'>
                SEARCH
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <footer className='navbar-dark bg-dark text-light p-2 text-center'>
        <p> 2021 The Health Consultant. All Rights Reserved </p>
      </footer>
    </div>
  );
}
