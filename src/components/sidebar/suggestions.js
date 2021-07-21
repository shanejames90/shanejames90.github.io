import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Suggestions({ content }) {
  return (
    <div className="flex flex-row items-center align-items justify-between">
      <div className="flex items-center justify-between">
        <img
          className="rounded-full h-8 w-8 flex mr-3"
          src={`/images/avatars/${content.title}.png`}
          alt={`${content.title} profile`}
        />
        <p className="font-bold dark:text-white dark:text-opacity-80">{content.title}</p>
      </div>
      <Link to={{ pathname: `${content.website}` }} target="_blank" className="flex items-center">
        <button
          className="flex flex-row-reversed text-xs font-bold text-blue-medium hover:text-blue-light hover:underline"
          type="button"
        >
          view
        </button>
      </Link>
    </div>
  );
}

Suggestions.propTypes = {
  content: PropTypes.shape({
    category: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    media: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired
  })
};
