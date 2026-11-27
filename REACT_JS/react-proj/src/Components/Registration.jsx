import { useState } from "react";
import "./Registration.css";

function Registration() {
  const [formdata, setformdata] = useState({
    username: "",
    email: "",
    number: "",
  });
  const [members, setMembers] = useState([]);

  function handlechange(e) {
    setformdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  }

  function handlesubmit(e) {
    e.preventDefault();
    setMembers((currentMembers) => [...currentMembers, formdata]);
    setformdata({
      username: "",
      email: "",
      number: "",
    });
  }

  return (
    <main className="registration-page">
      <section className="registration-card">
        <h1>Registration Form</h1>
        <form onSubmit={handlesubmit}>
          <div className="registration-field">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              name="username"
              value={formdata.username}
              onChange={handlechange}
              placeholder="Enter Username"
              required
            />
          </div>

          <div className="registration-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formdata.email}
              onChange={handlechange}
              placeholder="Enter e-mail Id"
              required
            />
          </div>

          <div className="registration-field">
            <label htmlFor="number">Phone Number</label>
            <input
              id="number"
              type="tel"
              name="number"
              value={formdata.number}
              onChange={handlechange}
              placeholder="Enter Phone Number"
              required
            />
          </div>

          <button type="submit">Submit</button>
        </form>

        {members.length > 0 && (
          <section className="registered-members">
            <h2>Registered Members</h2>
            <div className="registered-members-table">
              <table>
                <thead>
                  <tr>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {members.map((member, index) => (
                    <tr key={index}>
                      <td>{member.username}</td>
                      <td>{member.email}</td>
                      <td>{member.number}</td>
                      <td>
                      <div className="member-actions">
                        <button
                          onClick={() => handleEdit(member)}
                          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => handleDelete(member.id)}
                          className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}
      </section>
    </main>
  );
}

export default Registration;