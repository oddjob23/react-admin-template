import React from "react";
import PageTitle from "../PageTitle";
const TodoPage = () => {
  let isDragging = false;
  const todoList = [
    {
      id: 1,
      title: "Todo Sample 1",
      completed: false,
      favourite: false,
    },
    {
      id: 2,
      title: "Todo Sample 2",
      completed: false,
      favourite: false,
    },
    {
      id: 3,
      title: "Todo Sample 3",
      completed: false,
      favourite: false,
    },
    {
      id: 4,
      title: "Todo Sample 4",
      completed: false,
      favourite: false,
    },
  ];
  let cloned_list;
  const cloneTable = () => {
    const table = document.querySelector("table");
    const rect = table.getBoundingClientRect();
    const width = parseInt(window.getComputedStyle(table).width);
    cloned_list = document.createElement("div");
    cloned_list.style.position = "absolute";
    cloned_list.style.left = `${rect.left}px`;
    cloned_list.style.top = `${rect.top}px`;

    table.parentNode.insertBefore(cloned_list, table);
    table.style.visibility = "hidden";

    table.querySelectorAll("tr").forEach((row) => {
      const item = document.createElement("div");
      const newTable = document.createElement("table");
      newTable.classList.add("table");
      const newRow = document.createElement("tr");

      const cells = [].slice.call(row.children);
      cells.forEach((cell) => {
        const newCell = cell.cloneNode(true);
        newRow.appendChild(newCell);
      });

      newTable.appendChild(newRow);
      item.appendChild(newTable);
      cloned_list.appendChild(item);
    });
  };
  const mouseDownHandler = (e) => {
    const el = e.target;
    console.log("mouse down on move icon");
    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
  };

  const mouseMoveHandler = () => {
    console.log("mouse is moving");
    if (!isDragging) {
      isDragging = true;

      cloneTable();
    }
  };
  const mouseUpHandler = () => {
    document.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("mouseup", mouseUpHandler);
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
                    {todoList.map((el) => (
                      <tr>
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
                          <span
                            className="todos-actions move"
                            onMouseDown={mouseDownHandler}
                          >
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
