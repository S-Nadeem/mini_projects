import { BiLogIn } from "react-icons/bi";

export default function UserProfile({ userData }) {
  const { avatar_url, created_at, login, url, repos_url, name } = userData;
  return (
    <>
      <div className="gitHub_data_container">
        <img src={avatar_url} alt="" />
        <p>{name}</p>
        <a href={url}>{login}</a>
      </div>
    </>
  );
}
