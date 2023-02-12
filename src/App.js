import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import moment from 'moment';

// Projects.
import GeminiMemorialDesigner from './routes/projects/GeminiMemorialDesigner';
import GeminiPartnerPortal from './routes/projects/GeminiPartnerPortal';
import NewsOnSpotify from './routes/projects/NewsOnSpotify';
// import RiggsCat from './routes/projects/RiggsCat';
// import GeminiMade from './routes/projects/GeminiMade';

// Articles.
import HumanFactorsMobileBanking from './routes/blog/HumanFactorsMobileBanking';

// Pages.
// import Home from './routes/Home';
import Work from './routes/Work';
import About from './routes/About';
import Blog from './routes/Blog';
import NoMatch from './routes/NoMatch';

// Image.
// import {ReactComponent as SolarSystem} from './images/solar-system.svg';

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
      name: 'Gemini Partner Portal',
      imageWebp: '/images/project-gemini-partner-portal.webp',
      image: '/images/project-gemini-partner-portal.png',
      text: 'Designing a customer portal with realtime information from internal systems.',
    },
    {
      slug: 'news-on-spotify',
      category: 'case-study',
      year: '2022',
      name: 'News On Spotify',
      imageWebp: '/images/project-news-on-spotify.webp',
      image: '/images/project-news-on-spotify.png',
      text: 'User research, prototyping and usability testing a new feature for Spotify.',
    },
    {
      slug: 'gemini-memorial-designer',
      category: 'case-study',
      year: '2021',
      name: 'Gemini Memorial Designer',
      imageWebp: '/images/project-gemini-memorial-designer.webp',
      image: '/images/project-gemini-memorial-designer.webp',
      text: 'Researching and designing a bronze memorial plaque web app.',
    }
  ];

  return (
    <div className="app">
      <picture>
        <img alt="" aria-hidden="true" className="background-stars" src="/images/background-stars.webp" width="1000" />
      </picture>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path='/'
            component={(component) => ( <Redirect to="/work" /> )}
          />
          <Route
            exact
            path='/work'
            component={(component) => (<Work projects={projects} settings={settings} component={component} />)}
          />
          <Route
            exact
            path='/work/gemini-memorial-designer'
            component={(component) => (<GeminiMemorialDesigner projects={projects} settings={settings} component={component} />)}
          />
          <Route
            exact
            path='/work/gemini-partner-portal'
            component={(component) => (<GeminiPartnerPortal projects={projects} settings={settings} component={component} />)}
          />
          <Route
            exact
            path='/work/news-on-spotify'
            component={(component) => (<NewsOnSpotify settings={settings} component={component} />)}
          />
{/*          <Route
            exact
            path='/work/riggscat'
            component={(component) => (<RiggsCat projects={projects} settings={settings} component={component} />)}
          />
          <Route
            exact
            path='/work/geminimade'
            component={(component) => (<GeminiMade projects={projects} settings={settings} component={component} />)}
          />*/}
          <Route
            exact
            path='/about'
            component={(component) => (<About settings={settings} component={component} />)}
          />
          <Route
            exact
            path='/blog'
            component={(component) => (<Blog settings={settings} component={component} />)}
          />
          <Route
            exact
            path='/blog/human-factors-mobile-banking'
            component={(component) => (<HumanFactorsMobileBanking settings={settings} component={component} />)}
          />
          <Route
            from="*"
            component={NoMatch}
          />
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
