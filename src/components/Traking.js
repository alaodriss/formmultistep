import React from "react";
import styled from "styled-components";
import bgTrk from "../assets/images/bg-sidebar-desktop.svg";

const TrK = styled.div`
  position: relative;
  .steps {
    position: absolute;
    top: 3%;
    left: 9%;
  }
  .step1 {
    display: flex;
    margin: 1.4rem 0px;
  }

  .icon {
    position: relative;
    margin: 0 0.9rem;
    background-color: aqua;
    color: white;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    .num {
      position: absolute;
      left: 33%;
      top: 17%;
      font-family: system-ui;
      color: royalblue;
    }
  }

  .text {
    span {
      color: #80808085;
      font-size: 0.8rem;
      font-family: system-ui;
    }
    p {
      color: white;
      font-weight: 600;
      font-family: system-ui;
      line-height: 0.1;
      text-transform: uppercase;
      padding: 10px 0;
    }
  }
`;
const Traking = () => {
  return (
    <TrK>
      <div className="traking">
        <img src={bgTrk} alt="bg" />
        <div className="steps">
          <div className="step1">
            <div className="icon">
              <p className="num">1</p>
            </div>
            <div className="text">
              <span>STEP 1</span>
              <p>Your Info</p>
            </div>
          </div>
          <div className="step1">
            <div className="icon">
              <p className="num">2</p>
            </div>
            <div className="text">
              <span>STEP 2</span>
              <p>Select plan</p>
            </div>
          </div>
          <div className="step1">
            <div className="icon">
              <p className="num">3</p>
            </div>
            <div className="text">
              <span>STEP 3</span>
              <p>Add-ons</p>
            </div>
          </div>
          <div className="step1">
            <div className="icon">
              <p className="num">4</p>
            </div>
            <div className="text">
              <span>STEP 4</span>
              <p>Summary</p>
            </div>
          </div>
        </div>
      </div>
    </TrK>
  );
};

export default Traking;
