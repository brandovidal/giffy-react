import React, { useState } from "react";
import { useLocation } from "wouter";
import ListOfGifs from "../../components/ListOfGifs";
import Spinner from "../../components/Spinner";
import Category from "../../components/Category";
import { useGifs } from "../../hooks/useGifs";

const POPULAR_GIFS = ["Matrix", "Chile", "Colombia", "Ecuador"];

export default function Home() {
  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()
  const { loading, gifs } = useGifs();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    pushLocation(`search/${keyword}`);
  };
  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <button>Buscar</button>
        <input onChange={handleChange} type="text"
          placeholder="Search a gif..." value={keyword} />
      </form>
      <div className="App-main">
        <div className="App-results">
          <h3 className="App-title">Ultima busqueda</h3>
          {loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}
        </div>
        <div className="App-category">
          <Category name='Los gifs más populares' options={POPULAR_GIFS} />
          <Category name="Mascotas" options={['Perros', 'Gatos', 'Hamster']} />
        </div>
      </div>
    </>
  );
}
