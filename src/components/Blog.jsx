function Blog({ blogs }) {
  return (
    <div className='mt-5 p-4'>
      {blogs.map((blog) => (
        <div className='blog-content shadow p-2' id={blog.id}>
          <h3 className='p-3 text-center title'>{blog.title}</h3>
          <p className='p-3'>{blog.body}</p>
          <div className='p-3'>
            <h5>{blog.author}</h5>
            <h5>{blog.date}</h5>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blog;
