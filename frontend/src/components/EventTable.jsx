import "./EventTable.css"

function EventTable() {
  return (
    <>
        <div className="py-2 my-2">
           <table className="table-auto mx-5">
                <tbody className="">
                    <tr >
                        <td className="">Nisal</td>
                        <td className="flex flex-row">
                            <div><button>UPDATE</button></div>
                            <div><button>DELETE</button></div>
                        </td>
                    </tr>
                </tbody>
           </table>
        </div>
    </>
  )
}

export default EventTable