import React, { useState } from "react";
import "../styles/tableBooking.css";

const Tablebooking = () => {
  const [date, setDate] = useState();
  const [slot, setSlot] = useState();
  const handleEvent = (e) => {
    e.preventDefault();
    setSlot(e.target.innerHTML);
  };
  return (
    <div>
      <input
        type={"date"}
        onChange={(e) => {
          setDate(e.target.value);
        }}
      />
      <br />
      <br />
      {!date ? (
        <div>
          {/* <button className="btn btn-primary m-2" disabled>
            11.00AM - 12.45PM
          </button>
          <button className="btn btn-primary m-2" disabled>
            01.00PM - 03.00PM
          </button>
          <button className="btn btn-primary m-2" disabled>
            7.30PM - 8.45PM
          </button>
          <button className="btn btn-primary m-2" disabled>
            09.00PM - 10.45
          </button> */}
        </div>
      ) : (
        <div>
          <button
            className="btn btn-primary m-2"
            onClick={(e) => {
              handleEvent(e);
            }}
          >
            11.00AM - 12.45PM
          </button>
          <button className="btn btn-primary m-2">01.00PM - 03.00PM</button>
          <button className="btn btn-primary m-2">7.30PM - 8.45PM</button>
          <button className="btn btn-primary m-2">09.00PM - 10.45PM</button>
        </div>
      )}

      <br></br>
      <br></br>
      {date && slot ? (
        <div className="container">
          {/* row one */}
          <div className="row text-center mb-4">
            <div className="col-lg-2 col-md-3 col-sm-12">
              <div className="d-flex justify-content-center">
                <div className="chair"></div>
              </div>
              <div className="d-flex justify-content-center">
                <div className="dining_table1">1A</div>
              </div>
              <div className="d-flex justify-content-center">
                <div className="chair"></div>
              </div>
            </div>

            <div className="col-lg-2  col-md-3 col-sm-12">
              <div className="">
                <div className="d-flex justify-content-center">
                  <div className="chair"></div>
                  <div className="chair"></div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="dining_table2">1B</div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="chair"></div>
                  <div className="chair"></div>
                </div>
              </div>
            </div>

            <div className="col-lg-2  col-md-5 col-sm-12">
              <div className="">
                <div className="d-flex justify-content-center">
                  <div className="chair"></div>
                  <div className="chair"></div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="dining_table2">1C</div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="chair"></div>
                  <div className="chair"></div>
                </div>
              </div>
            </div>

            <div className="col-lg-2  col-md-3 col-sm-12">
              <div className="">
                <div className="d-flex justify-content-center">
                  <div className="chair"></div>
                  <div className="chair"></div>
                  <div className="chair"></div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="dining_table3">1D</div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="chair"></div>
                  <div className="chair"></div>
                  <div className="chair"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-3 col-sm-12">
              <div className="">
                <div className="d-flex justify-content-center">
                  <div className="chair"></div>
                  <div className="chair"></div>
                  <div className="chair"></div>
                  <div className="chair"></div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="chair"></div>
                  <div className="dining_table4">1E</div>
                  <div className="chair"></div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="chair"></div>
                  <div className="chair"></div>
                  <div className="chair"></div>
                  <div className="chair"></div>
                </div>
              </div>
            </div>
          </div>

          {/* row two */}
          <div className="row text-center mb-4">
            <div className="col-lg-2 col-md-3 col-sm-12">
              <div className="d-flex justify-content-center">
                <div className="chair"></div>
              </div>
              <div className="d-flex justify-content-center">
                <div className="dining_table1">2A</div>
              </div>
              <div className="d-flex justify-content-center">
                <div className="chair"></div>
              </div>
            </div>

            <div className="col-lg-2  col-md-3 col-sm-12">
              <div className="">
                <div className="d-flex justify-content-center">
                  <div className="chair"></div>
                  <div className="chair"></div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="dining_table2">2B</div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="chair"></div>
                  <div className="chair"></div>
                </div>
              </div>
            </div>

            <div className="col-lg-2  col-md-3 col-sm-12">
              <div className="">
                <div className="d-flex justify-content-center">
                  <div className="chair"></div>
                  <div className="chair"></div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="dining_table2">2C</div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="chair"></div>
                  <div className="chair"></div>
                </div>
              </div>
            </div>

            <div className="col-lg-2  col-md-3 col-sm-12">
              <div className="">
                <div className="d-flex justify-content-center">
                  <div className="chair"></div>
                  <div className="chair"></div>
                  <div className="chair"></div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="dining_table3">2D</div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="chair"></div>
                  <div className="chair"></div>
                  <div className="chair"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-2  col-md-3 col-sm-12">
              <div className="">
                <div className="d-flex justify-content-center">
                  <div className="chair"></div>
                  <div className="chair"></div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="dining_table2">2E</div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="chair"></div>
                  <div className="chair"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-2  col-md-3 col-sm-12">
              <div className="">
                <div className="d-flex justify-content-center">
                  <div className="chair"></div>
                  <div className="chair"></div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="dining_table2">2F</div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="chair"></div>
                  <div className="chair"></div>
                </div>
              </div>
            </div>
          </div>
          {/* row three */}
          <div className="row text-center mb-4">
            <div className="col-lg-2 col-md-3 col-sm-12">
              <div className="d-flex justify-content-center">
                <div className="chair"></div>
              </div>
              <div className="d-flex justify-content-center">
                <div className="dining_table1">3A</div>
              </div>
              <div className="d-flex justify-content-center">
                <div className="chair"></div>
              </div>
            </div>

            <div className="col-lg-2  col-md-3 col-sm-12">
              <div className="">
                <div className="d-flex justify-content-center">
                  <div className="chair"></div>
                  <div className="chair"></div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="dining_table2">3B</div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="chair"></div>
                  <div className="chair"></div>
                </div>
              </div>
            </div>

            <div className="col-lg-2  col-md-3 col-sm-12">
              <div className="">
                <div className="d-flex justify-content-center">
                  <div className="chair"></div>
                  <div className="chair"></div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="dining_table2">3C</div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="chair"></div>
                  <div className="chair"></div>
                </div>
              </div>
            </div>

            <div className="col-lg-2  col-md-3 col-sm-12">
              <div className="">
                <div className="d-flex justify-content-center">
                  <div className="chair"></div>
                  <div className="chair"></div>
                  <div className="chair"></div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="dining_table3">3D</div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="chair"></div>
                  <div className="chair"></div>
                  <div className="chair"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-3 col-sm-12">
              <div className="">
                <div className="d-flex justify-content-center">
                  <div className="chair"></div>
                  <div className="chair"></div>
                  <div className="chair"></div>
                  <div className="chair"></div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="chair"></div>
                  <div className="dining_table4">3E</div>
                  <div className="chair"></div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="chair"></div>
                  <div className="chair"></div>
                  <div className="chair"></div>
                  <div className="chair"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Tablebooking;
