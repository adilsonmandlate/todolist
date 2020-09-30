import React from "react";
import { Check, Delete, Edit } from "react-feather";
import styles from "../styles/Todo.module.css";

const Todo = ({ todo, late = false }) => {
  const completeTodo = () => {
    alert("Completed :)");
  };

  const removeTodo = () => {
    alert("removing todo...");
  };

  return (
    <li className={styles.container}>
      <span onClick={() => completeTodo()} className={styles.status}>
        <Check size={12} />
      </span>
      <div>
        <p className={styles.name}>{todo.name}</p>
        <span className={styles.label}>Professional</span>
        {late && <p className={styles.date}>{todo.date}</p>}
      </div>
      <div className={styles.actions}>
        <span className={styles.editAction}>
          <Edit size={18} />
        </span>
        <span className={styles.deleteAction} onClick={() => removeTodo()}>
          <Delete size={18} />
        </span>
      </div>
    </li>
  );
};

export default Todo;
