import React, { ReactNode, useState, useEffect } from 'react';
import './App.css';


interface ContainerProps {
  children: ReactNode
}

const Container: (props: ContainerProps) => JSX.Element = ({ children }) => (
  <div className="m-auto w-4/5 flex flex-col nowrap">
    {children}
  </div>
)

function Navigation() {
  const menu_items = [
    { name: "Home", link: "/" },
    { name: "New", link: "/#new" },
    { name: "Preferences", link: "/#preferences" }
  ]
  return (
    <ul className="flex flex-row p-3 mt-3 text-lg font-bold bg-pink-200">
      {
        menu_items.map((item, idx) => <li key={idx} className="mr-3">{item.name}</li>)
      }
    </ul>
  )
}

interface ActivityProps {
  name: string
}

function Activity({ name }: ActivityProps): JSX.Element {
  return (
    <li className="bg-white text-3xl p-2 mt-2">
      { name}
    </li>
  )
}

function ActivityListing({ activities }: { activities: ActivityProps[] }): JSX.Element {
  return (
    <ul className="mt-2">
      {
        activities.map(act => <Activity {...act} />)
      }
    </ul>
  )
}

function App() {
  const initialActs: ActivityProps[] = []
  const [activities, setActivities]: [activities: ActivityProps[], setActivities: any] = useState(initialActs)

  useEffect(() => {
    fetch("http://gwen-desktop.local:8000/api/activities/")
      .then(response => response.json())
      .then(activities => setActivities((acts: ActivityProps[]) => activities))
  }, [])

  return (
    <Container>
      <Navigation />
      <ActivityListing activities={activities} />
    </Container>
  );
}

export default App;
