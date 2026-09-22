import { use } from "react";
import "./App.css";
export function TwitterFollowCard({ username, name, isFollowing }) {
  return (
    <article className="card">
      <header>
        <img src="https://unavatar.io/deezer/27" alt="Avatar de {username}" />
        <div>
          <strong>{name}</strong>
          <span>@{username}</span>
        </div>
      </header>
      <aside>
        <button>Seguir</button>
      </aside>
    </article>
  );
}
