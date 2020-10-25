import React, {Suspense} from 'react'
import useNearScreen from 'hooks/useNearScreen'
import Spinner from 'components/Spinner'

const Trending = React.lazy(() => import('./Trending'))

export default function LazyTrending() {
  const {isNearScreen, fromRef} = useNearScreen({distance: '100px'})
  return <div ref={fromRef}>
    <Suspense fallback={<Spinner />}>
      {isNearScreen ? <Trending /> : <Spinner />}
    </Suspense>
  </div>
}