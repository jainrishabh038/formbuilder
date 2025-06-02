import './App.css';
import FormBuilder from './components/FormBuilder';
import { formConfig } from './formConfig';
import './index.css';
function App() {
  return (
    <div className='App'>
      <div className='p-6 max-w-4xl mx-auto'>
        <h1 className='text-2xl font-bold mb-4'>Dynamic Form</h1>
        <FormBuilder config={formConfig} />
      </div>
    </div>
  );
}

export default App;
