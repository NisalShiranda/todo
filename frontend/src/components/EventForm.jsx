import "./EventForm.css"

function EventForm() {
  return (
    <>
        <div className="flex flex-row space-x-4">
            <form>
                <div className="flex justify-center items-center ">
                    <input className="w-[400px]" type='text' id='event' name='event' value={event}></input>
                </div>
                
            </form>

            <div className="flex justify-center items-center">
                <button>ADD</button>
            </div>
        </div>
    </>
  )
}

export default EventForm