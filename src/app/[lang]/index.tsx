import { useParams, Navigate } from "react-router-dom";
import { authen } from "@routes/privateRoutes";

function Index() {
  const param = useParams();

  return (
    <div>
      <Navigate to={`/${param.lang}/sample`} replace={true} />
    </div>
  );
}

export default authen(Index);
