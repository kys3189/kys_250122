import React, { useEffect, useState } from 'react';

// https://jsonplaceholder.typicode.com/albums
const SideEffectMount = () => {
  
  //앨범 어쩌구 상태 어쩌구
  const [albums, setAlbums] = useState([])

  //useEffect 사이드 이펙트 처리, 컴포넌트가 마운트될 때 한번 실행함!
  useEffect(() => {
    //비동기 작업 처리
    const getDatas = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/albums")
      // 예외 처리 early return
      //fetch Api에서 요청, 제공하는 응답값이 !ok 즉 false인 경우
      if(!response.ok){
        //새로운 에러 객체를생성, 던져! 어디로?
        throw new Error("데이터를 불러올 수 없습니다.")
      }
      // 상수 데이터에, 동기작업대기, json값을 객체로 바꿈꿈
      const datas = await response.json()
      //데이터값을 앨범 상태변환어쩌구에 넣기
      setAlbums(datas)
    }
    //함수 실행중, 에러가 발생하면 잡아서 콘솔로 출력
    getDatas().catch(console.error)
    //넴
    console.log("리랜더링😎")
  }, [])
  //상수 앨범리스트를 만들구, 위에서 받은 앨범.찾아서 새로운 배열로, 객체 타이틀과 i인덱스값을, 리스트로 감싸서 key값이 i만큼, 같은 타이틀 출력
  const albumList = albums.map(({title}, i) => <li key={i}>{title}</li>)

  return (
    <div>
      <ul>
        {albumList}
      </ul>
    </div>
  );
};

export default SideEffectMount;