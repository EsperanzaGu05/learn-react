// eslint-disable-next-line react/prop-types
export function TwitterFollowCard({
  formatUserName,
  userName,
  children,
  isFollowing,
}) {
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
          <span className="tw-followCard-header-userAt">
            {formatUserName(userName)}
          </span>
        </div>
      </header>
      <aside>
        <button className="tw-followCard-button">Seguir</button>
      </aside>
    </article>
  );
}
