import image1 from '../project-images/image1.jpg';
const About = () => {
  return (
    <div>
      <figure>
        <img src={image1} alt='' className='img-fluid mt-5 img img-thumbnail' />
        <div className='position-absolute about text-right'>
          <h1 className='font-weight-bold text-shadow font-style-title p-3'>
            Hi, I am{' '}
            <span className='font-weight-bolder text-success'>
              Kiran Emmanuel
            </span>
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo,
            ipsa?
          </p>
        </div>
      </figure>
      <div className='p-3 '>
        <div className='shadow p-2'>
          <h3 className='font-style-title title p-3'>What I do for you?</h3>
          <p className='p-3'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            quam nisi assumenda. Harum, magnam. Tenetur cumque nulla doloribus
            molestiae fugit hic autem sed veritatis necessitatibus ratione ipsa
            aliquid perferendis voluptate voluptatem ab maiores voluptatibus
            vero repudiandae, iusto molestias expedita saepe in dicta a? Placeat
            blanditiis dolorem doloremque dolor, iste error quasi enim numquam
            non nesciunt deleniti corrupti incidunt repellat quo ad voluptate
            ipsum neque odit debitis accusantium sequi maxime earum! Nulla
            nostrum a natus quas ad eius ullam expedita dolore maiores ea
            aspernatur soluta esse vel magnam optio illo sed saepe numquam hic
            velit minus, laudantium error. Magnam, nesciunt sequi.
          </p>
        </div>
        <div className='p-2 shadow mt-3'>
          {' '}
          <h3 className='font-style-title title p-3'>
            Where did I learn to do what I do?
          </h3>
          <ul>
            <li>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                similique!
              </p>
            </li>
            <li>
              <p>
                Autem officiis enim culpa et. Expedita architecto praesentium
                mollitia earum.
              </p>
            </li>
            <li>
              <p>
                Dolorum consequuntur harum porro nulla recusandae mollitia,
                placeat sit id?
              </p>
            </li>
            <li>
              <p>
                Iste ad consequuntur aspernatur neque iusto voluptatibus quam
                quisquam similique.
              </p>
            </li>
            <li>
              <p>
                Dignissimos, commodi est? Voluptates veniam perferendis aut
                quibusdam recusandae culpa.
              </p>
            </li>
          </ul>
        </div>

        <div className='why-me shadow p-2 mt-3'>
          <h3 className='font-style-title title p-3'>Why me?</h3>
          <p className='p-3'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
            voluptate sapiente alias incidunt inventore ducimus quidem
            consectetur? Ex odit, iusto error soluta expedita pariatur officiis
            ipsum adipisci sequi qui beatae sint dolorem necessitatibus!
            Repellat fugit ipsa, quo tempore voluptatum cupiditate, nisi
            voluptas vitae saepe similique illo dolor at, voluptatem quae
            consectetur tempora facilis alias. Voluptas maiores quae ut vel
            autem deserunt, sint laudantium corrupti atque natus, quod, omnis
            tenetur vitae voluptatibus dolorum odit earum! Labore ipsam vero ab
            praesentium temporibus excepturi iste ad assumenda nostrum, in culpa
            doloremque qui repellendus ipsum ipsa neque. Nobis odio et obcaecati
            velit impedit officiis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
