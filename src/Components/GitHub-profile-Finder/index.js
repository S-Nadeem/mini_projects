import { useEffect, useState } from "react";
import UserProfile from "./UserProfile";

export default function GitHubFinder() {
  const [userName, setuserName] = useState("");
  const [userData, setuserData] = useState(null);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);

  const fetchGithubUsersData = async () => {
    try {
      setloading(true);
      const response = await fetch(`https://api.github.com/users/${userName}`);
      const data = await response.json();
      if (data) {
        setuserData(data);
        console.log(data);
        setloading(false);
        setuserName("");
      }
    } catch (e) {
      seterror(e.message);
      setloading(false);
    }
  };

  useEffect(() => {
    fetchGithubUsersData();
  }, []);

  const handlesearchGithub = () => {
    setuserName("");
    fetchGithubUsersData();
  };
  return (
    <>
      <div className="github_container">
        <input
          type="text"
          name="GitHub_name"
          value={userName}
          onChange={(e) => setuserName(e.target.value)}
        />
        <button onClick={handlesearchGithub} className="github_search">
          Search
        </button>
        {userData !== null ? <UserProfile userData={userData} /> : null}
      </div>
    </>
  );
}
