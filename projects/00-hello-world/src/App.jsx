// import React from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
export function App() {
  return (
    <section className="App">
      <TwitterFollowCard isFollowing  userName="Esperanza" name="Esperanza Gualdron" />
      <TwitterFollowCard isFollowing = {false} userName="Andy33" name="Andres Andrade" />
      <TwitterFollowCard isFollowing  userName="Antonia78" name="Antonia Gualdron" />
    </section>
  )
}
