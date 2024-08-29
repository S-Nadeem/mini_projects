import { useEffect, useState } from "react";
import "./styles.css";
import Suggestions from "./Suggestions";

export default function SearchAutoComplete() {
  const [loading, setloading] = useState(false);
  const [usersData, setusersData] = useState([]);
  const [error, seterror] = useState(null);
  const [input, setInput] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [dropDown, setdropDown] = useState(false);

  const handleInput = (e) => {
    const queryData = e.target.value.toLowerCase();
    setInput(queryData);
    if (queryData.length > 1) {
      const filteredData =
        usersData && usersData.length
          ? usersData.filter(
              (item) => item.toLowerCase().indexOf(queryData) > -1
            )
          : [];
      setFilteredUsers(filteredData);
      setdropDown(true);
    } else {
      setdropDown(false);
    }
  };

  const handleChange = (e) => {
    setInput(e.target.innerText);
    setFilteredUsers([]);
    setdropDown(false);
  };
  const fetchListofUsers = async () => {
    try {
      setloading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      if (data && data.users && data.users.length) {
        setusersData(data.users.map((item) => item.firstName));
        setloading(false);
      }
    } catch (e) {
      seterror(e.message);
    }
  };

  useEffect(() => {
    fetchListofUsers();
  }, []);

  console.log(usersData, filteredUsers);

  if (loading) {
    return <div>Loading Please wait</div>;
  }
  if (error) {
    return <div>Error Occuured, Please try again later</div>;
  }

  return (
    <>
      <div className="autoComplete_container">
        <div className="search_container">
          <input
            className="input_bar"
            type="text"
            name="search_bar"
            id=""
            onChange={handleInput}
            value={input}
          />
          {dropDown && (
            <Suggestions data={filteredUsers} handleChange={handleChange} />
          )}
        </div>
      </div>
    </>
  );
}
