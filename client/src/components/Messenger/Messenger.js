import React from 'react'
import Contacts from './Contacts'

function Messenger() {
  return (
    <div>
        <div className="row">
            <div className="col-lg-3">
                <Contacts/>
            </div>
            <div className="col-lg-9">
                <h1>User / Group</h1>
                <div>
                    <div>Hi</div>
                    <div>Hello</div>
                    <div>How are you</div>
                    <div>I am fine</div>
                </div>
                <div className="row">
                    <div className="col-lg-10"><input type="text" className="form-control"></input></div>
                    <div className="col-lg-2"><button type="button" className="btn btn-primary">Send</button></div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Messenger