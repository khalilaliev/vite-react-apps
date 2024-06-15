import { useState } from "react";
import { IoMdAdd } from "react-icons/io";

const NewContact = ({ addContact }) => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(user);
    setUser({
      name: "",
      username: "",
      phone: "",
    });
    document.getElementById("modal-1").checked = false;
  };

  return (
    <div className="flex justify-center">
      <label className="btn flex gap-2" htmlFor="modal-1">
        Add user <IoMdAdd className="text-xl" />
      </label>
      <input className="modal-state" id="modal-1" type="checkbox" />
      <div className="modal">
        <label className="modal-overlay" htmlFor="modal-1"></label>
        <div className="modal-content flex flex-col gap-5">
          <h2 className="text-2xl text-center">Add new user!</h2>

          <form
            onSubmit={handleSubmit}
            className="contents flex-col items-center gap-3"
          >
            <label>
              Name:
              <input
                className="input"
                name="name"
                placeholder="Fill the name"
                required
                value={user.name}
                onChange={handleChange}
              />
            </label>
            <label>
              Username:
              <input
                className="input"
                name="username"
                placeholder="Fill the username"
                required
                value={user.username}
                onChange={handleChange}
              />
            </label>
            <label>
              Phone:
              <input
                className="input"
                name="phone"
                placeholder="Fill the phone"
                required
                value={user.phone}
                onChange={handleChange}
              />
            </label>
            <div className="flex gap-3">
              <button type="submit" className="btn btn-block">
                Save
              </button>

              <button
                type="button"
                className="btn btn-block"
                onClick={() => {
                  document.getElementById("modal-1").checked = false;
                  setUser({
                    name: "",
                    username: "",
                    phone: "",
                  });
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewContact;
