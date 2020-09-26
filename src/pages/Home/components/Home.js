import React from "react";
import { Plus } from "react-feather";
import { Link } from "react-router-dom";
import { useDateDetails } from "../../../hooks";
import { useTodos } from "../../../provider";
import styles from "../styles/Home.module.css";
import Todo from "./Todo";

export const Home = () => {
  const { today, late } = useTodos();
  const date = useDateDetails(new Date());

  return (
    <section>
      <header className={styles.mainHeader}>
        <div className={styles.date}>
          <div className={styles.fullDate}>
            <div className={styles.day}>{date.weekDate}</div>
            <div className={styles.monthYear}>
              <span>{date.month}</span>
              <span>{date.year}</span>
            </div>
          </div>
          <hr className={styles.separator} />
          <div className={styles.weekday}>{date.weekDay}</div>
        </div>
        <Link className={styles.addTodo} to="/todos/new">
          <Plus />
        </Link>
      </header>

      {late.length > 0 && (
        <div className={styles.sectionContainer}>
          <header className={styles.categoriesHeader}>
            <h2 className={styles.todoTitle}>Late Todos (cor: vermelha)</h2>
          </header>
          <ul className={styles.todo}>
            {late.map((todo, key) => (
              <li key={`${key}-${todo.name}`}>
                <span className={styles.todoStatus} />
                <div>
                  <p className={styles.todoDesc}>{todo.name}</p>
                  <span className={styles.todoDate}>{todo.date}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {today.length > 0 && (
        <div className={styles.sectionContainer}>
          <header className={styles.categoriesHeader}>
            <h2 className={styles.todoTitle}>Todos</h2>
          </header>

          <ul className={styles.todo}>
            {today.map((todo, key) => (
              <Todo key={`${key}-${todo.name}`} todo={todo} />
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};
