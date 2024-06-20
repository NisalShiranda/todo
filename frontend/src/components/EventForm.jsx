import "./EventForm.css"

function EventForm() {
  return (
    <>
        <div className="flex flex-row justify-center items-center space-x-4 py-2 my-2">
            <form className="ml-2">
                
                    <input className="event-form-input" type='text' placeholder="add event" id='event' name='event' value={event}></input>
               
                
            </form>

            <div className="flex justify-center items-center w-[20%]">
                <button className="add-btn py-2 px-3 font-bold">ADD</button>
            </div>
        </div>
    </>
  )
}

export default EventForm