import { useState } from 'react';
import { FaList } from 'react-icons/fa';
import { useMutation, useQuery } from '@apollo/client';
import { GET_PROJECTS } from '../queries/projectQueries';
import { GET_CLIENTS } from '../queries/clientsQueries';

const AddClientModel = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [clientId, setClientId] = useState('');
  const [status, setStatus] = useState('new');

  const { data: clientsData, loading: clientsLoading, error: clientsError } = useQuery(GET_CLIENTS);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || description === '' || status === '') {
      return alert('Please fill all fields');
    }
    // addClient();
    setName('');
    setDescription('');
    setClientId('');
    setStatus('new ');
  };

  if (clientsLoading) return null;
  if (clientsError) return <p>Something went wrong</p>;

  return (
    <>
      {!clientsLoading && !clientsError && clientsData && (
        <>
          <button
            type="button"
            className="btn btn-primary mt-3"
            data-bs-toggle="modal"
            data-bs-target="#addProjectModel">
            <div className="d-flex align-items-center">
              <FaList className="icon" />
              <div>New Project</div>
            </div>
          </button>

          <div
            className="modal fade"
            id="addProjectModel"
            aria-labelledby="addProjectModelLabel"
            aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="addProjectModelLabel">
                    New Project
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
                      <label className="form-label">Description </label>
                      <textarea
                        id="description"
                        className="form-control"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Status</label>
                      <select
                        className="form-select"
                        id="status "
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}>
                        <option value="new">New</option>
                        <option value=" progress">In Progress</option>
                        <option value="completed">Completed</option>
                      </select>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Client</label>
                        <select
                            className="form-select"
                            id="clientId"
                            value={clientId}
                            onChange={(e) => setClientId(e.target.value)}>
                            <option value="">Select Client</option>
                            {clientsData.clients.map((client) => (
                                <option key={client.id} value={client.id}>
                                    {client.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button type="submit" data-bs-dismiss="modal" className="btn btn-primary ">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AddClientModel;
