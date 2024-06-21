
import './App.css'
import { useState,useEffect } from 'react'
import EventForm from "./components/EventForm"
import EventTable from './components/EventTable'
import Axios from 'axios'

const App = ()  => {

  const [events,setEvents] = useState([]);
  const [submitted,setSubmitted] = useState(false);
  const [isEdit,setIsEdit] = useState(false);
  const [selectedEvent,setSelectedEvent] = useState([]);
  

  useEffect(() => {
    getEvents();
  
  },[])

  const getEvents = () => {
    Axios.get('http://localhost:4001/api/events')
    .then((res) => {
      setEvents(res?.data)
    })
    .catch((err) => {
      console.log({message:"get event error",err})
    })
  };

  const addEvent = (data) => {

    setSubmitted(true);

    const payload = {
      event:data,
    };


    Axios.post('http://localhost:4001/api/addevent',payload)
    .then(() => {
      getEvents();
      setSubmitted(false);
    })
    .catch((err) => {
      console.log(err)
    })

  };

  const deleteEvent = (data) => {

    const payload = {
      _id:data,
    }

    Axios.post('http://localhost:4001/api/deleteevent',payload)
    .then(() => {
      getEvents();
    })
    .catch((err) => {
      console.log(err)
    })

  }

  const updateEvent  = (data) => {

    setSubmitted(true);

    const payload ={
      _id:data._id,
      event:data.event,
    }
    Axios.put('http://localhost:4001/api/updateevent',payload)
    .then(() => {
      getEvents();
      setSubmitted(false);
      setIsEdit(true);
      setIsEdit(false);
    })
    .catch((err) => {
      console.log({message:"update Error", err})
    })



  }
  
  

  return (
    <>
    <section className="full-page">
      <div className="main-container">
        <p className="text-center font-bold text-4xl py-3">TODO</p>
      </div>
      <div className="form-container ">
        <EventForm
          addEvent={addEvent}
          submitted={submitted}
          nisal={selectedEvent}
          updateEvent={updateEvent}
          isEdit={isEdit}
        
         />
      </div>
      <div className="table-container">
        <EventTable
          event={events}
         
          selectedEvent={(data) => {
            setSelectedEvent(data);
            setIsEdit(true);
            
          }}
          // deleteEvent={deleteEvent}
          deleteEvent={(data) => window.confirm('Are you sure you want to delete this event?') && deleteEvent(data)}

          
        
        
         />
      </div>
    </section>
      
    </>
  )
}

export default App
