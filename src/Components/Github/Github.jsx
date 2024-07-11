import { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/harshninave04")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  const Github = () => {
    window.open('https://github.com/Harshninave04', '_blank');
  }

  return (
    <>
      <div>
        <img
          src={data.avatar_url}
          alt=""
          width={300}
          className="rounded-lg mx-auto my-10 cursor-pointer hover:animate-pulse"
          onClick={() => Github()}
        />
        <p className="text-blue-400 text-xl flex items-center justify-center">
          Click profile to navigate 👆
        </p>
      </div>
      <div className="mt-4">
        <div className="text-3xl text-black font-bold p-1 flex justify-center items-center">
          Github followers: {data.followers}
        </div>

        <div className=" text-3xl text-black font-bold p-1 flex justify-center items-center mb-8">
          Github following: {data.following}
        </div>
      </div>
    </>
  );
}

export default Github;
