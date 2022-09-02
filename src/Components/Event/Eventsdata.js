import React, { useEffect, useState } from 'react'
import { db } from '../../Firebase';
import './eventtable.css';
const Eventsdata = () => {
    const [event, setevent] = useState([]);
  useEffect(() => {
    loadAllServices();
  }, []);
    const loadAllServices = async () => {
        await db.collection('register').get().then((querySnapshot) => {
    
          // Loop through the data and store
          // it in array to display
          querySnapshot.forEach(element => {
            var data = element.data();
            setevent(arr => [...arr, data]);
    
          });
        })
    
      };
      
  return (
    <>
    <div className='toppad'>
    
            <div class="container3">
    <ul class="responsive-table">
                <li class="table-header">
                  <div class="col col-1">Event</div>
                  <div class="col col-2">Name</div>
                  <div class="col col-2">Phone</div>
                  <div class="col col-3" style={{ paddingRight: '16vw' }}>Email</div>

                </li>
                {/* {console.log("here is user", services)} */}
                {event.map((s) => (
                  <>
                    <li class="table-row">
                      <div class="col col1" data-label="Name">{s.name}</div>
                      <div class="col col2 " data-label="Gmail">{s.name}</div>
                      <div class="col col8" data-label="Message">{s.phone}</div>
                      <div class="col col8" data-label="Gmail">{s.email}</div>
                      {/* {user && (user.role === 'admin' && <Button onClick={() => { handleremove(s.name) }} type="danger" className="mb-3 custom" block shape="round" icon={<DeleteOutlined />} size="small">

                      </Button>)} */}
                    </li>


                  </>
                 ))} 

              </ul>
    </div>
    
    </div>
    </>
  )
}

export default Eventsdata