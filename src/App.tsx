import { FC } from 'react';

const JSXRules = ({ text }) => {
  return (
    <blockquote>
      {text}
    </blockquote>
  );
};
const Multiple = ({name, number}) => {
  const listItems = [];
  for (let i = 1; i <= number; i++) {
    listItems.push(<li key={i}>{i}</li>);
  }

  return (
    <>
      <h2>{name}</h2>
      <ul>
        {listItems}
      </ul>
    </>
  );
};

import './style.css';

const FancyTable = ({ n }) => {
  const listItems = [];
  for (let i = 1; i <= n; i++) {
    listItems.push(<li key={i}>{i}</li>);
  }

  return (
    <div>
      <h2>Fancy Table:</h2>
      <ul>
        {listItems}
      </ul>
    </div>
  );
};

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      {/* Użycie komponenty JSXRules */}
      <JSXRules text="TEXTandTEXT in blockquote" />

      {/* Użycie komponenty FancyTable */}
      <FancyTable n={13} />

      {/* Użycie komponenty Multiple */}
      <Multiple name="Multiple:" number={6} />
    </div>
  );
};