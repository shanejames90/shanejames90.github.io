import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import Profile from '../components/profile';

export default function About() {
  const history = useHistory();

  useEffect(() => {
    document.title = 'About Me';
  }, []);

  return (
    <div className="bg-gray-background">
      <Header />
      <div className="mx-auto max-w-screen-lg">
        <Profile />
        <p>About Page!</p>
      </div>
      <Footer />
    </div>
  );
}
