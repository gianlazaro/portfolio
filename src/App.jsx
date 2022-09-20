import { useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import styled from "styled-components";
import { MdEmail } from "react-icons/md";
import { BsGithub, BsMailbox2, BsLinkedin } from "react-icons/bs";
function App() {
  return (
    <Wrapper>
      <Header />
      <Card>
        <h2>About</h2>
        <p>
          Hello! 👋 I am a full-stack software engineer looking for opportunities to <em>grow and learn.</em> From my experience in the military, I thrive in a <em>collaborative, fast-paced work environment.</em>
          <br/><br/>Check out my <a href="https://codepen.io/_gianlazaro">Codepen</a> where I experiment on frontend and UI/UX!
          <LinkWrapper>
            <a href="https://github.com/gianlazaro" target="_blank">
              <BsGithub size="1.25em" className="linkIcon"/>
            </a>
            <a href="https://linkedin.com/in/gianlazaro" target="_blank">
              <BsLinkedin size="1.25em" className="linkIcon"/>
            </a>
            <a href="mailto: hello@gianlazaro.com" className="emailWrapper">
              <MdEmail size="1.70em"/>
              <span>hello@gianlazaro.com</span>
            </a>
          </LinkWrapper>
        </p>
      </Card>
      <Card>
        <h2>Projects</h2>
        <ul>
          <li>
            Soulful - a react app
            <div class="project_links">
            <a
              href="https://github.com/ShamWow-FEC/soulful"
              target="_blank"
              className="buttonLike"
            >
              Github
            </a>
            </div>
          </li>
          <li>
            Atelier - a backend service
            <div class="project_links">
            <a
              href="https://github.com/The-Office-SDC/RatingsAndReviews"
              target="_blank"
              className="buttonLike"
            >
              Github
            </a>
            </div>
          </li>
          <li>
            Vegetation Station - a react native app
            <div class="project_links">
              <a
                href="https://github.com/Blue-Ocean-DBZ/vegetationstation"
                target="_blank"
                className="buttonLike"
              >
                Github
              </a>
            </div>
          </li>
        </ul>
      </Card>
      <Card>
        <h2>Side Projects</h2>
        <ul>
          <li>
            Errr - a question and answers platform
            <div class="project_links">
              <a
                href="https://github.com/gianlazaro/errr-mvp"
                target="_blank"
                className="buttonLike"
              >
                Github
              </a>
              &nbsp;
              <a href="https://errr-mvp.vercel.app/" target="_blank" className="buttonLike">
                Live
              </a>
            </div>
          </li>
          <li>
            ACFTCalc - an army fitness calculator
            <div class="project_links">
              <a href="https://github.com/gianlazaro/acftcalc" target="_blank" className="buttonLike">
                Github
              </a>
              &nbsp;
              <a href="https://www.acftcalc.com/" target="_blank" className="buttonLike">
                Live
              </a>
            </div>
          </li>
        </ul>
      </Card>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LinkWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 0.75rem;
  align-items: center;

  & .emailWrapper {
    border: 1px dashed var(--emailBorder);
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0 0.5rem 0 0.25rem;
    color: var(--email);
    font-size: 0.9rem;
    text-decoration: none;

    &:hover {
      color: var(--emailHover);
      background: revert;
      border: 1px dashed var(--emailHover);
      text-decoration: underline;
    }
    &:visited {
      color: var(--emailHover);
    }
  }
  a .linkIcon{
    display: flex;
    align-items: center;
    color: var(--linkWrapperColor);
  }

  a .linkIcon:visited {
    color: #1d1d1d;
  }

  a .linkIcon:hover {
    color: var(--emailHover);
  }
`;
