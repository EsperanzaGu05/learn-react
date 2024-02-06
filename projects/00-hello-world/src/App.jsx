// import React from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
export function App() {
  const format = (userName) => `@${userName}`;
  return (
    <section className="App">
      <TwitterFollowCard
        formatUserName={format}
        isFollowing
        userName="Esperanza"
      >
        Esperanza Gualdron
      </TwitterFollowCard>

      <TwitterFollowCard
        formatUserName={format}
        isFollowing={false}
        userName="Andy33"
      >
        Andres Andrade
      </TwitterFollowCard>

      <TwitterFollowCard
        formatUserName={format}
        isFollowing
        userName="Antonia78"
      >
        Antonia Gualdron
      </TwitterFollowCard>
    </section>
  );
}
