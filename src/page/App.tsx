import { Navigation } from '../components/navigation';
import { TitlePrincipal } from '../components/titlePrincipal';
import './App.css';

export const App = () => {
  return(
    <div className="App">
      <Navigation />
      <section>
        <TitlePrincipal />
        <h2> Front-End Developer </h2>
        <img src='logo' alt='github' />
        <img src='logo' alt='LinkedIn' />
        <img src='logo' alt='Mail' />
        <img src='logo' alt='movil phone' />
      </section>
        <h3>SUMMARY</h3>
        <p>
          With experience in performance web, besides interest by accessibility in web Skills and ex- perience in the management of process with 150 people per year. Interested in test and good development practices.
        </p>
        <h3>SKILLS</h3>
        <strong>Front-End: </strong> <p>Css, Graphql, Html, Javascript, React, Sass, Typescript, Webpack.</p>
        <strong>Misc: </strong> <p>Excel, Git, scrum, Github, Trello, Word.</p>
        <strong>Languages: </strong> <p>CSpanish: Native, English: B2.</p>
        <h3>EXPERIENCE</h3>
        <h4>Front-End Developer</h4>
        <p>
          <strong>Date: </strong> <span>2021 - Present</span>
        </p>
        <p>
          <strong>Company: </strong> <span>Cesar Galindo S. </span>
        </p>
        <p>
          <strong>Position: </strong> <span>Front-End Developer</span>
        </p>
        <p>
          <strong>Description: </strong> <span>
            Performance optimization in loading and interaction times, with an improve- ment of 5% (Css, Git, Graphql, Html, Js, React, Typescript).
          </span>
        </p>
        <h4>Front-End Developer</h4>
        <p>
          <strong>Date: </strong> <span>2020 - 2021</span>
        </p>
        <p>
          <strong>Company: </strong> <span>Cesar Galindo S. </span>
        </p>
        <p>
          <strong>Position: </strong> <span>Front-End Developer</span>
        </p>
        <p>
          <strong>Description: </strong> <span>
            Performance optimization in loading and interaction times, with an improve- ment of 5% (Css, Git, Graphql, Html, Js, React, Typescript).
          </span>
        </p>
        <h3>EDUCATION</h3>
        <h4>Front-End Developer</h4>
        <p>
          <strong>Date: </strong> <span>2020 - 2021</span>
        </p>
        <p>
          <strong>Company: </strong> <span>Cesar Galindo S. </span>
        </p>
           <h4>Front-End Developer</h4>
        <p>
          <strong>Date: </strong> <span>2020 - 2021</span>
        </p>
        <p>
          <strong>Company: </strong> <span>Cesar Galindo S. </span>
        </p>
        <h3>Side Projects</h3>
        <h4>Front-End Developer</h4>
        <p>
          <strong>Date: </strong> <span>2020 - 2021</span>
        </p>
        <p>
          <strong>Company: </strong> <span>Cesar Galindo S. </span>
        </p>
    </div>
  )
};
