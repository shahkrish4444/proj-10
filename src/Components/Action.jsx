import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style.css'
function Action() {
  const state = useSelector((state) => state.details);
  const dispatch = useDispatch();
  const [newStudent, setNewStudent] = useState({ name: '', email: '' });
  const [editIndex, setEditIndex] = useState(null);

  const handleAdd = () => {
    if (!newStudent.name.trim() || !newStudent.email.trim()) {
      // Check if either name or email is empty or contains only whitespace
      alert('Please Enter The Details which are given below And it is mandatory to ADD Details .');
      return;
    }
  
    if (editIndex !== null) {
      dispatch({
        type: 'updateData',
        payload: { index: editIndex, data: newStudent },
      });
      setNewStudent({ name: '', email: '' });
      setEditIndex(null);
    } else {
      dispatch({
        type: 'addData',
        payload: newStudent,
      });
      setNewStudent({ name: '', email: '' });
    }
  };

  const handleDelete = (id) => {
    dispatch({
      type: 'deleteData',
      payload: id,
    });
  };

  const handleEdit = (index) => {
    setNewStudent({ ...state[index] });
    setEditIndex(index);
  };

  return (
    <div className="container row m-auto d-block bg-light">
      <div className="col-12 row mt-3">
        <div className="mb-3 col-6">
          <label htmlFor="name" className="form-label">
           <h1> Name :</h1>
          </label>
          <input
            type="text"
            placeholder='Please Enter your Name '
            className="form-control "
            id="name"
            value={newStudent.name}
            onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
          required/>
        </div>
        <div className="mb-3 col-6">
          <label htmlFor="email" className="form-label">
            <h1>Email :</h1>
          </label>
          <input
            type="email"
            placeholder='Please Enter Your E-Mail '
            className="form-control"
            id="email"
            value={newStudent.email}
            onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
          required/>
        </div>
        <center>
        <button className="btn btn btn-primary col-1 mt-3" onClick={handleAdd}>
          {editIndex !== null ? 'Update' : 'Add'}
        </button>
        </center>
      </div>
      <center>
      <div className="col-6 mt-3 justify-content-center mt-5">
        <table className="table table-border" border={1} >
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {state &&
              state.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>
                    <button className="btn btn-success" onClick={() => handleDelete(index)}>
                      Remove
                    </button>
                  </td>
                  <td>
                    <button className="btn btn btn-info" onClick={() => handleEdit(index)}>
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      </center>
    </div>
  );
}

export default Action;