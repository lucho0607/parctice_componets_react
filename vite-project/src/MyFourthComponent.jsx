const MyFourthComponent = () => {
  const handleClicked = (e, name) => {
    alert("Has hecho click al botón!!" + name);
  };

  const handleDoubleClicked = () => {
    alert("Has hecho doble click al botón");
  };
  // onMouseEnter y onMouseLeave con dos funciones
  const handleMouseEnter = (e) => {
    console.log("Has entrado a mi caja con el Mouse!! ");
  };

  const handleMouseLeave = (e) => {
    console.log("Has salido de mi caja!! ");
  };

  // onMouseEnter y onMouseLeave con una sola función con Alert
  const handleMouse = (e, action) => {
    alert(`Has ${action}  la caja`);
  };

  // onMouseEnter y onMouseLeave con una sola función con  Console Log
  // onFocus
  const handleInsideInput = (e) => {
    console.log("Estas dentro del input, escribe tu nombre");
  };

  // onBlur
  const handleOutsideInput = (e) => {
    console.log("Estás FUERA del input, Adiós!!");
  };

  return (
    <div>
      <h1>My Fourth Component</h1>
      {/* Evento Click*/}
      <div>
        <button
          className="btn btn-danger"
          onClick={() => {
            alert("Hola soy un evento click");
          }}
        >
          Haz click
        </button>
      </div>
      <div>
        <button
          className="btn btn-success"
          onClick={(e) => handleClicked(e, "Ines")}
        >
          Aqui tambn haz click
        </button>
      </div>
      <div>
        <button className=" btn btn-info" onDoubleClick={handleDoubleClicked}>
          Haz doble click
        </button>
      </div>
      <div
        id="box1"
        className="mt-4"
        onMouseEnter={(e) => handleMouseEnter(e)}
        onMouseLeave={(e) => handleMouseLeave(e)}
      ></div>
      <div
        id="box2"
        className="mt-4"
        onMouseEnter={(e) => handleMouse(e, "entrando a")}
        onMouseLeave={(e) => handleMouse(e, "saliendo de")}
      ></div>
      <div className="mt-4 ">
        <input
          type="text"
          onFocus={(e) => handleInsideInput(e)}
          onBlur={(e) => handleOutsideInput(e)}
        />
      </div>
    </div>
  );
};

export default MyFourthComponent;
