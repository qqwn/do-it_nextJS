import React from "react";
import Classes from './class';
import PageTop from './pageTop';
const Course = async () => { // 비동기 함수로 변경시켜줌
  const response = await fetch("http://localhost:9999/courses", {
    cache: "no-cache"
  });
  const courses = await response.json();
  return (
    <div style = {{flex : 1, position : 'relative'}}>
      <PageTop
      />
      <div>
        {courses.map((course)=>(
          <Classes
            name={course.name}
            code={course.code}
            courseId={course.courseId}
            professorName={course.professorName}
          />
        ))}
      </div>
    </div>
      
  );  
};
export default Course;