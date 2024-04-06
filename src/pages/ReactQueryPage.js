import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

const ReactQueryPage = () => {
    const fetchPost = () => {
        return axios.get('http://localhost:3002/posts')
    }
    const {isLoading, data, isError, error} = useQuery({
        queryKey: ['posts'],
        queryFn: fetchPost,
        //try 횟수, 기본이 4번
        retry: 1,
        //여러 데이터중 data > data 만 불러올 수 있도록 선택할 수 있다.
        select: (data) => {
            return data.data;
        },
        gcTime: 5000
    })
  if(isLoading){
    return <h1>Loading..</h1>
  }
  if(isError){
    return <h1>{error.message}</h1>
  }

  return (
    <div>{data.map(item => <div key={item.id}>{item.title}</div>)}</div>
  )
}

export default ReactQueryPage