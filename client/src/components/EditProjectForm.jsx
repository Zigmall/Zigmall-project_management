import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_PROJECT } from '../mutations/projectMutations';
import { GET_PROJECTS } from '../queries/projectQueries';

const EditProjectForm = ({ project }) => {
  const [name, setName] = useState(project.name);
  const [description, setDescription] = useState(project.description);
  const [status, setStatus] = useState('');

  const [updateProject] = useMutation(UPDATE_PROJECT, {
    variables: {
      id: project.id,
      name,
      description,
      status
    },
    refetchQueries: [{ query: GET_PROJECTS }]
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name || !description || !status) {
      console.log('name', name);
      console.log('description', description);
      console.log('status', status);
      return alert('Please fill in all fields');
    }
    updateProject();
  };

  return (
    <div className="mt-5">
      <h5 className="mt-3">Edit project details</h5>
      <form onSubmit={onSubmit}>
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
            <option value="">Select status</option>
            <option value="new">New</option>
            <option value="progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditProjectForm;
