import React from 'react';

const TextField = ({ field, register, error }) => (
  <div>
    <label className='block mb-1'>{field.label}</label>
    <input
      type='text'
      {...register(field.name, {
        required: field.required ? 'Required' : false,
        pattern: field.validation?.regex
          ? {
              value: field.validation.regex,
              message: field.validation.message,
            }
          : undefined,
      })}
      className='w-full border rounded px-3 py-2'
    />
    {error && <p className='text-red-500 text-sm mt-1'>{error.message}</p>}
  </div>
);

export default TextField;
