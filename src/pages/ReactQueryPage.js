import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

const ReactQueryPage = () => {
    const fetchPost = (queryData) => {
        // const id = queryData.queryKey[1] 디테일한 데이터값을 가지고 오고 싶을때
        // return axios.get(`http://localhost:3002/posts/${id}`)
        return axios.get('http://localhost:3002/posts')
    }
    const {isLoading, data, isError, error} = useQuery({//refetch
        queryKey: ['posts'], //보내주고 싶은 유니크한 키 값을 넣어줄 수 있다.
        queryFn: fetchPost,
        //try 횟수, 기본이 4번
        retry: 1,
        ///staleTime: 60000, //fresh 상태로 10초 있다가 stale 상태로 바뀜. fresh동안은 api를 호출하지 않음.
        //여러 데이터중 data > data 만 불러올 수 있도록 선택할 수 있다.
        //gcTime: 10000, //캐시 유지, 캐시가 없으면 stale도 오래 유지할 수 없어서 다시 api 호출이 일어남!
        select: (data) => {
            return data.data;
        },
       // enabled: false, // 처음에 api불러오지 않음, 버튼을 눌렀을때 api 호출 될 수 있게 숨기기
        //refetchOnMount: true, //true 가 기본 값
        //refetchOnWindowFocus: true, // 화면으로 다시 돌아가면 api 새로고침 
        
    })
  if(isLoading){
    return <h1>Loading..</h1>
  }
  if(isError){
    return <h1>{error.message}</h1>
  }

  return (
    <div>
        {data?.map(item => <div key={item.id}>{item.title}</div>)}
        {/* 버튼을 눌렀을때 api 호출하기 */}
        {/* <button onClick={refetch}>post 리스트 다시 들고오기</button> */}
   </div>
  )
}

export default ReactQueryPage