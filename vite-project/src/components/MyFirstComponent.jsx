import React from "react";

export const MyFirstComponent = () => {
  const name = "Luis Cubillos";

  const githaub_profile = "https://github.com/lucho0607";

  const student = {
    name: "Luis ",
    last_name: "Cubillos",
    movile: "300000",
    linkedin_profile:
      "https://www.linkedin.com/in/luis-cubillos-saavedra-770633289/",
  };
  return (
    <>
      <div>My First Component</div>
      <div className="container bg-info-subtle mt-4">
        <h1>Temas de React</h1>
        <ul>
          <li>Componentes</li>
          <li>Eventos</li>
          <li>Estados hooks</li>
          <li>Props</li>
        </ul>
      </div>
      <div className="container bg-warning-subtle py-2 px-4">
        <h1>Datos del Docente</h1>
        <p>
          Nombre: <strong>{name}</strong>
        </p>
        <p>Github: {githaub_profile}</p>
      </div>
      <div className="container bg-success-subtle py-2 px-4">
        <h1>Datos del Estudiante</h1>
        <p>
          Nombre: <strong>{student.name}</strong>
        </p>
        <p>
          Apellido: <strong>{student.last_name}</strong>
        </p>
        <p>
          Telefono: <strong>{student.movile}</strong>
        </p>
        <p>
          Linkedin:{" "}
          <a href={student.linkedin_profile}>{student.linkedin_profile}</a>
        </p>
      </div>
      <div className="mt-2">
        <h1>Objeto Completo</h1>
        <pre>{JSON.stringify(student)}</pre>
      </div>
    </>
  );
};
