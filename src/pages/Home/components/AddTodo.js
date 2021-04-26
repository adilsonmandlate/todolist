import React from "react";
import { useForm } from "react-hook-form";
import CalendarAPI from "react-google-calendar-api";
import { v4 as uuid4 } from "uuid";
import { Button, Input } from "../../../components/form";
import { Modal } from "../../../components/modal";
import { useAppState } from "../../../provider";
import { ADD_TODO } from "../../../provider/constants";
import styles from "../styles/AddTodo.module.css";

const AddTodo = ({ isModalOpen, setModalOpen }) => {
  const { handleSubmit, errors, register } = useForm();
  const [, dispatch] = useAppState();

  const onSubmit = (data) => {
    // CalendarAPI.createEventFromNow({ summary: "Example", time: 30 })
    //   .then((result) => {
    //     alert(JSON.stringify(result));
    //   })
    //   .catch((error) => {
    //     alert(JSON.stringify(error));
    //   });

    const todo = {
      id: uuid4(),
      name: data.todo,
      date: new Date().toISOString(),
      completed: false,
    };

    dispatch({ type: ADD_TODO, todo });

    setModalOpen(false);
  };

  return (
    <Modal isOpen={isModalOpen} closeModal={() => setModalOpen(false)}>
      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            name="todo"
            error={errors.todo}
            register={register({
              required: "Can't add an empty todo",
            })}
            autoFocus={true}
            placeholder="ex: Terminar o novo TODO"
          />
          <div className={styles.buttonContainer}>
            <Button type="submit" main={true}>
              Add TODO
            </Button>
            <Button onClick={() => setModalOpen(false)}>Cancel</Button>
          </div>
        </form>
      </section>
    </Modal>
  );
};

export default AddTodo;
