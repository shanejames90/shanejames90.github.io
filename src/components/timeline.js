import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import InfiniteScroll from 'react-infinite-scroll-component';
import timelineData from '../timelineData';
import Post from './post';

function shuffleArray(array) {
  // eslint-disable-next-line no-plusplus
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

export default function Timeline() {
  const data = timelineData;
  // call shuffled data so that on each refresh user gets new timeline
  const shuffledData = shuffleArray(data);

  const [items, setItem] = useState(shuffledData);

  const fetchMoreData = async () => {
    setTimeout(() => {
      setItem((items) => items.concat(shuffledData));
    }, 1000);
  };

  return (
    <div id="scollableDiv" className="container col-span-2 overflow-auto">
      {!items ? (
        <Skeleton count={4} width={640} height={500} className="mb-5" />
      ) : (
        <InfiniteScroll
          dataLength={items.length}
          next={fetchMoreData}
          // eslint-disable-next-line react/jsx-boolean-value
          hasMore={true}
          loader={<h4>Loading...</h4>}
          scrollableTarget="scrollableDiv"
        >
          {items.map((content) => (
            <Post key={content.id} content={content} alt="demo" />
          ))}
        </InfiniteScroll>
      )}
    </div>
  );
}
