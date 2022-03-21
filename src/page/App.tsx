import { MediaLink } from '../components/mediaLink';
import { Navigation } from '../components/navigation';
import { H1 } from '../components/H1';
import { H2 } from '../components/H2';
import { H3 } from '../components/H3';
import { P } from '../components/P';
import { Strong } from '../components/Strong';
import { Section } from '../components/Section';
import './App.css';

export const App = () => {
  return (
    <div className="App">
      <div className="menu">
        <Navigation />
      </div>
      <div className="main">
        <Section>
          <H1 />
          <H2 />
          <MediaLink />
        </Section>
        <Section>
          <H3> Summary </H3>
          <P>
            With experience in performance web, besides interest by accessibility in web Skills and
            experience in the management of process with 150 people per year. Interested in test and
            good development practices.
          </P>
        </Section>
        <Section>
          <H3> Skills </H3>
          <Strong>Front-End: </Strong>
          <P>Css, Graphql, Html, Javascript, React, Sass, Typescript, Webpack.</P>
          <Strong>Misc: </Strong> <P>Excel, Git, scrum, Github, Trello, Word.</P>
          <Strong>Languages: </Strong> <P>Spanish: Native, English: B2.</P>
        </Section>
        <Section>
          <H3> Experiences </H3>
          <h4>Front-End Developer</h4>
          <P>
            <Strong>Date: </Strong> <span>2021 - Present</span>
          </P>
          <P>
            <Strong>Company: </Strong> <span>Cesar Galindo S. </span>
          </P>
          <P>
            <Strong>Position: </Strong> <span>Front-End Developer</span>
          </P>
          <P>
            <Strong>Description: </Strong>{' '}
            <span>
              Performance optimization in loading and interaction times, with an improve- ment of 5%
              (Css, Git, Graphql, Html, Js, React, Typescript).
            </span>
          </P>
          <h4>Front-End Developer</h4>
          <P>
            <Strong>Date: </Strong> <span>2020 - 2021</span>
          </P>
          <P>
            <Strong>Company: </Strong> <span>Cesar Galindo S. </span>
          </P>
          <P>
            <Strong>Position: </Strong> <span>Front-End Developer</span>
          </P>
          <P>
            <Strong>Description: </Strong>{' '}
            <span>
              Performance optimization in loading and interaction times, with an improve- ment of 5%
              (Css, Git, Graphql, Html, Js, React, Typescript).
            </span>
          </P>
        </Section>
        <Section>
          <H3> Education </H3>
          <h4>Front-End Developer</h4>
          <P>
            <Strong>Date: </Strong> <span>2020 - 2021</span>
          </P>
          <P>
            <Strong>Company: </Strong> <span>Cesar Galindo S. </span>
          </P>
          <h4>Front-End Developer</h4>
          <P>
            <Strong>Date: </Strong> <span>2020 - 2021</span>
          </P>
          <P>
            <Strong>Company: </Strong> <span>Cesar Galindo S. </span>
          </P>
        </Section>
        <Section>
          <H3> Side Projects </H3>
          <h4>Front-End Developer</h4>
          <P>
            <Strong>Date: </Strong> <span>2020 - 2021</span>
          </P>
          <P>
            <Strong>Company: </Strong> <span>Cesar Galindo S. </span>
          </P>
        </Section>
      </div>
    </div>
  );
};
