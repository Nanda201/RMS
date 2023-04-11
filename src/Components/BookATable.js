import React from 'react'

function BookATable() {
  return (
    <div className='container-fluid' >
      <div className='row '>
        <div className='col-lg-8 col-md-6 col-sm-12 p-0'>
          <img src="RegisterImg.png" alt="Responsive Image" style={{height:"92.6vh", width:"100%"}} />
        </div>

        <div className='col-lg-3 col-md-6 col-sm-12  mx-auto my-auto '>
          <span className="mb-3 fs-1 fw-bold mx-5">Book a table</span>
          <br /> <br />
          <form>
            <div className='form-group'>
              <div className="mb-3 input-group input-group-lg">
                <input type="text" className="form-control input-group-lg" placeholder='User Name' maxlength="10" required />
              </div>
              <div className="mb-3 input-group input-group-lg">
                <input type="password" className="form-control" placeholder='Password' required />
              </div>
              <div className="mb-3 d-flex justify-content-end">
                <input type="checkbox" className="form-check-input " />&ensp;<span style={{ color: 'blue', }}>Remember me</span>
              </div>
              <div className='mb-3 input-group input-group-lg'>
                <button type="submit" className="btn btn-lg btn-block" style={{ width: '-webkit-fill-available', backgroundColor: 'black', color: 'white' }} >Login</button>
              </div>
            </div>
          </form>

        </div>


      </div>


    </div>


  )
}

export default BookATable
