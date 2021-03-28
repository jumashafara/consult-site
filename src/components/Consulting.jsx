import image2 from '../project-images/image2.jpg';

export default function Consulting() {
  return (
    <div>
      <div>
        <div className='position-absolute consulting text-center'>
          {' '}
          <h1 className='font-style-title p-3'>Work</h1>
          <h3 className='font-weight-light'>
            Clients. Lorem ipsum dolor sit amet.
          </h3>
        </div>
        <figure>
          <img src={image2} alt='' className='img-fluid mt-5 pt-2' />
        </figure>
      </div>
      <div className='p-3'>
        <div className='shadow p-2'>
          {' '}
          <h3 className='font-style-title title p-3'>Who do I do this for?</h3>
          <p className='p-3'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
            distinctio non accusantium alias deserunt nulla nostrum minus
            incidunt dolorum ipsa.
          </p>
        </div>

        <div className='shadow p-2 mt-3'>
          <h3 className='font-style-title title p-3'>What can I do for you?</h3>
          <p className='p-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            architecto qui adipisci laboriosam nam fuga eaque consequuntur.
            Nulla, rerum. Magnam commodi atque dolorem aspernatur. Aliquid cum
            ratione porro alias in atque numquam eligendi placeat deserunt
            expedita pariatur ipsam, quidem perspiciatis quae accusamus a modi
            laborum laboriosam molestias nihil laudantium? Ex?
          </p>
        </div>
      </div>
    </div>
  );
}
