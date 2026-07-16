import React from "react";
import PostComposer from "./components/PostComposer";
import "./styles/App.css";

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>📱 Social Media Post Composer</h1>
        <p>Create and validate posts for multiple social media platforms.</p>
      </header>

      <main>
        <PostComposer />
      </main>
    </div>
  );
};

export default App;
