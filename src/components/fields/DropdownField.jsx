import React from 'react';
import { Controller } from 'react-hook-form';

const DropdownField = ({ field, control, error }) => {
  return (
    <div>
      <label className='block mb-1'>{field.label}</label>
      <Controller
        name={field.name}
        control={control}
        rules={{ required: field.required ? 'Required' : false }}
        render={({ field: controllerField }) => (
          <select {...controllerField} className='w-full border rounded px-3 py-2 bg-white'>
            <option value=''>Select</option>
            {field.options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        )}
      />
      {error && <p className='text-red-500 text-sm mt-1'>{error.message}</p>}
    </div>
  );
};

export default DropdownField;
