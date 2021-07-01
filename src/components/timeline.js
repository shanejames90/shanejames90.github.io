import Skeleton from 'react-loading-skeleton';
import timelineData from '../timelineData';
import Post from './post';

export default function Timeline() {
  const data = timelineData;

  return (
    <div className="container col-span-2">
      {!data ? (
        <Skeleton count={4} width={640} height={500} className="mb-5" />
      ) : (
        data.map((content) => <Post key={content.id} content={content} alt="demo" />)
      )}
    </div>
  );
}
