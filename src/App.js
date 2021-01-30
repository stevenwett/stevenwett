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
            <p>This site was created by me, Steven Wett, and showcases all original photos. I'm a front-end developer who is passionate about human-centric design and accessibility. In addition to coding, I also am a photographer, enjoy fermenting things, gardening, and generally being outdoors.</p>
            <div className="contact">
              <p>If you want to get in touch:</p>
              <ul>
                <li><a href="mailto:stevenwett@gmail.com">Email</a></li>
                <li><a href="https://linkedin.com/in/stevenwett/">LinkedIn</a></li>
                <li><a href="https://github.com/stevenwett/">Github</a></li>
              </ul>
            </div>
            <div className="dog-photos row">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
