import Clients from '../components/Clients';
import AddClientModel from '../components/AddClientModel';
import Projects from '../components/Projects';
import AddProjectModal from '../components/AddProjectModal';

const Home = () => {
  return (
    <>
      <div className="d-flex mb-4 gap-3">
        <AddClientModel />
        <AddProjectModal />
      </div>
      <Projects />
      <br />
      <Clients />
    </>
  );
};

export default Home;
