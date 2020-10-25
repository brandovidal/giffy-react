import {useContext, useEffect, useState} from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/GifsContext'

const INITIAL_PAGE = 0
export function useGifs ({ keyword } = {keyword: null}) {
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)
  const [page, setPage] = useState(0)
  const {gifs, setGifs} = useContext(GifsContext)

  const keywordtoUse = keyword || localStorage.getItem('lastKeyword') || 'random'

  useEffect(function () {
    setLoading(true)
    getGifs({ keyword : keywordtoUse })
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
        if (keyword) localStorage.setItem('lastKeyword', keyword) 
      })
  }, [keyword, keywordtoUse, setGifs])

  useEffect(function() {
    if (page === INITIAL_PAGE) return
    setLoadingNextPage(true)

    getGifs({ keyword : keywordtoUse, page })
    .then(nextGifs => {
      setGifs(prevGifs => prevGifs.concat(nextGifs))
      setLoadingNextPage(false)
    })
  }, [keywordtoUse, page, setGifs])

  return {loading, loadingNextPage, gifs, setPage}
}
