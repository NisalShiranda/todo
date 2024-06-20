
import './App.css'
import EventForm from "./components/EventForm"

function App() {
  

  return (
    <>
    <section className="full-page">
      <div className="main-container">
        <p className="text-center font-bold text-4xl py-3">TODO</p>
      </div>
      <div className="form-container mt-2 py-2 flex justify-center items-center">
        <EventForm />
      </div>
    </section>
      
    </>
  )
}

export default App
