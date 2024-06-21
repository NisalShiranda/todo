import "./EventTable.css"

const EventTable = ({event,selectedEvent,deleteEvent}) => {


  return (
    <>
        <div className="pb-5 pt-7">
           <table className="table-auto flex justify-center">
                <tbody className="">

                    {event.map((row) => (
                      <tr className="" key={row._id}>
                      <div className="table-nisal flex flex-row items-center bg-gray-50 py-3 mb-2">
                          <td className="w-[300px] pl-2">{row.event}</td>
                          <td className="flex flex-row pr-2">
                              <div><button className="add-btn p-1 mx-4" onClick={() => selectedEvent({_id: row._id, event : row.event})}>UPDATE</button></div>
                              <div><button className="add-btn p-1" onClick={() => deleteEvent(row._id)}>DELETE</button></div>
                          </td>
                      </div>
                      
                      
                    </tr>







                    ))}
                    
                      
                
                </tbody>
           </table>
        </div>
    </>
  )
}

export default EventTable