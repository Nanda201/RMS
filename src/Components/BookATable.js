import React from 'react'

function BookATable() {
  return (
    <div className='container-fluid'>
      <div className='row '>
        <div className='col-md-8 p-0'>
          <div class="ratio ratio-4x3">
            <img src="RegisterImg.png" class="h-100" alt="Responsive Image" />
          </div>
        </div>
        <div className='col-md-3 mx-auto my-auto align-items-center '>

          <span className="mb-3 fs-1 fw-bold  ">Book a table</span>
          <br /> <br />
          <form>
            <div className='form-group'>
              <div className="mb-3 input-group input-group-lg">
                <input type="text" className="form-control input-group-lg" placeholder='Phone Number' required />
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
