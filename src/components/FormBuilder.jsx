import React from 'react';
import { useForm } from 'react-hook-form';
import { evaluateCondition } from '../utils/conditionalUtils';

const FormBuilder = ({ config }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const watchedValues = watch();

  const onSubmit = (data) => console.log('Submitted:', data);

  const renderField = ({ name, type, label, required, options, validate, fullWidth }) => {
    const error = errors[name];
    const classes = `w-full px-4 py-3 border rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
      error ? 'border-red-500' : 'border-gray-300'
    }`;

    return (
      <div key={name} className={fullWidth ? 'w-full' : 'w-full sm:w-[48%]'}>
        {type === 'dropdown' ? (
          <select {...register(name, { required, validate })} className={classes} defaultValue=''>
            <option value='' disabled hidden>
              {label}
            </option>
            {options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        ) : (
          <input type={type} placeholder={label} {...register(name, { required, validate })} className={classes} />
        )}
        {error && (
          <p className='text-red-600 text-xs mt-1 ml-1'>
            {error.type === 'required' ? 'This field is required' : error.message || 'Invalid input'}
          </p>
        )}
      </div>
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='bg-gray-50 p-6 sm:p-10 rounded-md space-y-8 max-w-4xl mx-auto'>
      {config.map(({ section, fields }, i) => {
        const visibleFields = fields.filter((f) => !f.condition || evaluateCondition(watchedValues, f.condition));
        if (!visibleFields.length) return null;
        return (
          <div key={i}>
            <h2 className='text-xl font-semibold text-gray-800 mb-4'>{section}</h2>
            <div className='flex flex-wrap gap-4'>{visibleFields.map(renderField)}</div>
          </div>
        );
      })}

      <button type='submit' className='bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition'>
        Submit
      </button>
    </form>
  );
};

export default FormBuilder;
