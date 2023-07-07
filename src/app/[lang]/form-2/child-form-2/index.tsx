import { authen, author } from "@routes/privateRoutes";

function Index() {
  return <div>ChildForm2</div>;
}

export default authen(author(Index));
