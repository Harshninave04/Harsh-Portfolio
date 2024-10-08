function project() {
  const redirectToProject1 = () => {
    //   window.location.href = "https://foto-folio.netlify.app/";
    window.open('https://foto-folio.netlify.app/', '_blank');
  };
  const redirectToProject2 = () => {
    window.open('https://harshninave04.github.io/Bubble-Game/', '_blank');
  };
  const redirectToProject3 = () => {
    window.open('https://harshninave04.github.io/Fresh-Grocer-Website/', '_blank');
  };
  const redirectToProject5 = () => {
    window.open('https://viki-pedia.onrender.com/', '_blank');
  }
  const redirectToProject6 = () => {
    window.open('https://libry-frontend.onrender.com/', '_blank');
  }

  const redirectToProject = () => {
    alert('Please hold until the project is finalized!');
  };

  return (
    <div className="mx-auto w-full max-w-7xl bottom-20">
      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <h1 className="flex items-center justify-center text-5xl font-medium">Projects</h1>
          <div className="container mx-auto">
            <div className="grid grid-cols-1 my-16 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 4 */}

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 flex justify-center">Libry</h3>
                <a href="/" onClick={redirectToProject6}>
                  <img
                    className="flex justify-start mt-4 w-full h-72 object-cover"
                    src="libry.png" // Replace with your actual image URL
                    alt="Project 3"
                  />
                </a>
                <p className="text-gray-600 mt-4">
                  Libry is a web app where you can buy or borrow ebooks. They offer recommendations
                  and have a user-friendly interface.
                </p>
                {/* <p className="italic text-zinc-400">Project is yet to deploy!</p> */}
              </div>


              {/* Project 5 */}

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 flex justify-center">Viki-Pedia</h3>
                <a href="" onClick={redirectToProject5}>
                  <img
                    className="flex justify-start mt-4 w-full h-72 object-cover object-center"
                    src="viki-pedia.png" // Replace with your actual image URL
                    alt="Project 3"
                  />
                </a>
                <p className="text-gray-600 mt-4">
                  Viki-pedia provides a simple yet effective way to manage and view detailed
                  information through an intuitive card-based interface.
                </p>
                {/* <p className="italic text-zinc-400">Project is yet to deploy!</p> */}
              </div>

              {/* Project 3 */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 flex justify-center">Fresh-Grocery</h3>
                <a href="" onClick={redirectToProject3}>
                  <img
                    className="mt-4 w-full h-72 object-cover object-center"
                    src="fresh-grocer.png" // Replace with your actual image URL
                    alt="Project 3"
                  />
                </a>
                <p className="text-gray-600 mt-4">
                  An online platform that allows users to conveniently order fresh fruits,
                  vegetables, etc.
                </p>
              </div>
              {/* Project 1 */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 flex justify-center">
                  Foto-Folio Gallery
                </h3>
                <a href="" onClick={redirectToProject1}>
                  <img
                    className="mt-4 w-fullf h-72 object-cover object-center"
                    src="/fotofolio.png" // Replace with your actual image URL
                    alt="Project 1"
                  />
                </a>
                <p className="text-gray-600 mt-4">
                  FotoFolio is more than just a gallery; FotoFolio is an image-sharing platform with
                  a unique navigation.
                </p>
              </div>

              {/* Project 2 */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 flex justify-center">Bubble-Game</h3>
                <a href="" onClick={redirectToProject2}>
                  <img
                    className="mt-4 w-full h-72 object-cover object-center"
                    src="/bubble.png" // Replace with your actual image URL
                    alt="Project 2"
                  />
                </a>
                <p className="text-gray-600 mt-4">
                  Bubble Game: Click matching numbers in bubbles within a 1-minute countdown. Score
                  points for each correct click. Game ends after 1 minute, final score tallied.
                </p>
              </div>

              {/* Project 5 */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 flex justify-center">
                  Applicant Insight System
                </h3>
                <a href="" onClick={redirectToProject}>
                  <img
                    className="mt-4 w-full h-72 object-cover object-center"
                    src="loading.png" // Replace with your actual image URL
                    alt="Project 1"
                  />
                </a>
                <p className="text-gray-600 mt-4">Project is under process !!</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default project;
