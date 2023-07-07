import { authen, author } from "@routes/privateRoutes";

function Index() {
  return <div>ChildForm3.1</div>;
}

export default authen(author(Index));
