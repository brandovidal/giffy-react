import React from "react"
import "./App.css"
import Home from "./pages/Home"
import SearchResults from "./pages/SearchResults"
import Detail from "./pages/Detail"
import { Link, Route } from "wouter"
import StaticContext from './context/StaticContext'
import { GifsContextProvider } from "./context/GifsContext"

export default function App() {
  return (
    <StaticContext.Provider value={{name: 'giffy', subscribe: true}}>
      <div className="App">
        <section className="App-content">
          <GifsContextProvider>
            <Link to="/">
              <figure className="App-logo">
                <img alt='Giffy logo' src='/logo.png' />
              </figure>
            </Link>{" "}
            <Route component={Home} path="/" />
            <Route component={SearchResults} path="/search/:keyword" />
            <Route component={Detail} path="/gif/:id" />
          </GifsContextProvider>
        </section>{" "}
      </div>
    </StaticContext.Provider>
  )
}
