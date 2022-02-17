import { useEffect, useState } from "react";
import { Col, Button } from "react-bootstrap";
import { BsCheckLg } from "react-icons/bs";

const Content = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    let localData = JSON.parse(localStorage.getItem("todos"))
    if(localData.length !== 0 ){
        setTodos(localData);
    }
    else{
        setTodos([{name:"Alışverişe git", do:false},{name:"Köpeği gezdir", do:false}])
        localStorage.setItem("todos",JSON.stringify(todos));
    }
  },[])

  const handleInput = () => {
    if (!!todoInput) {
      setTodos([...todos, { name: todoInput.trim(), do: false }]);
      localStorage.setItem("todos",JSON.stringify([...todos, { name: todoInput.trim(), do: false }]));
    }
    setTodoInput("");
  };

  const handleUpdate = (index) => {
    let newData = [...todos];
    newData[index].do = !newData[index].do;
    localStorage.setItem("todos",JSON.stringify(newData));
    return newData;
  };

  const handleDelete = () => {
    let filtredData = todos.filter((data) => data.do !== true);
    localStorage.setItem("todos",JSON.stringify(filtredData));
    setTodos(filtredData);
  };

  return (
    <section className="content">
      <Col
        className="todo-container"
        xs={10}
        sm={10}
        md={8}
        lg={8}
        xl={6}
        xxl={4}
      >
        <Col
          className="todo-input-container"
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          xxl={12}
        >
          <input
            type="text"
            value={todoInput}
            onChange={({ target }) => setTodoInput(target.value)}
          ></input>
          <Button variant="success" onClick={handleInput}>
            <BsCheckLg />
          </Button>
        </Col>
        <Col
          className="todo-list-container"
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          xxl={12}
        >
          {todos.map((data, index) => {
            return (
              <Col
                className={data.do ? "todo completed" : "todo"}
                onClick={() => {
                  setTodos(handleUpdate(index));
                }}
                key={index}
              >
                {data.name}
              </Col>
            );
          })}
        </Col>
        <Col
          className="todo-delete-container"
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          xxl={12}
        >
          <Button variant="danger" onClick={handleDelete}>
            Tamamlanan Hedefleri Kaldır
          </Button>
        </Col>
      </Col>
    </section>
  );
};

export default Content;
