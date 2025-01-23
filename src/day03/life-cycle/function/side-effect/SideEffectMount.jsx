import React, { useEffect, useState } from 'react';

// https://jsonplaceholder.typicode.com/albums
const SideEffectMount = () => {
  
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    const getDatas = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/albums")
      // 예외 처리 early return
      if(!response.ok){
        throw new Error("데이터를 불러올 수 없습니다.")
      }
      const datas = await response.json()
      setAlbums(datas)
    }
    getDatas().catch(console.error)

    console.log("리랜더링😎")
  }, [])

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