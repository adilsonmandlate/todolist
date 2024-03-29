import React, { useState } from "react";
import { Check, Delete, Calendar } from "react-feather";
import { Modal } from "../../../components/modal";
import { Button } from "../../../components/form";
import { useDateDetails } from "../../../hooks";
import { useAppState } from "../../../provider";
import { COMPLETE_TODO, DELETE_TODO } from "../../../provider/constants";
import styles from "../styles/Todo.module.css";

const Todo = ({ todo, late = false }) => {
  const [, dispatch] = useAppState();
  const [isModalOpen, setModalOpen] = useState(false);
  const { year, month, weekDate, weekDay } = useDateDetails(todo.date);

  const completeTodo = () => {
    dispatch({ type: COMPLETE_TODO, id: todo.id });
  };

  const removeTodo = () => {
    dispatch({ type: DELETE_TODO, id: todo.id });
    setModalOpen(false);
  };

  return (
    <li className={styles.container}>
      <span onClick={() => completeTodo()} className={styles.status}>
        <Check size={12} />
      </span>
      <div>
        <p className={styles.name}>{todo.name}</p>
        {late && (
          <p className={styles.date}>
            <Calendar size={12} />
            {`${weekDay} ${month} ${weekDate}, ${year}`}
          </p>
        )}
      </div>
      <div className={styles.actions}>
        <span
          className={styles.deleteAction}
          onClick={() => setModalOpen(true)}
        >
          <Delete size={18} />
        </span>
      </div>

      <Modal isOpen={isModalOpen} closeModal={() => setModalOpen(false)}>
        <p>
          Are you sure you want to delete <b>{todo.name}</b>?
        </p>
        <div className={styles.buttonContainer}>
          <Button main={true} onClick={() => removeTodo()}>
            Yes, delete
          </Button>
          <Button onClick={() => setModalOpen(false)}>No</Button>
        </div>
      </Modal>
    </li>
  );
};

export default Todo;
