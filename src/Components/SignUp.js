import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [status, setStatus] = useState();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");

  const handleclick = () => {
    let val = {
      username: username,
      password: password,
      password2: password2,
      email: email,
    };
    console.log(val);
    axios
      .post("http://192.168.2.169:8000/account/signup/", val)
      .then((data) => {
        console.log(data, "helooo");
        setStatus(data);
        setStatus("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>    
        <div className="row">
           <div className="bg-img">
          <div className="frm col-6">
            <h3>Contact Us</h3>
            <div>
              <div className="mb-3 row ">
                <label className="col-sm-2 col-form-label">UserName</label>
                <div className="col-sm-5">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Username"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label for="inputPassword" className="col-sm-2 col-form-label">
                  Password
                </label>
                <div className="col-sm-5">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter Passsword"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Password2</label>
                <div className="col-sm-5">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Re-Enter Password"
                    value={password2}
                    onChange={(e) => {
                      setPassword2(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-5">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Email Address"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
              </div>

              <button className="btn btn-primary" onClick={handleclick}>
                Submit
              </button>
            </div>
          </div>
        </div>
        {/* <img src="RegisterImg.png " className="img" alt="RegisterImage" /> */}
      </div>
    </div>
  );
};
export default SignUp;
