import {useContext, useEffect, useState} from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/GifsContext'

export function useGifs ({ keyword } = {keyword: null}) {
  const [loading, setLoading] = useState(false)
  const {gifs, setGifs} = useContext(GifsContext)

  useEffect(function () {
    setLoading(true)
    const keywordtoUse = keyword || localStorage.getItem('lastKeyword') || 'random'
    getGifs({ keyword : keywordtoUse })
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
        if (keyword) localStorage.setItem('lastKeyword', keyword) 
      })
  }, [keyword, setGifs])

  return {loading, gifs}
}
