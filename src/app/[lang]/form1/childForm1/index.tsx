import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function Index(props: any) {
  const param = useParams();
  // {
  //   console.log("props", props);
  // }
  // {
  //   console.log("param", param);
  // }

  useEffect(() => {
    console.log("mount childForm1");
  }, []);

  return (
    <div>
      <h1>ChildForm1</h1>
      <h1>{props?.pageProps?.title}</h1>
      <p>{props?.pageProps?.description}</p>
    </div>
  );
}

export default Index;
