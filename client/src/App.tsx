import React, { ReactNode } from 'react';
import './App.css';


interface ContainerProps {
  children: ReactNode
}

const Container: (props: ContainerProps) => JSX.Element = ({children}) => (
  <div className="m-auto w-4/5 bg-green-500 flex flex-col nowrap">
    {children}
  </div>
)

function Navigation() {
  const menu_items = [
    {name: "Home", link: "/"},
    {name: "New", link: "/#new"},
    {name: "Preferences", link: "/#preferences"}
  ]
  return (
    <ul className="flex flex-row bg-pink-200">
      {
        menu_items.map((item, idx) => <li key={idx} className="mr-2">{item.name}</li>)
      }
    </ul>
  )
}

function App() {
  return (
    <Container>
      <Navigation />
      <h1 className="text-5xl font-bold m-auto">Hello, World!</h1>
    </Container>
  );
}

export default App;
