import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import ContactMe from '../components/contactMe';

export default function Contact() {
  const history = useHistory();

  useEffect(() => {
    document.title = 'Contact Me';
  }, []);

  return (
    <div className="flex flex-col h-screen bg-gray-background">
      <Header />
      <div className="flex-1 overflow-y-auto p-1">
        <ContactMe />
      </div>
      <Footer />
    </div>
  );
}
