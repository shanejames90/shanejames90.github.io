import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import MyResume from '../components/myresume';

export default function Resume() {
  const history = useHistory();

  useEffect(() => {
    document.title = 'Resume';
  }, []);

  return (
    <div className="flex flex-col h-screen bg-gray-background">
      <Header />
      <div className="flex-1 overflow-y-auto p-1">
        <MyResume />
      </div>
      <Footer />
    </div>
  );
}
