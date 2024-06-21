
import './App.css'
import EventForm from "./components/EventForm"
import EventTable from './components/EventTable'

function App() {

  const event = [
    {
      event: "Event 1",
    },
    {
      event: "Event 2",
    },
    {
      event: "Event 3",
    },
  ]
  

  return (
    <>
    <section className="full-page">
      <div className="main-container">
        <p className="text-center font-bold text-4xl py-3">TODO</p>
      </div>
      <div className="form-container ">
        <EventForm />
      </div>
      <div className="table-container">
        <EventTable
          event={event}
        
        
         />
      </div>
    </section>
      
    </>
  )
}

export default App
