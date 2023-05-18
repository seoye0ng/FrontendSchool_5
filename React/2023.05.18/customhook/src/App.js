import React, { useEffect, useState } from 'react';
import ImgList from './components/ImgList';
import UseScrollChecker from './hooks/UseScrollChecker';
import Loading from './components/Loading';
// import TestBox from './components/TestBox';
// import { UseMouseLocation } from './hooks/UseMouseLocation';

function App() {
  const [imgList, setImgList] = useState([]);
  const [fetchPage, setFetchPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const isBottom = UseScrollChecker();

  useEffect(() => {
    fetchImgs();
  }, [fetchPage]);

  useEffect(() => {
    if (isBottom) {
      setFetchPage((prevPage) => {
        return prevPage + 1;
      });
    }
  }, [isBottom]);

  async function fetchImgs() {
    setIsLoading(true);
    try {
      const response = await fetch(`https://picsum.photos/v2/list?page=${fetchPage}&limit=5`);
      if (!response.ok) {
        throw new Error('네트워크에 문제가 있습니다.');
      }
      const data = await response.json();

      setImgList((prevImg) => {
        return [...prevImg, ...data];
      });
      setIsLoading(false);
    } catch (error) {
      console.log('데이터를 가져오는데 문제가 생겼습니다.', error);
      setIsLoading(false);
    }
  }

  return (
    <div>
      hello world
      <ImgList imgList={imgList} />
      {isLoading && <Loading />}
      {/* isLoading이 true라면 Loading을 실행해라 */}
    </div>
  );
}

export default App;
