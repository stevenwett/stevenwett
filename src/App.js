import { BrowserRouter, Switch, Route } from 'react-router-dom';
import moment from 'moment';

// Projects.
import GeminiMemorialDesigner from './routes/projects/GeminiMemorialDesigner';
import GeminiPartnerPortal from './routes/projects/GeminiPartnerPortal';
import RiggsCat from './routes/projects/RiggsCat';
// import NewsOnSpotify from './routes/projects/NewsOnSpotify';

// Pages.
import Home from './routes/Home';
import Work from './routes/Work';
import About from './routes/About';
import NoMatch from './routes/NoMatch';

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
      slug: 'riggs-cat',
      category: 'website',
      year: '2020',
      name: 'Riggs Cat',
      image: '/images/project-riggs-cat.jpg',
      video: '',
    }
    // {
    //   slug: 'news-on-spotify',
    //   category: 'case-study',
    //   year: '2022',
    //   name: 'News on Spotify',
    //   image: '/images/news-on-spotify.jpg',
    //   video: '',
    // }
  ];

  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={(component) => (<Home projects={projects} settings={settings} component={component} />)} />
          <Route exact path='/work/gemini-memorial-designer' component={(component) => (<GeminiMemorialDesigner projects={projects} settings={settings} component={component} />)} />
          <Route exact path='/work/gemini-partner-portal' component={(component) => (<GeminiPartnerPortal projects={projects} settings={settings} component={component} />)} />
          <Route exact path='/work/riggs-cat' component={(component) => (<RiggsCat projects={projects} settings={settings} component={component} />)} />
          {/*<Route exact path='/work/news-on-spotify' component={(component) => (<NewsOnSpotify projects={projects} settings={settings} component={component} />)} />*/}
          <Route exact path='/work' component={(component) => (<Work projects={projects} settings={settings} component={component} />)} />
          <Route exact path='/about' component={(component) => (<About settings={settings} component={component} />)} />
          <Route component={NoMatch}/>
        </Switch>
      </BrowserRouter>
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
