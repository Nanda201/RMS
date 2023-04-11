import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function OrderFood() {
    const [phonenumber, setPhoneNumber] = useState();
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState([]);
    const navigate = useNavigate()


    return (
        <div className='container-fluid'>
            <div className='row '>
                <div className='col-md-8 p-0'>

                    <img src="OrdImg.png" alt="Responsive Image" style={{ height: "92.6vh", width: "100%" }} />

                    {/* <div className='ratio ratio-4x3'>
                        <img src="OrdImg.png"  alt="Responsive Image"  />
                    </div> */}
                </div>
                <div className='col-md-3 mx-auto my-auto'>

                    <span className="mb-3 fs-1 fw-bold mx-4">Order your food!</span>
                    <br /><br />
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
                                <button type="submit" className="btn btn-lg btn-block" style={{ width: '-webkit-fill-available', backgroundColor: 'black', color: 'white' }}  >Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default OrderFood