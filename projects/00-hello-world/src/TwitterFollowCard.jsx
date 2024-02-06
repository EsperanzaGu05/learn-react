// eslint-disable-next-line react/prop-types
import { useState } from "react";
export function TwitterFollowCard({ userName, children }) {
  const [isFollowing, setIsFollowing] = useState(false); // destructure 0=false, 1=function to change teh state
  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing // To later change the style
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing); // change the state
  };
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-header-img"
          alt="Avatar"
          src={`http://unavatar.io/${userName}`}
        ></img>
        <div>
          <strong className="tw-followCard-header-userName">{children}</strong>
          <span className="tw-followCard-header-userAt">@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article>
  );
}
