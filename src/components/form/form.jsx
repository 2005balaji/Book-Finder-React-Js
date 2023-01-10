import { useState } from 'react';
import './form.css';
import FormInput from './FormInput';
import { useNavigate } from 'react-router-dom';









const Form = () => {
  let direct = useNavigate()



  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });




  const inputs = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      placeholder: 'Username',
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: 'Username',
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true,
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      errorMessage: 'It should be a valid email address!',
      label: 'Email',
      required: true,
    },
    {
      id: 4,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      errorMessage:
        'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
      label: 'Password',
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm Password',
      errorMessage: "Passwords don't match!",
      label: 'Confirm Password',
      pattern: values.password,
      required: true,
    },
  ];










  const handleSubmit = e => {
    e.preventDefault();
    sessionStorage.setItem(values, JSON.stringify(values))
    sessionStorage.setItem('usernameId', values.username)
    direct('/')
    direct(0)
  


  };

  const onChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };





  return (
    <>



      <div id="formArea">
        <br /><br />
        <h1>Join the millions reading book’s with   BookAcademy for free</h1>
        <br /><br /><br />

        <h2>Sign Up</h2>
        <br />

        <form id="form" onSubmit={handleSubmit}>

          {inputs.map(input => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}

          <div>
            <p id='conditions-statement'>By signing up for BookFinder, you agree to BookFinder’s <br />
              <a className='conditions' href="">Terms of Service  </a>&<a className='conditions' href=""> Privacy Policy</a>.
            </p>
          </div>

          <button id="submit">Sign up</button>
        </form>



      </div>

    </>
  );
};

export default Form;
