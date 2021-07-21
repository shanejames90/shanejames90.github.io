export default function PersonalHeader() {
  return (
    <div className="container flex mx-auto max-w-screen-lg items-center mt-10">
      <div className="flex flex-col mr-4 w-1/3 h-screen">
        <div className="flex flex-col items-center bg-white p-4 border border-gray-primary rounded overflow-scroll dark:bg-gray-middark dark:text-white dark:text-opacity-80 dark:border-gray-darkest">
          <h1 className="flex justify-center w-full mb-4">
            <p>Brand</p>
          </h1>
          <div className="flex flex-col mr-2 w-full mb-1">
            <div className="flex flex-col items-center bg-white p-4 rounded overflow-scroll dark:bg-gray-middark dark:text-white dark:text-opacity-80">
              <div className="container flex justify-center w-full items-center">
                <p className="w-full">
                  I’m a full stack engineer. I have a passion for creating, and using innovation to
                  increase awareness, quality of life, and efficiency. My approach to building and
                  design takes its cues from listening to the basic needs of the user and
                  implementing strategies to help them traverse obscurities. I lead with a keen eye
                  for teamwork, an appetite for learning, and a passion for perspective. Teams I’ve
                  led in the past, through operations and business management, have performed at a
                  high level in exceeding user expectations, and have sustained that peak of
                  performance by leveraging trust in teammates and executing one vision while not
                  compromising personal values. I’m looking to create more ways to seamlessly
                  implement technology into the most common of everyday tasks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mr-4 w-1/3 h-screen">
        <div className="flex flex-col items-center bg-white p-4 border border-gray-primary rounded overflow-scroll dark:bg-gray-middark dark:text-white dark:text-opacity-80 dark:border-gray-darkest">
          <header>
            <h1 className="flex justify-center w-full mb-4">
              <p>Education</p>
            </h1>
          </header>
          <div className="flex flex-col mr-2 w-full mb-1">
            <div className="flex flex-col items-center bg-white p-4 border border-gray-primary rounded overflow-scroll dark:bg-gray-middark dark:text-white dark:text-opacity-80 dark:border-gray-darkest">
              <header>
                <h1 className="flex justify-center w-full mb-4">
                  <p>High School - International Baccalaureate</p>
                </h1>
              </header>
              <img src="/images/iblogo.png" alt="ib" />
            </div>
          </div>
          <div className="flex flex-col mr-2 w-full mb-1">
            <div className="flex flex-col items-center bg-white p-4 border border-gray-primary rounded overflow-scroll dark:bg-gray-middark dark:text-white dark:text-opacity-80 dark:border-gray-darkest">
              <header>
                <h1 className="flex justify-center w-full mb-4">
                  <p>Bachelors Degree from the University of Florida</p>
                </h1>
              </header>
              <img src="/images/gifs/uflogo.gif" alt="UF" />
            </div>
          </div>
          <div className="flex flex-col mr-2 w-full mb-1">
            <div className="flex flex-col items-center bg-white p-4 border border-gray-primary rounded overflow-scroll dark:bg-gray-middark dark:text-white dark:text-opacity-80 dark:border-gray-darkest">
              <header>
                <h1 className="flex justify-center w-full mb-4">
                  <p>Software Engineering Immersive Certification</p>
                </h1>
              </header>
              <img src="/images/galogo.png" alt="GA" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-1/3 h-screen">
        <div className="flex flex-col items-center bg-white p-4 border border-gray-primary rounded overflow-scroll dark:bg-gray-middark dark:text-white dark:text-opacity-80 dark:border-gray-darkest">
          <header>
            <h1 className="flex justify-center w-full mb-4">
              <p>Experience</p>
            </h1>
          </header>
          <div className="flex flex-col mr-2 w-full mb-1">
            <div className="flex flex-col items-center bg-white p-4 border border-gray-primary rounded overflow-scroll dark:bg-gray-middark dark:text-white dark:text-opacity-80 dark:border-gray-darkest">
              <header>
                <h1 className="flex justify-center w-full mb-4">
                  <p>Branch Rental Manager: 2014 - 2019</p>
                </h1>
              </header>
              <img src="/images/gifs/enterpriselogo.gif" alt="enterprise" />
            </div>
          </div>
          <div className="flex flex-col mr-2 w-full mb-1">
            <div className="flex flex-col items-center bg-white p-4 border border-gray-primary rounded overflow-scroll dark:bg-gray-middark dark:text-white dark:text-opacity-80 dark:border-gray-darkest">
              <header>
                <h1 className="flex justify-center w-full mb-4">
                  <p>Operations Manager: 2019 - 2020</p>
                </h1>
              </header>
              <img src="/images/pdslogo.png" alt="PDS" className="bg-white" />
            </div>
          </div>
          <div className="flex flex-col mr-2 w-full mb-1">
            <div className="flex flex-col items-center bg-white p-4 border border-gray-primary rounded overflow-scroll dark:bg-gray-middark dark:text-white dark:text-opacity-80 dark:border-gray-darkest">
              <header>
                <h1 className="flex justify-center w-full mb-4">
                  <p>Freelance Author: 2020</p>
                </h1>
              </header>
              <img src="/images/mghg.png" alt="GA" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
