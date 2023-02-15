import { FaTrash } from 'react-icons/fa';
import { useMutation } from '@apollo/client';
import { DELETE_CLIENT } from '../mutation/clientMutation';
import { GET_CLIENTS } from '../queries/clientsQueries';

const ClientRow = ({ client }) => {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: {
      id: client.id
    },
    onCompleted: () => {
        console.log('Client Deleted');
        }
        ,
    onError: (error) => {
        console.log(error);
    },
    refetchQueries: [{ query: GET_CLIENTS }]
  });

  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button className="btn btn-danger d-block btn-sm" onClick={deleteClient}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default ClientRow;
