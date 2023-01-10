import { useState } from 'react';
import './formInput.css';

const FormInput = props => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = e => {
    setFocused(true);
  };

  return (
    <>
      <label>{label}</label>
    <div className="form">
      <input
        className="formInput"
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === 'confirmPassword' && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span className="formErrMsg">{errorMessage}</span>
    </div>
    </>
  );
};

export default FormInput;
