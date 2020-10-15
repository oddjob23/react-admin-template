import React, { useState } from "react";
import PageTitle from "../PageTitle";
const TodoPage = () => {
  const initialDnDState = {
    draggedFrom: null,
    draggedTo: null,
    isDragging: false,
    originalOrder: [],
    updatedOrder: [],
  };
  let todoList = [
    {
      id: 1,
      number: 1,
      title: "Todo Sample 1",
      completed: false,
      favourite: false,
    },
    {
      id: 2,
      number: 2,
      title: "Todo Sample 2",
      completed: false,
      favourite: false,
    },
    {
      id: 3,
      number: 3,
      title: "Todo Sample 3",
      completed: false,
      favourite: false,
    },
    {
      id: 4,
      number: 4,
      title: "Todo Sample 4",
      completed: false,
      favourite: false,
    },
  ];
  const [dragAndDrop, setDragAndDrop] = useState(initialDnDState);
  const [list, setList] = useState(todoList);
  const handleDragStart = (e) => {
    e.currentTarget.classList.add("dragging");
    // define initial position where the DRAG event STARTED [ data-position ]
    const initialPosition = Number(e.currentTarget.dataset.position);

    // update Drag and Drop state with new information - draggedFrom is initial position
    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: initialPosition,
      isDragging: true,
      originalOrder: list,
    });

    // implemented for the firefox, check data transfer API for more info
    e.dataTransfer.setData("text/html", "");
  };
  const onDragOverHandler = (e) => {
    e.preventDefault();
    // copy the original order list
    let newList = dragAndDrop.originalOrder;

    // extract dragged from - from the state
    const draggedFrom = dragAndDrop.draggedFrom;

    // dragged to is above current target - data position attribute
    const draggedTo = Number(e.currentTarget.dataset.position);
    // get the item dragged from the list with the index [draggedFrom] (the item dragged)
    const itemDragged = newList[draggedFrom];
    // filter out the elements that are not being dragged
    const remainingItems = newList.filter(
      (item, index) => index !== draggedFrom
    );

    // add remaining items from 0 to element that's dragged
    /**
     *  if element dragged over is with index of 2 then remaining list woould be list[0, 1, 2]
     */
    // add dragged item in that list (changing the order)
    // remaining items are now left to the index of the dragged to
    newList = [
      ...remainingItems.slice(0, draggedTo),
      itemDragged,
      ...remainingItems.slice(draggedTo),
    ];
    // check if the targets are actually different (event fires every 100ms)
    if (draggedTo !== dragAndDrop.draggedTo) {
      setDragAndDrop({
        ...dragAndDrop,
        updatedOrder: newList,
        draggedTo: draggedTo,
      });
    }
  };
  const onDropHandler = (e) => {
    setList(dragAndDrop.updatedOrder);
    //reset the state of drag and drop

    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: null,
      draggedTo: null,
      isDragging: false,
    });
    e.currentTarget.classList.remove("dragging");
    e.currentTarget.classList.remove("over");
  };

  const onDragEnterHandler = (e) => {
    e.currentTarget.classList.add("over");
  };
  const onDragLeaveHandler = (e) => {
    e.currentTarget.classList.remove("over");
  };
  return (
    <>
      <PageTitle title="To-Do" link1={"Apps"} link2={"todo"} />
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="card-title">Tasks List</div>
              <hr className="mt-0" />
              <div className="table-responsive">
                <table className="table table-nowrap table-borderless table-centered mb-0">
                  <tbody>
                    {list.map((el, index) => (
                      <tr
                        draggable={true}
                        onDragStart={handleDragStart}
                        onDrop={onDropHandler}
                        onDragOver={onDragOverHandler}
                        data-position={index}
                        onDragEnter={onDragEnterHandler}
                        onDragLeave={onDragLeaveHandler}
                      >
                        <td width="60px">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              name="completed"
                              id={el.id}
                              className="custom-control-input"
                              checked={el.completed}
                            />
                            <label
                              htmlFor={el.id}
                              className="custom-control-label"
                            ></label>
                          </div>
                        </td>
                        <td width="100%">
                          <h5 className="text-truncate font-size-14 m-0">
                            {" "}
                            {el.title}
                          </h5>
                        </td>
                        <td>
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
                        </td>
                        <td>
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
                        </td>
                        <td>
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
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoPage;
