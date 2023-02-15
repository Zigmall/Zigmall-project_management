import { useQuery } from '@apollo/client';
import ClientRow from './ClientRow';
import { GET_CLIENTS } from '../queries/clientsQueries';
import Spinner  from './Spinner';


const Clients = () => {
  const { data, loading, error } = useQuery(GET_CLIENTS);

  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;
  data && console.log(data);
  return (
    <>
      {!loading && !error && (
        <table className="table table-hover mt-3">
          <thead className="bg-primary table-dark">
            <tr className="font-weight-bold">
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {data.clients.map((client) => (
              <ClientRow key={client.id} client={client} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Clients;
