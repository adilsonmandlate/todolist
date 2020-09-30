import React, { useState } from "react";
import { Plus } from "react-feather";
import { useDateDetails } from "../../../hooks";
import { useTodos } from "../../../provider";
import styles from "../styles/Home.module.css";
import AddTodo from "./AddTodo";
import Todo from "./Todo";

export const Home = () => {
  const { today, late } = useTodos();
  const date = useDateDetails(new Date());
  const [isModalOpen, setModalOpen] = useState(false);

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
        <span className={styles.addTodo} onClick={() => setModalOpen(true)}>
          <Plus />
        </span>
      </header>

      {late.length > 0 && (
        <div className={styles.sectionContainer}>
          <header className={styles.categoriesHeader}>
            <h2 className={styles.todoTitleLate}>Late Todos ({late.length})</h2>
          </header>
          <ul className={styles.todo}>
            {late.map((todo, key) => (
              <Todo late={true} key={`${key}-${todo.name}`} todo={todo} />
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

      <AddTodo isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
    </section>
  );
};
