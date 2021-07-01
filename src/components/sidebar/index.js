import Skeleton from 'react-loading-skeleton';
import timelineData from '../../timelineData';
import Suggestions from './suggestions';

export default function Sidebar() {
  const data = timelineData;

  return !data ? (
    <Skeleton count={1} height={150} className="mb-5" />
  ) : (
    <div className="rounded flex flex-col">
      <div className="text-sm flex items-center align-items justify-between mb-2 mt-5">
        <p className="font-bold text-gray-base">Suggestions for you</p>
      </div>
      <div className="mt-4 grid gap-4">
        {data.map((content) => (
          <Suggestions key={content.id} content={content} />
        ))}
      </div>
    </div>
  );
}