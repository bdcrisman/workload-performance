// Home.js

import React, { Component } from "react";
import { Link } from "react-router-dom";

import workloadImg from "../../assets/media/images/workload.png";
import performanceImg from "../../assets/media/images/performance.png";

class Home extends Component {
  render() {
    return (
      <div>
        <Link to="workload">
          <img src={workloadImg} alt="workload" />
        </Link>
        <Link to="performance">
          <img src={performanceImg} alt="performance" />
        </Link>
      </div>
    );
  }
}

export default Home;