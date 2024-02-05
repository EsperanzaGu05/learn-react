// eslint-disable-next-line react/prop-types
export function TwitterFollowCard({ userName, name, isFollowing }) {
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-header-img"
          alt="Avatar"
          src={`http://unavatar.io/${userName}`}
        ></img>
        <div>
          <strong className="tw-followCard-header-userName">{name}</strong>
          <span className="tw-followCard-header-userAt">@{userName}</span>
        </div>
      </header>
      <aside>
        <button className="tw-followCard-button">Seguir</button>
      </aside>
    </article>
  )
}
