// dos tipos de componentes: class comp y functional comp
// actualmente se utilizan mas los comp funcionales
// rsc para crear componentes funcionales

import React from "react";

const TituloPrincipal = (props) => {
  // aqui va la logica

  return (
    <>
      {/* aqui va el maquetado y muy poca logica */}
      <h1>Proyecto contador - {props.codigoComision}</h1>
    </>
  );
};

export default TituloPrincipal;

