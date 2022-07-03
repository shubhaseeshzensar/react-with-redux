import React from "react";

const CourseList = ({ courses }) => {
  return (
    <table className="table table-horizontal mt-4">
      <thead className="table-success">
        <tr>
          <th scope="col">Course Title</th>
          <th scope="col">Author ID</th>
          <th scope="col">Category</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((course) => {
          return (
            <tr key={course.id + 1}>
              <th scope="row">{course.title}</th>
              <td>{course.authorId}</td>
              <td>{course.category}</td>
              <td>
                <button className="btn btn-block">Edit</button>
              </td>
              <td>
                <button className="btn btn-block">Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CourseList;
