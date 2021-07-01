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
    <div className="flex flex-col h-screen bg-gray-background">
      <Header />
      <div className="flex-1 overflow-y-auto p-1">
        <Profile />
      </div>
      <Footer />
    </div>
  );
}
