import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import './inde.css';

const App: Component = () => {
  return (
    <div class={styles.App}>
        <h1 class="text-3xl font-bold underline bg-red-500">
          Hello world!
        </h1>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  );
};

export default App;
