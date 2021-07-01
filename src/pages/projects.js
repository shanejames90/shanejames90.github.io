import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Projects() {
  const history = useHistory();

  useEffect(() => {
    document.title = "Shane's Projects";
  }, []);

  return (
    <div className="bg-gray-background">
      <Header />
      <div className="container flex mx-auto max-w-screen-md items-center h-screen">
        <div className="flex w-3/5">
          <img src="images/serenity.jpg" alt="serenity screenshot" className="max-w-full" />
        </div>
        <div className="flex flex-col w-2/5">
          <p>Projects Page!</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
