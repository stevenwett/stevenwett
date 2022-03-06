import { useHistory } from 'react-router-dom';

const Experience = () => {
  const history = useHistory();

  return (
    <>
      <header className="main-header">
        <div className="wordmark-wrapper">
          <button
            className="wordmark"
            onClick={() => {
              history.push('/');
            }}
          >
            stevenwett<span>~</span>
          </button>
        </div>
        <nav className="main-nav">
          <h1 className="visually-hidden"></h1>
          <button
            onClick={() => {
              history.push('/about')
            }}
          >About</button>
          <button
            className="current"
            onClick={() => {
              history.push('/experience')
            }}
          >Experience</button>
          <button
            onClick={() => {
              history.push('/contact')
            }}
          >Contact</button>
        </nav>
      </header>
      <div className="page-experience">
        <div className="container">
          <div className="row">
            <h1>Experience</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
