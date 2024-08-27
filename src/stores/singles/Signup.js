import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';


function FormDemo2() {
  const [users, setUsers] = useState([]);

  const { register, handleSubmit, formState: { errors } } = useForm();

  function handleFormSubmit(userObj) {
    setUsers([...users, userObj]); // Correctly update users array
  }

   function deleteuser(index){
    let copyusers=[...users];
    copyusers.splice(index,1);
    setUsers(copyusers);
   }
  return (
    <div className="row" id="page">
      <div className="col-sm-4" id="form">
        <h1 className="text-center text-primary">SignUp / Login</h1>
        <form className="w-100 mx-auto mt-5" onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="mb-3 row align-items-center">
            <label htmlFor="username" className="col-sm-4 col-form-label">Username</label>
            <div className="col-sm-8">
              <input
                type="text"
                placeholder="Enter.."
                id="username"
                className="form-control"
                {...register('username', { required: true, minLength: 8 })}
              />
              {errors.username?.type === 'required' && <p className="text-danger">Username is required</p>}
              {errors.username?.type === 'minLength' && <p className="text-danger">Username must be at least 8 characters</p>}
            </div>
          </div>
          <div className="mb-3 row align-items-center">
            <label htmlFor="email" className="col-sm-4 col-form-label">Email</label>
            <div className="col-sm-8">
              <input
                type="email"
                placeholder="Enter.."
                id="email"
                className="form-control"
                {...register('email', { required: true })}
              />
              {errors.email && <p className="text-danger">Email is required</p>}
            </div>
          </div>
          <div className="mb-3 row align-items-center">
            <label htmlFor="state" className="col-sm-4 col-form-label">Select State</label>
            <div className="col-sm-8">
              <select
                id="state"
                defaultValue=""
                className="form-select"
                {...register('state', { required: true })}
              >
                <option value="" disabled>Choose a state</option>
                <option value="telangana">Telangana</option>
                <option value="ap">Andhra Pradesh</option>
                <option value="mp">Madhya pradesh</option>
                <option value="bihar">Bihar</option>
                <option value="up">Uttar Pradesh</option>
                <option value="kar">Karnataka</option>
                <option value="tn">Tamil Nadu</option>
                <option value="kerala">Kerala</option>
                <option value="odisha">Odisha</option>
                <option value="mg">Delhi</option>
              </select>
              {errors.state?.type === 'required' && <p className="text-danger">Select a state</p>}
            </div>
          </div>
          <Link to="/" >
          
          <button className="btn btn-success" id="btn">Login</button>
          
        </Link>
          
        </form>
      </div>
          
    </div>
  );
}

export default FormDemo2;