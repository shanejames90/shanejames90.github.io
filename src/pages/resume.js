import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Resume() {
  const history = useHistory();

  useEffect(() => {
    document.title = 'Resume';
  }, []);

  return (
    <div className="bg-gray-background">
      <Header />
      <div className="container flex mx-auto max-w-screen-md items-center h-screen">
        <div className="flex flex-col w-2/5">
          <p>Resume Page!</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
