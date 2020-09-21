import React from 'react'
import Spinner from '../../components/Spinner'
import ListOfGifs from '../../components/ListOfGifs'
import {useGifs} from '../../hooks/useGifs'

function SearchResults ({ params }) {
  const { keyword } = params
  const {loading, gifs} = useGifs({keyword})
  console.log('-')

  return <>
    {loading
      ? <Spinner />
      : (
        <>
          <h3 className="App-title">{keyword}</h3>
          <ListOfGifs gifs={gifs} />
        </>
      )
    }
  </>
}
export default React.memo(SearchResults)