import PropTypes from 'prop-types';

export default function Footer({ title, description }) {
  return (
    <div className="p-4 pt-2 pb-0">
      <span className="mr-1 font-bold">{`${title}:`}</span>
      <span>{description}</span>
    </div>
  );
}

Footer.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
