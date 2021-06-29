import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default function Projects() {
  const history = useHistory();

  useEffect(() => {
    document.title = "Shane's Projects";
  }, []);

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      <div className="flex w-3/5">
        <img src="images/serenity.jpg" alt="serenity screenshot" className="max-w-full" />
      </div>
      <div className="flex flex-col w-2/5">
        <p>I will be the form!</p>
      </div>
    </div>
  );
}
