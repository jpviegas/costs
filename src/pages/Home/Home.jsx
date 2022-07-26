import LinkButton from '../../components/LinkButton/LinkButton';
import './Home.css';

function Home() {
  document.title = 'Costs | Home';

  return (
    <main className="home">
      <section>
        <h1>
          Wellcome to <span>Costs</span>
        </h1>
        <p>Start to manage your projects right now!</p>
        <LinkButton to="/newproject" text="Create new project" />
      </section>
    </main>
  );
}

export default Home;
