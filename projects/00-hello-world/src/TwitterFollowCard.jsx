// eslint-disable-next-line react/prop-types
import { useState } from "react";
export function TwitterFollowCard({ userName, children, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing); // destructure 0=false, 1=function to change teh state
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
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de Seguir</span>
        </button>
      </aside>
    </article>
  );
}
