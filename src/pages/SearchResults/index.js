import React from 'react'
import Spinner from 'components/Spinner'
import ListOfGifs from 'components/ListOfGifs'
import {useGifs} from 'hooks/useGifs'

function SearchResults ({ params }) {
  const { keyword } = params
  const {loading, gifs, setPage} = useGifs({keyword})
  console.log('-')

  const handleNextPage = () => setPage(prevPage => prevPage + 1)

  return (<>
    {loading
      ? <Spinner />
      : (<>
          <h3 className="App-title">{decodeURI(keyword)}</h3>
          <ListOfGifs gifs={gifs} />
        </>)
    }
    <br/>
    <button onClick={handleNextPage}>get next page</button>
  </>)
}
export default React.memo(SearchResults)