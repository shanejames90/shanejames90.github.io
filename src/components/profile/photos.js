import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';

export default function Photos({ content }) {
  console.log('content', content);
  return (
    <div className="flex flex-row items-center align-items justify-between">
      <div className="flex items-center justify-between">
        {!content ? (
          <>
            <Skeleton count={12} width={320} height={400} />
          </>
        ) : (
          <div key={content.id} className="relative group">
            <img
              src={content.media}
              alt={content.description}
              className="h-full w-auto flex mr-3"
            />
          </div>
        )}
      </div>
    </div>
  );
}

Photos.propTypes = {
  content: PropTypes.shape({
    category: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    media: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    likes: PropTypes.array.isRequired,
    photo: PropTypes.string.isRequired
  })
};
