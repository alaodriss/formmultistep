import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Traking from "./Traking";

const PI = styled.div`
    .page1 {
      display: flex;
      -webkit-box-pack: justify;
      justify-content: space-between;
      background-color: rgb(255, 255, 255);
      margin: 5rem 18rem;
      padding: 10px;
      border-radius: 10px;
      box-shadow: rgb(0, 0, 0) 0px 10px 13px -7px;
    }


    .formulaire-1{
      position: relative;
      right: 7%;
    }
    
    }
    label {
      font-family: system-ui;
      color: royalblue;
      padding: 0.5rem 0;
      font-size: 1rem;
      font-weight: 600;
    }
    .title_header {
      padding: 2rem 0;
    }
    .title {
      font-family: system-ui;
      color: royalblue;
      font-size: 2.5rem;
      font-weight: 700;
      padding: 10px 0;
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
      right: 0%;
      bottom: 0;
      padding: 1rem 2rem;
    }

    .message {
      position: relative;
      color: red;
      font-size: 12px;
      padding: 0.3rem 0;
    }
  `;

const Step1 = ({ nextStep }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [data, setData] = useState("");

  // const onSubmit = (data) => {

  // };
  //  handleSubmit = (e, data) => {
  //   e.preventDefault();
  //     setData(JSON.stringify(data));
  //     console.log(data);

  // };

  return (
    <PI>
      <div className="page1">
        <div className="track">
          <Traking />
        </div>
        <div className="formulaire-1">
          <form onSubmit={handleSubmit(() => nextStep())}>
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
                    required: true,
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
                    required: true,
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
              {/* <input className="btn" type="submit" value="Next Step" /> */}
              <button className="btn" type="submit">
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </PI>
  );
};

export default Step1;
