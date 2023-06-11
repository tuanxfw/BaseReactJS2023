import React from "react";
import { useParams } from "react-router-dom";


function Index(props: any) {
  const param = useParams();
  {console.log("param", param)}
  return (
    <div>
      <h1>404 index</h1>
    </div>
  );
}

export default Index;
