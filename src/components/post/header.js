import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Header({ title, website }) {
  return (
    <div className="flex border-b border-gray-primary h-4 p-4 py-8 dark:bg-gray-middark dark:border-gray-darkest">
      <div className="flex items-center">
        <Link to={{ pathname: `${website}` }} target="_blank" className="flex items-center">
          <img
            className="rounded-full h-8 w-8 flex mr-3"
            src={`/images/avatars/${title}.png`}
            alt={`${title} profile`}
          />
          <p className="font-bold dark:text-white dark:text-opacity-80 dark:hover:text-opacity-100">
            {title}
          </p>
        </Link>
      </div>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired
};
