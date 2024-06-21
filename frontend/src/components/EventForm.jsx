import "./EventForm.css"
import { useState,useEffect } from 'react'
//value={event}
const EventForm  = ({addEvent,submitted,nisal,updateEvent,isEdit}) => {

  const [event,setEvent] = useState("");
  const[ID,SetID] = useState([]);

  useEffect(() => {
    if(!submitted){
      setEvent("");
    }
  },[submitted])

  useEffect(() => {
    if(nisal && nisal._id && nisal._id !== 0){
      setEvent(nisal.event);
      SetID(nisal._id);
      
    }
  },[nisal])




  return (
    <>
        <div className="flex flex-row justify-center items-center space-x-4 py-2 my-2">
            <form className="ml-2">
                
                    <input className="event-form-input" type='text' placeholder="add event" id='event' name='event' value={event} onChange={(e) => {setEvent(e.target.value)}}  ></input>
                    
               
                
            </form>

            <div className="flex justify-center items-center w-[20%]">
                <button className="add-btn py-2 px-3 font-bold" onClick={() => isEdit?updateEvent({_id:ID,event:event}): addEvent(event)}>{isEdit? `Update`: `Add`}</button>
            </div>
        </div>
    </>
  )
}

export default EventForm