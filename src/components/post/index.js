import { useRef } from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import Image from './image';
import Actions from './actions';
import Footer from './footer';

export default function Post({ content }) {
  return (
    <div className="rounded col-span-4 border bg-white border-gray-primary mb-7 mt-5">
      <Header title={content.title} website={content.website} />
      <Image src={content.media} caption={content.description} />
      <Actions totalLikes={content.likes} likedPhoto={content.liked} />
      <Footer title={content.title} description={content.description} />
    </div>
  );
}

Post.propTypes = {
  content: PropTypes.shape({
    category: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    media: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    liked: PropTypes.bool.isRequired
  })
};
