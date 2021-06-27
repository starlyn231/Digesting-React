import React from "react";

function Step3(props) {
  if (props.currentStep !== 3) {
    return null;
  }
  return (
    <>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          className="form-control"
          id="password"
          name="password"
          type="password"
          placeholder="Enter password"
          value={props.password}
          onChange={props.handleChange}
        />
      </div>
      <button className="btn btn-success float-right">Sign up</button>
    </>
  );
}

export default Step3;
