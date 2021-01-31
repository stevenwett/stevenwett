function App() {
  return (
    <div className="page-home">
      <div className="page-background">
        <picture>
          <source srcSet="/images/mcafees-knob-864x576.jpg" media="(max-height: 576px)"/>
          <source srcSet="/images/mcafees-knob-1152x768.jpg" media="(max-height: 768px)"/>
          <source srcSet="/images/mcafees-knob-1380x992.jpg" media="(max-height: 992px)"/>
          <source srcSet="/images/mcafees-knob-1800x1200.jpg" media="(max-height: 1200px)"/>
          <img src="/images/mcafees-knob-3000x2000.jpg" alt="Appalacian mountains at sunrise" />
        </picture>
      </div>
      <div className="container">
        <div className="row">
          <div className="page-content col-sm-12 col-md-10 col-lg-8">
            <h1>Steven Wett</h1>
            <p className="h2">Front-end Web Developer</p>
            <p>This site was created by me, Steven Wett, and showcases all original photos. I'm a front-end developer who is passionate about human-centric design and accessibility. In addition to coding, I also enjoy taking photos, gardening, fermenting things, my dog, and generally being outdoors.</p>
            <ul className="contact">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" height="25" width="25">
                  <path fill="#2b2a2a" d="M7.65,13.68.87,19.94H24.13l-6.78-6.26-4.51,3.17a.57.57,0,0,1-.68,0ZM25,8.29,18.33,13,25,19.13Zm-25,0V19.13L6.67,13ZM.3,5.06a.29.29,0,0,0-.3.3V6.83l12.5,8.8L25,6.83V5.36a.29.29,0,0,0-.3-.3Z"/>
                </svg>
                <a href="mailto:stevenwett@gmail.com">stevenwett@gmail.com</a>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" height="25" width="25">
                  <path fill="#2b2a2a" d="M21.21,1.1H3.41A2.5,2.5,0,0,0,.91,3.59v17.8a2.5,2.5,0,0,0,2.5,2.5h17.8a2.5,2.5,0,0,0,2.49-2.5V3.59A2.5,2.5,0,0,0,21.21,1.1Zm-15,4A1.66,1.66,0,1,1,4.55,6.72,1.65,1.65,0,0,1,6.2,5.06ZM7.86,20.32H4.54V9.7H7.86Zm12.6,0H17.15V14.75c0-3.36-4-3.1-4,0v5.57H9.86V9.7h3.29v1.43c1.39-2.57,7.31-2.76,7.31,2.47Z"/>
                </svg>
                <a href="https://linkedin.com/in/stevenwett/">linkedin.com/in/stevenwett</a>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" height="25" width="25">
                  <path fill="#2b2a2a" fillRule="evenodd" d="M12.5,1.28a11.44,11.44,0,0,0-3.62,22.3c.58.1.78-.25.78-.56s0-1,0-1.94c-3.18.69-3.86-1.54-3.86-1.54a3,3,0,0,0-1.27-1.67c-1-.71.08-.7.08-.7a2.45,2.45,0,0,1,1.76,1.18,2.43,2.43,0,0,0,3.33.95,2.42,2.42,0,0,1,.72-1.53C7.87,17.49,5.2,16.5,5.2,12.12A4.43,4.43,0,0,1,6.38,9.05a4.11,4.11,0,0,1,.11-3s1-.31,3.15,1.17a10.9,10.9,0,0,1,2.86-.38,11,11,0,0,1,2.87.38C17.55,5.71,18.51,6,18.51,6a4.11,4.11,0,0,1,.11,3,4.39,4.39,0,0,1,1.18,3.07c0,4.4-2.68,5.36-5.23,5.65a2.68,2.68,0,0,1,.78,2.11c0,1.53,0,2.77,0,3.14s.2.67.78.55A11.44,11.44,0,0,0,12.5,1.28Z"/>
                </svg>
                <a href="https://github.com/stevenwett/">github.com/stevenwett</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
