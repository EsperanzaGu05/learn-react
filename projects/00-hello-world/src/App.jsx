// import React from "react";
import { useState } from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
export function App() {
  // const format = (userName) => `@${userName}`;
  const [name, setName] = useState("Esperanza");

  return (
    <section className="App">
      <TwitterFollowCard userName={name} initialIsFollowing={true}>
        Esperanza Gualdron
      </TwitterFollowCard>
      <TwitterFollowCard userName="Andy33">Andres Andrade</TwitterFollowCard>
      <TwitterFollowCard userName="Antonia78">
        Antonia Gualdron
      </TwitterFollowCard>
      <button onClick={() => setName("Andrew Jhins")}>Change name</button>
    </section>
  );
}
