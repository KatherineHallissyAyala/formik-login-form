import React from "react";
// TODO: import useFormik from formik library
import {useFormik} from 'formik';

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      alert("Login successful!");
    },
    validate: (values) => {
      let errors = {};
      if(!values.email) errors.email = 'Field required';
      if(!values.password) errors.password = 'Field required';
      return errors;
    }
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input 
          name="email" 
          id="emailField"
          type="text" 
          onChange={formik.handleChange} 
          value = {formik.values.email} />
        {formik.errors.email ? (
          <div style={{ color:'red' }} 
            id="emailError">{formik.errors.email}
          </div>
        ): null}
        <div>Password</div>
        <input 
          id="pswField" 
          type="text" 
          name="password"
          onChange={formik.handleChange} 
          value={formik.values.password} 
        />
        {formik.errors.password ? (
          <div style={{color:'red'}} 
            id="passwordError">{formik.errors.password}
            </div>
            ) : null}
        <button id="submitBtn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
