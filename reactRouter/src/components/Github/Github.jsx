import { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/Muhammad-Hasan5")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <div>Github followers: {data.followers}</div>
      <img src={data.avatar_url} alt="Hasan's Github profile" />
    </>
  );
}

export default Github;
