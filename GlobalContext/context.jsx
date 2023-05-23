import React, { useState, createContext, useContext} from 'react'; 

const GlobalContext = createContext()

//creating a hook for the global context (called useGlobalContext)
export const useGlobalContext = () => useContext(GlobalContext)


//in main.jsx we're wrapping the App.jsx in the AppContext component, but for it to work, we need to also pass the props
export default function AppContext(props) {

const [name, setName] = useState("Katja")

  return (
    <div>
        <GlobalContext.Provider value={{ name, setName }}>
            {props.children}
        </GlobalContext.Provider>
    </div>
  )
}
