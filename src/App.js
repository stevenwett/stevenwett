import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import moment from 'moment';

// Projects.
import GeminiMemorialDesigner from './routes/projects/GeminiMemorialDesigner';
import GeminiPartnerPortal from './routes/projects/GeminiPartnerPortal';
import NewsOnSpotify from './routes/projects/NewsOnSpotify';
import HikeNSeek from './routes/projects/HikeNSeek';
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
      slug: 'hike-n-seek',
      category: 'case-study',
      year: '2023',
      name: 'Field Guide Hiking App',
      imageWebp: '/images/project-hike-n-seek.webp',
      image: '/images/project-hike-n-seek.png',
      text: 'A class project where I teamed up with three other UX designers to design an exploration and hiking app.',
    },
    {
      slug: 'gemini-partner-portal',
      category: 'case-study',
      year: '2022',
      name: 'Gemini Partner Portal',
      imageWebp: '/images/project-gemini-partner-portal.webp',
      image: '/images/project-gemini-partner-portal.png',
      text: 'A customer portal for a manufacturing client where we provided realtime order data to customers for the first time.',
    },
    {
      slug: 'news-on-spotify',
      category: 'case-study',
      year: '2022',
      name: 'News On Spotify',
      imageWebp: '/images/project-news-on-spotify.webp',
      image: '/images/project-news-on-spotify.png',
      text: 'A class project where I designed and tested a news feature for Spotify.',
    },
    {
      slug: 'gemini-memorial-designer',
      category: 'case-study',
      year: '2021',
      name: 'Gemini Memorial Designer',
      imageWebp: '/images/project-gemini-memorial-designer.webp',
      image: '/images/project-gemini-memorial-designer.webp',
      text: 'A design tool for a manufacturing client for their customers to design and order bronze memorial plaques on their own.',
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
          <Route
            exact
            path='/work/hike-n-seek'
            component={(component) => (<HikeNSeek settings={settings} component={component} />)}
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
