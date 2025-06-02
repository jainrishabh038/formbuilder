import React from 'react';

const EmailField = ({ field, register, error }) => (
  <div>
    <label className='block mb-1'>{field.label}</label>
    <input
      type='email'
      {...register(field.name, {
        required: field.required ? 'Required' : false,
        pattern: {
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: 'Invalid email address',
        },
      })}
      className='w-full border rounded px-3 py-2'
    />
    {error && <p className='text-red-500 text-sm mt-1'>{error.message}</p>}
  </div>
);

export default EmailField;
