import React from "react";
import { Plus } from "react-feather";
import { Link } from "react-router-dom";
import styles from "../styles/Home.module.css";

export const Home = () => {
  return (
    <section>
      <header className={styles.mainHeader}>
        <div className={styles.welcome}>
          <div className={styles.date}>18 September 2020 - Friday</div>
        </div>
        <Link className={styles.addTodo} to="/todos/new">
          <Plus />
        </Link>
      </header>

      <div className={styles.sectionContainer}>
        <header className={styles.categoriesHeader}>
          <h2 className={styles.categoriesTitle}>Categories</h2>
        </header>

        <ul className={styles.todo}>
          <li>
            <span className={styles.todoStatus} />
            <span>Color</span>
          </li>
        </ul>
      </div>

      <div className={styles.sectionContainer}>
        <header className={styles.categoriesHeader}>
          <h2 className={styles.todoTitle}>Late Todos (cor: vermelha)</h2>
        </header>
        <ul className={styles.todo}>
          <li>
            <span className={styles.todoStatus} />
            <div>
              <p className={styles.todoDesc}>Finish TODO App</p>
              <span className={styles.todoDate}>17 Sept 2020</span>
            </div>
          </li>
          <li>
            <span className={styles.todoStatus} />
            <div>
              <p className={styles.todoDesc}>Finish TODO App</p>
              <span className={styles.todoDate}>17 Sept 2020</span>
            </div>
          </li>
        </ul>
      </div>

      <div className={styles.sectionContainer}>
        <header className={styles.categoriesHeader}>
          <h2 className={styles.todoTitle}>Todos</h2>
        </header>

        <ul className={styles.todo}>
          <li>
            <span className={styles.todoStatus} />
            <div>
              <p className={styles.todoDesc}>Finish TODO App</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
