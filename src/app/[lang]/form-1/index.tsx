import { authen, author } from "@routes/privateRoutes";

function Index() {
  return <div>Form1</div>;
}

export default authen(author(Index));
