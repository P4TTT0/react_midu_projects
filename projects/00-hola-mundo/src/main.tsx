import React  from 'react';
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(
    document.getElementById('root')!
  );
//Formas de tipar propiedaes en funciones.

//1) Tipado con props.
const EspecialButton = (props: {label: string}) =>
{
  return(
    <button>{props.label}</button>
  );
}

//2) Tipado inline.
const EspecialButton2 = ({label}: {label: string}) =>
{
  return(
    <button>{label}</button>
  );
}

//3) Tipado con interface.
interface EspecialButtonProps
{
  label: string;
  OnClick: () => void;
}

const EspecialButton3 = ({label, OnClick}: EspecialButtonProps) =>
  {
    return(
      <button onClick={OnClick}>{label}</button>
    );
  }

root.render(
  <React.Fragment>
    <EspecialButton label='Button 1' />
    <EspecialButton label='Button 2'/>
    <EspecialButton3 label='Button 3' OnClick={() => alert('apretao')}/>
  </React.Fragment>
)