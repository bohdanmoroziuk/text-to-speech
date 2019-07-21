import React from 'react';

export const renderInputField = ({
  input,
  label,
  type,
  id,
  meta: {
    touched,
    error,
    warning
  },
  ...restProps
}) => (
  <div className="form-group">
    <label htmlFor={id}>{label}</label>
    <input 
      className="form-control" 
      {...input}
      {...restProps}  
      {...{
        id,
        type,
        placeholder: label,
      }}  
    />
    {touched && 
      ((error && <span className="text-danger">{error}</span>) || 
        (warning && <span className="text-warning">{warning}</span>))}
  </div>
);