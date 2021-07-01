import Skeleton from 'react-loading-skeleton';
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
  const shuffledData = shuffleArray(data);

  return (
    <div className="container col-span-2">
      {!shuffledData ? (
        <Skeleton count={4} width={640} height={500} className="mb-5" />
      ) : (
        shuffledData.map((content) => <Post key={content.id} content={content} alt="demo" />)
      )}
    </div>
  );
}
