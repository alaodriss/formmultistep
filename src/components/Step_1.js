import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Traking from "./Traking";



const PI = styled.div`
  .page1 {
    display: flex;
    justify-content: space-evenly;
}
  
  }
  label {
    font-family: system-ui;
    color: royalblue;
    padding: 0.5rem 0;
  }
  .title_header {
    padding: 2rem 0;
  }
  .title {
    font-family: system-ui;
    color: royalblue;
  }
  .sub_title {
    font-family: system-ui;
    color: gray;
  }

  .step_1_1 {
    display: flex;
    flex-direction: column;
    margin: 0.5rem 0;
  }

  input {
    padding: 0.8rem;
    border-radius: 5px;
    border: 1px solid gray;
  }

  .btn {
    background-color: royalblue;
    color: white;
    border: none;
    position: absolute;
    right: 13%;
    top: 81%;
    padding: 1rem 2rem;
  }

  .message {
    position: relative;
    /* top: 63%; */
    color: red;
    font-size: 12px;
    padding: 0.3rem 0;
  }
`;

const Step1 = (props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [data, setData] = useState("");


  const onSubmit = (data) => {
     setData(JSON.stringify(data));
     console.log(data)
  };

  return (
    <PI>
      <div className="page1">
        <div>
          <Traking />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="title_header">
            <h1 className="title">Personal info</h1>
            <p className="sub_title">
              Please provide yout name, address, and phone number .
            </p>
          </div>

          <div className="step_1">
            <div className="step_1_1">
              <label>Name</label>
              <input
                placeholder="Alex.."
                {...register("name", { required: true })}
                // defaultValue={state.name}
                aria-invalid={errors.name ? "true" : "false"}
              />
              {errors.name?.type === "required" && (
                <span className="message">Name is required</span>
              )}
            </div>

            <div className="step_1_1">
              <label>Email Address</label>
              <input
                placeholder="exemple@boit.com"
                {...register("email", {
                  required:true,
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Please enter a valid email",
                  },
                })}
                // defaultValue={state.email}
                type="email"
                className="input"
                aria-invalid={errors.email ? "true" : "false"}

              />
              {errors.email?.type === "required" && (
                <span className="message">Email is required</span>
              )}
            </div>

            <div className="step_1_1">
              <label>Phone Number</label>
              <input
                placeholder="e.g +33 07 12 34 45"
                {...register("phone", {
                  required:true,
                  valueAsNumber: true,
                  pattern: {
                    value: /^(0|[1-9]\d*)(\.\d+)?$/,
                  },
                })}
                // defaultValue={state.phone}
                aria-invalid={errors.phone ? "true" : "false"}

              />
              {errors.phone?.type === "required" && (
                <span className="message">Phone is required</span>
              )}
            </div>
            <input className="btn" type="submit" value="Next Step" />
          </div>
        </form>
      </div>
    </PI>
  );
};

export default Step1;
