
import React from 'react'
import { usePostQuery } from '../hook/usePosts'

const ReactHookQueryPage = () => {
   const {data, isLoading, isError, error} = usePostQuery();
  if(isLoading){
    return <h1>Loading..</h1>
  }
  if(isError){
    return <h1>{error.message}</h1>
  }

  return (
    <div>
         {data?.map(item => <div key={item.id}>{item.title}</div>)}
   </div>
  )
}

export default ReactHookQueryPage