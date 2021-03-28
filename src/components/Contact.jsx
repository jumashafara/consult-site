import { useState } from 'react';

function Contact() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();
  const [message, setMessage] = useState();

  return (
    <div>
      <div className='contact bg-success p-3 text-white mt-5'>
        <h3 className='font-style-title'>Ready to talk?</h3>
        <p>Call me. Email me.</p>
      </div>
      <div className='p-3'>
        <div className='call-me shadow p-2'>
          <h3 className='font-style-title title p-3'>Call me.</h3>
          <p className='p-3'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet,
            veritatis provident labore, natus quam laudantium maiores sapiente
            iure nesciunt ad inventore, quidem ducimus minus reprehenderit
            veniam neque quod ipsa ea dolorem consequatur! Quibusdam reiciendis
            tempore commodi cum ipsum numquam animi beatae? Assumenda quam
            quisquam fugiat consequuntur eaque adipisci accusantium facere.
          </p>
          <p className='p-3'>
            Call <span className='font-weight-bold'>+256 771 754 118</span>
          </p>
        </div>
        <div className='mt-3'>
          {' '}
          <div className='email-me shadow p-2'>
            <h3 className='font-style-title title p-3'>Email me.</h3>
            <p className='p-3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              ratione tempore illum obcaecati unde fuga, optio maxime magnam
              neque? Laboriosam, quos? Maiores, officia molestiae! Odio aperiam
              corporis libero impedit aspernatur molestias ipsum soluta
              obcaecati itaque, rerum optio consequatur, porro delectus
              voluptatibus sit velit deleniti dolore iste nostrum quasi eligendi
              aut.
            </p>
            <p className='p-3'>
              Email{' '}
              <span className='font-weight-bold'>jumashafara0@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
      <form action='' className=' pt-0 pl-5 pr-5 pb-5'>
        <h3 className='heading font-weight-bold text-center font-style-title title p-3'>
          Contact Form
        </h3>
        <label htmlFor='' className='font-weight-bold mt-3'>
          Your Name
        </label>
        <input
          type='text'
          className='form-control border-success'
          placeholder='Name'
          onChange={(e) => setName(e.currentTarget.value)}
        />

        <label htmlFor='' className='font-weight-bold mt-3'>
          Your Email
        </label>
        <input
          type='email'
          className='form-control border-success'
          placeholder='Email'
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <label htmlFor='' className='font-weight-bold mt-3'>
          Your Phone Number
        </label>
        <input
          type='number'
          className='form-control border-success'
          placeholder='Number'
          onChange={(e) => setNumber(e.currentTarget.value)}
        />
        <label htmlFor='' className='font-weight-bold mt-3'>
          Leave a message
        </label>
        <textarea
          name=''
          id=''
          cols='30'
          rows='2'
          className='form-control border-success'
          placeholder='Write your message here...'
          onChange={(e) => setMessage(e.currentTarget.value)}
        />
        <input
          type='button'
          value='Submit'
          className='btn-success rounded btn mt-3 btn-block'
        />
      </form>
    </div>
  );
}

export default Contact;
