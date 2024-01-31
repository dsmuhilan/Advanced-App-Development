import React from 'react';
import CourseCard from '..//pages/Coursecard';
import '..//assets/css/Courses.css';
import ai from '..//assets/images/ai.jpg';
import cys from'..//assets/images/cys.jpg';
import datascience from '..//assets/images/datascience.jpg';
import pro from '..//assets/images/pro.jpg';
import aws from '..//assets/images/aws.jpg';
import ml from '..//assets/images/ml.jpg';
import re from '..//assets/images/react.png';
import bc from '..//assets/images/bc.jpg';


const Courses = () => {

  const coursesData = [
    { title: 'Programming', imageUrl:pro, description: 'Learn python programming , C++ , c , Java' },
    { title: 'Data Science', imageUrl:datascience, description: 'Learn Data Science' },
    { title: 'Cyber Security', imageUrl:cys, description: 'Learn Cyber Security' },
    { title: 'Artificial Intelligence', imageUrl:ai, description: 'Learn Artificial Intelligence' },
    { title: 'AWS Cloud', imageUrl:aws, description: 'Learn Cloud Computing' },
    { title: 'React', imageUrl:re, description: 'Learn React JS' },
    { title: 'Block Chain', imageUrl:bc, description: 'Learn Block Chain' },
    { title: 'Machine Learning', imageUrl:ml, description: 'Learn Machine Learning' },
    

  ];

  return (
    <div>
    <div className="courses-container">
    {coursesData.map((course, index) => (
      <CourseCard key={index} {...course} />
      ))}
      </div>
    </div>
  );
};

export default Courses;