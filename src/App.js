import Navbar from './components/Navbar';
import Home from './components/Home';
import Consulting from './components/Consulting';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Search from './components/Search';
import Footer from './components/Footer';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      author: 'Kiran Emmanuel',
      title: 'What is enough sex?',
      body:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure aut possimus, consequatur natus ad sequi ea quae nisi dolorum voluptate laborum earum rem ratione voluptatibus quia, deserunt similique cupiditate impedit nemo nobis explicabo corrupti dolorem, in sint. Iure tempora aperiam aut omnis dicta nostrum quas dolorum placeat rerum minus asperiores possimus vitae atque, expedita, sapiente ad adipisci illo dolores quia, facere consectetur accusantium magnam? Consequuntur molestias laudantium nam quos modi consectetur atque incidunt quod recusandae praesentium? Quasi labore consequuntur a nobis vel sint quia, aut repellat, eum odit fugit quod! Officia repudiandae harum voluptatem dolores quod. Dolore maiores ea cumque.',
      date: Date(),
    },
  ]);
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home blogs={blogs} />
          </Route>
          <Route exact path='/consulting'>
            <Consulting />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/blog'>
            <Blog blogs={blogs} />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
          <Route exact path='/Search'>
            <Search />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
