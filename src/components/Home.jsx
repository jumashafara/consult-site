import Blog from './Blog';

function Home({ blogs }) {
  return (
    <div className='mt-5'>
      <div>
        <h3 className='p-3 text-center bg-success text-light'>Weekly Blogs</h3>
        {/* <Blog blogs={blogs}/> */}
      </div>
    </div>
  );
}

export default Home;
