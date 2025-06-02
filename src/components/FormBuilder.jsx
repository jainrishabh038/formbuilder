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

  const onSubmit = (data) => {
    console.log('Submitted:', data);
  };

  const renderField = (field) => {
    const { name, type, label, required, options } = field;
    const error = errors[name];

    const inputClasses = `w-full px-4 py-3 border rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
      error ? 'border-red-500' : 'border-gray-300'
    }`;

    return (
      <div key={name} className={field.fullWidth ? 'w-full' : 'w-full sm:w-[48%]'}>
        {type === 'dropdown' ? (
          <select {...register(name, { required })} className={inputClasses} defaultValue=''>
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
          <input type={type} placeholder={label} {...register(name, { required })} className={inputClasses} />
        )}
        {error && <p className='text-red-600 text-xs mt-1 ml-1'>This field is required</p>}
      </div>
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='bg-gray-50 p-6 sm:p-10 rounded-md space-y-8 max-w-4xl mx-auto'>
      {config.map((section, idx) => {
        const visibleFields = section.fields.filter(
          (field) => !field.condition || evaluateCondition(watchedValues, field.condition)
        );

        if (visibleFields.length === 0) return null;

        return (
          <div key={idx}>
            <h2 className='text-xl font-semibold text-gray-800 mb-4'>{section.section}</h2>
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
