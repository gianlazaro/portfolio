import styled from "styled-components";

function Card({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default Card;

const Wrapper = styled.section`
  width: min(100%, 65ch);
  display: flex;
  flex-direction: column;

  & h2 {
    margin: 0.75rem 0;
    color: var(--headerSectionColor);

    @media (max-width: 500px) {
      margin-left: 1rem;
    }
  }

  & em {
    font-weight: 600;
    color: var(--emColor);
  }

  & ul {
    list-style-type: none;
    padding: 0 0 0 0.25rem;
    max-width: 100%;
  }

  & li {
    border-bottom: 1px dashed var(--miscBorderColor);
    padding: 0.75rem 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    @media(max-width: 500px) {
      flex-direction: column;
      align-items: flex-start;
      padding: 1rem 0.5rem;
    }
  }

  & li:hover {
    background: var(--listHover);
    @media(hover: none) {
      background: none;
    }
  }

  & a.buttonLike {
    color: white;
    background: var(--linkColor);
    padding: 0.25rem 0.5rem;
    border-radius: 6px;
    text-decoration: none;
    font-size: 0.85rem;

    @media(max-width: 500px) {
      padding: 0.75rem 1rem;
    }
  }

  & a.buttonLike:hover {
    color: #eee;
    background: var(--linkHoverColor);
  }

  p {
    width: 100%;
    background: #fff;
    background: var(--blockHighlight);
    padding: 1.5rem 1rem;
    border-radius: 6px;
    line-height: 1.5rem;
  }

  .project_links {
    display: flex;
    gap: 0.1rem;
    margin: 0.2rem 0;
  }

  @media (max-width: 500px) {
    .project_links {
      width: 100%;
      justify-content: flex-end;
    }
  }
`;
