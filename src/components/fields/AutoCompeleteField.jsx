import React, { useState } from 'react';
import { Controller } from 'react-hook-form';

const AutocompleteField = ({ field, control, error }) => {
  const [suggestions, setSuggestions] = useState([]);

  return (
    <div>
      <label className='block mb-1'>{field.label}</label>
      <Controller
        name={field.name}
        control={control}
        render={({ field: controllerField }) => (
          <>
            <input
              type='text'
              value={controllerField.value || ''}
              onChange={(e) => {
                const val = e.target.value;
                controllerField.onChange(val);
                setSuggestions(field.options?.filter((opt) => opt.toLowerCase().includes(val.toLowerCase())) || []);
              }}
              className='w-full border rounded px-3 py-2'
            />
            {suggestions.length > 0 && (
              <ul className='border bg-white mt-1 rounded shadow text-sm'>
                {suggestions.map((opt) => (
                  <li
                    key={opt}
                    className='p-2 hover:bg-blue-100 cursor-pointer'
                    onClick={() => {
                      controllerField.onChange(opt);
                      setSuggestions([]);
                    }}
                  >
                    {opt}
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      />
      {error && <p className='text-red-500 text-sm mt-1'>{error.message}</p>}
    </div>
  );
};

export default AutocompleteField;
