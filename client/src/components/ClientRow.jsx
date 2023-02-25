import { FaTrash } from 'react-icons/fa';
import { useMutation } from '@apollo/client';
import { DELETE_CLIENT } from '../mutations/clientMutations';
import { GET_CLIENTS } from '../queries/clientsQueries';
import { GET_PROJECTS } from '../queries/projectQueries';

const ClientRow = ({ client }) => {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: {
      id: client.id
    },
    onCompleted: () => {
      console.log('Client Deleted');
    },
    onError: (error) => {
      console.log(error);
    },
    refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }]
  });

  const handleDelete = () => {
    if (window.confirm('Deleting a client will delete all projects associated with this client. Are you sure you want to delete this client?')) {
      deleteClient();
    }
  };

  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button className="btn btn-danger d-block btn-sm" onClick={handleDelete}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default ClientRow;
