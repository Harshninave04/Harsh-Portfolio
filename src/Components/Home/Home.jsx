import { Link } from "react-router-dom";
import Project from "../Project/project";
import Jumbotron from "../Jumbotron/Jumbotron";

export default function Home() {

  let technologies = [
    { label: "HTML", url: "https://html.com" },
    { label: "CSS", url: "https://css.com" },
    { label: "JS", url: "https://Javascript.com" },
    { label: "React", url: "https://React.com" },
    { label: "Git/Github", url: "https://github.com" },
    { label: "Tailwind", url: "https://Tailwind.com" },
    { label: "Java", url: "https://Java.com" },
    { label: "C++", url: "https://cplusplus.com" },
    { label: "Linux", url: "https://linux.com" },
  ];
  return (
    <>
      <div className="mx-auto w-full max-w-7xl">
        <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
          <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-xl sm:mt-1 mt-96 space-y-8 text-center sm:text-right sm:ml-auto">
              <h2 className="text-4xl font-bold sm:text-5xl">
                Harsh Ninave,
                <span className="font-mono sm:block text-3xl m-2">A React Dev!!</span>
              </h2>

              <Link
                className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                to="/resume">
                {/* <svg
                fill="white"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd">
                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
              </svg> */}
                My Resume
              </Link>
            </div>
          </div>
          <div className="absolute inset-0 w-full sm:width-auto sm:my-20 sm:pt-1 pt-12 h-full ">
            <img className="w-96 " src="/image-3.jpg" alt="image1" />
          </div>
        </aside>
      </div>

      {/* Project Section */}
      <Project />
      <Jumbotron />

      {/*Skill Section */}
      <div id="skills" className="bg-gray-50 bg-opacity-25 py-12 ">
        <div className="max-w-screen-md xl:max-w-screen-5xl mx-auto flex flex-wrap gap-10 items-center justify-center">
          {/* <span className="bg-fuchsia-50 p-2 w-24 flex justify-center font-bold rounded-md">
            <a href="">HTML</a>
          </span>
          <span className="bg-fuchsia-50 p-2 w-24 flex justify-center font-bold rounded-md">
            <a href="">CSS</a>
          </span>
          <span className="bg-fuchsia-50 p-2 w-24 flex justify-center font-bold rounded-md">
            <a href="">JS</a>
          </span>
          <span className="bg-fuchsia-50 p-2 w-24 flex justify-center font-bold rounded-md">
            <a href="">React</a>
          </span>
          <span className="bg-fuchsia-50 p-2 w-24 flex justify-center font-bold rounded-md">
            <a href="">Tailwind</a>
          </span>
          <span className="bg-fuchsia-50 p-2 w-24 flex justify-center font-bold rounded-md">
            <a href="">Git/Github</a>
          </span> */}
          {technologies.map((technology) => (
            <span
              key={technology.label} // Ensure unique keys for each item
              className="bg-fuchsia-50 p-2 w-24 flex justify-center font-bold rounded-md">
              <a href={technology.url} target="_blank" rel="noopener noreferrer">
                {technology.label}
              </a>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
