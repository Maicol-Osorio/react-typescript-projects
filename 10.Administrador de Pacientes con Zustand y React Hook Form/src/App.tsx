import { PatientForm } from "./components/PatientForm"
import { PatientList } from "./components/PatientList"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className="md:p-8 p-4 bg-gray-300">
      <h1 className="font-extrabold text-xl md:text-4xl capitalize text-center mt-5">seguimiento de pacientes <span className="text-purple-700">veterinaria</span></h1>

      <div className="flex flex-col md:flex-row w-full justify-between overflow-y-scroll">
        <PatientForm />
        <PatientList />
      </div>

      <ToastContainer/>
    </div>
  )
}

export default App
