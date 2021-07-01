import Skeleton from 'react-loading-skeleton';
import Header from './header';
import Photos from './photos';
import timelineData from '../../timelineData';

export default function Profile() {
  const data = timelineData;

  return (
    <>
      <Header />
      {!data ? (
        <Skeleton count={8} width={640} height={500} className="mb-5" />
      ) : (
        data.map((content) => <Photos key={content.id} content={content} alt="demo" />)
      )}
    </>
  );
}
