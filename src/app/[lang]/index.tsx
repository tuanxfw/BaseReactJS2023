import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { authen, author } from "@routes/privateRoutes";
import { Navigate } from "react-router-dom";

function Index(props: any) {
  const param = useParams();

  return (
    <div>
      <Navigate to={`/${param.lang}/tester`} replace={true}/>
    </div>
  );
}

export default authen(Index);
