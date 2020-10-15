import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import PageTitle from "../PageTitle";
import { fetchTodos } from "../../actions/todoActions";
const TodoPage = () => {
  const t = useSelector((state) => state.todos);
  const { loading, todos, error } = t;
  const [list, setList] = useState([]);
  const dispatch = useDispatch();
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };
  const grid = 8;

  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,
    boxShadow: isDragging ? "0 0.75rem 1.5rem rgba(18, 38, 63, 0.03)" : "none",

    // change background colour if dragging
    // background: isDragging ? "lightgreen" : "#fff",

    // styles we need to apply on draggables
    ...draggableStyle,
  });

  const getListStyle = (isDraggingOver) => ({
    // background: isDraggingOver ? "lightblue" : "lightgrey",
    // padding: grid,
    // width: 250,
  });
  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const items = reorder(list, result.source.index, result.destination.index);
    setList(items);
  };
  const checkbox = (name, id, checked) => (
    <div className="custom-control custom-checkbox">
      <input
        type="checkbox"
        className="custom-control-input"
        id={id}
        checked={checked}
      />
      <label className="custom-control-label" for="customCheck1"></label>
    </div>
  );

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);
  useEffect(() => {
    console.log(todos);
  }, [todos]);
  return (
    <>
      <PageTitle title="To-Do" link1={"Apps"} link2={"todo"} />
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="card-title">Tasks List</div>
              <hr className="mt-0" />
              {loading ? (
                <h5>Loading</h5>
              ) : (
                <DragDropContext onDragEnd={onDragEnd}>
                  <Droppable droppableId="droppable">
                    {(provided, snapshot) => (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        // style={getListStyle(snapshot.isDraggingOver)}
                      >
                        {todos &&
                          todos.map((item, index) => (
                            <Draggable
                              key={item.id}
                              draggableId={`${item.id}`}
                              index={index}
                            >
                              {(provided, snapshot) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  style={getItemStyle(
                                    snapshot.isDragging,
                                    provided.draggableProps.style
                                  )}
                                >
                                  <div className="row">
                                    <div className="" style={{ width: "60px" }}>
                                      {checkbox(
                                        "completed",
                                        item.id,
                                        item.completed
                                      )}
                                    </div>
                                    <div className="col">{item.title}</div>
                                    <div className="col-2 d-flex align-items-center justify-content-end">
                                      <>
                                        <span className="todos-actions move">
                                          <svg
                                            width="1em"
                                            height="1em"
                                            viewBox="0 0 16 16"
                                            className="bi bi-arrows-move"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              fillRule="evenodd"
                                              d="M7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708l2-2zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10zM.146 8.354a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L1.707 7.5H5.5a.5.5 0 0 1 0 1H1.707l1.147 1.146a.5.5 0 0 1-.708.708l-2-2zM10 8a.5.5 0 0 1 .5-.5h3.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L14.293 8.5H10.5A.5.5 0 0 1 10 8z"
                                            />
                                          </svg>
                                        </span>
                                        <span className="todos-actions">
                                          <svg
                                            width="1em"
                                            height="1em"
                                            viewBox="0 0 16 16"
                                            className="bi bi-star favourite"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              fillRule="evenodd"
                                              d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
                                            />
                                          </svg>
                                        </span>

                                        <span className="todos-actions">
                                          <svg
                                            width="1em"
                                            height="1em"
                                            viewBox="0 0 16 16"
                                            className="bi bi-trash delete"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                            <path
                                              fillRule="evenodd"
                                              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                            />
                                          </svg>
                                        </span>
                                      </>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </Draggable>
                          ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </DragDropContext>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoPage;
