import { useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Timeline from '../components/timeline';

export default function Dashboard() {
  useEffect(() => {
    document.title = 'Welcome!';
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-background">
      <Header />
      <div className="flex-grow">
        <Timeline />
      </div>
      <Footer />
    </div>
  );
}
