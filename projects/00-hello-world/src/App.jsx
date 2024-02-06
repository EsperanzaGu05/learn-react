// import React from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
export function App() {
  const format = (userName) => `@${userName}`;
  return (
    <section className="App">
      <TwitterFollowCard userName="Esperanza">
        Esperanza Gualdron
      </TwitterFollowCard>

      <TwitterFollowCard userName="Andy33">Andres Andrade</TwitterFollowCard>

      <TwitterFollowCard userName="Antonia78">
        Antonia Gualdron
      </TwitterFollowCard>
    </section>
  );
}
