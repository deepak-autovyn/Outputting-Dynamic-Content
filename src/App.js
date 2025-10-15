import React from 'react';
import User from './user/user.jsx'
import './App.css'; 
import Corsor from './component/task 2/cursor.jsx';
import Task2 from './component/task 2/task2.jsx'

const Task2 = () => {
  // const userData = {
  //   firstName: "Maximilian",
  //   lastName: "Schwarzmüller",
  //   title: "INSTRUCTOR"
  // };

  // return (
  //   <div className="app-container">
  //     <h1 className="app-title">TIME TO PRACTICE</h1>
  //     <p className="app-subtitle">
  //       Welcome on board of this course! You got this 
  //     </p>
  //     <User userData={userData} />
  //   </div>
  // );

    return (
    <div className="app">
      <h1>TIME TO PRACTICE</h1>
      <p>One course, many goals! </p>

      

      

      <Corsor title="Learn React" description="In-depth" />
      <Corsor title="Practice" description="Practice working with React, components etc" />
    </div>
  );
}


export default Task2;
  


  






