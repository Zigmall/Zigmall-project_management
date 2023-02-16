import Clients from '../components/Clients';
import AddClientModel from '../components/AddClientModel';
import Projects from '../components/Projects';

const Home = () => {
  return (
    <>
      <div className="d-flex mb-4 gap-3">
        <AddClientModel />
      </div>
      <Projects />
      <br />
      <Clients />
    </>
  );
};

export default Home;
