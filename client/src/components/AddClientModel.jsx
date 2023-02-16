import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { useMutation } from '@apollo/client';
import { ADD_CLIENT } from '../mutation/clientMutation';
import { GET_CLIENTS } from '../queries/clientsQueries';

const AddClientModel = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || phone === '') {
      return alert('Please fill all fields'); 
    }
    addClient();
  };

  const [addClient] = useMutation(ADD_CLIENT, {
    variables: {
      name,
      email,
      phone
    },
    onCompleted: () => {
      setName('');
      setEmail('');
      setPhone('');
    },

    onError: (err) => console.log(err),
    refetchQueries: [{ query: GET_CLIENTS }]
  });

  return (
    <>
      <button
        type="button"
        className="btn btn-secondary"
        data-bs-toggle="modal"
        data-bs-target="#addClientModel">
        <div className="d-flex align-items-center">
          <FaUser className="icon" />
          <div>Add Client</div>
        </div>
      </button>

      <div
        className="modal fade"
        id="addClientModel"
        aria-labelledby="addClientModelLabel"
        aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="addClientModelLabel">
                Add Client
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    id="name"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    id="name"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-control"
                    id="name"
                  />
                </div>

                <button type="submit" data-bs-dismiss="modal" className="btn btn-secondary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddClientModel;
