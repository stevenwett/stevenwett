import { BrowserRouter, Switch, Route } from 'react-router-dom';
import moment from 'moment';

// Projects.
import GeminiMemorialDesigner from './routes/projects/GeminiMemorialDesigner';
import GeminiPartnerPortal from './routes/projects/GeminiPartnerPortal';
import RiggsCat from './routes/projects/RiggsCat';
import GeminiMade from './routes/projects/GeminiMade';

// Pages.
import Home from './routes/Home';
import Work from './routes/Work';
import About from './routes/About';
import NoMatch from './routes/NoMatch';

// Image.
import {ReactComponent as SolarSystem} from './images/solar-system.svg';

const App = () => {
  const year = moment().year();
  const settings = {
    debug: false,
    slideshow: {
      arrows: true,
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      focusOnSelect: true,
      rows: 1,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }
  }

  const projects = [
    {
      slug: 'gemini-partner-portal',
      category: 'case-study',
      year: '2022',
      name: 'Partner Portal',
      image: '/images/project-gemini-partner-portal.jpg',
      video: '',
    },
    {
      slug: 'gemini-memorial-designer',
      category: 'case-study',
      year: '2021',
      name: 'Memorial Designer',
      image: '/images/memorial-designer-screenshot-3.jpg',
      video: '',
    },
    {
      slug: 'riggscat',
      category: 'website',
      year: '2020',
      name: 'Riggs Cat',
      image: '/images/project-riggs-cat.jpg',
      video: '',
    },
    {
      slug: 'geminimade',
      category: 'website',
      year: '2020',
      name: 'Gemini',
      image: '/images/project-geminimade.jpg',
      video: '',
    }
  ];

  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={(component) => (<Home projects={projects} settings={settings} component={component} />)} />
          <Route exact path='/work/gemini-memorial-designer' component={(component) => (<GeminiMemorialDesigner projects={projects} settings={settings} component={component} />)} />
          <Route exact path='/work/gemini-partner-portal' component={(component) => (<GeminiPartnerPortal projects={projects} settings={settings} component={component} />)} />
          <Route exact path='/work/riggscat' component={(component) => (<RiggsCat projects={projects} settings={settings} component={component} />)} />
          <Route exact path='/work/geminimade' component={(component) => (<GeminiMade projects={projects} settings={settings} component={component} />)} />
          <Route exact path='/work' component={(component) => (<Work projects={projects} settings={settings} component={component} />)} />
          <Route exact path='/about' component={(component) => (<About settings={settings} component={component} />)} />
          <Route component={NoMatch}/>
        </Switch>
      </BrowserRouter>
      {/*<SolarSystem />*/}
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col">
              <p>&copy; {year} Steven Wett</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
