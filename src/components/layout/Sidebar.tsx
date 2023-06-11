import { useNavigate, NavigateFunction, NavLink } from "react-router-dom";
import { Drawer, Space, Button } from "antd";
import SidebarStyle from "@style/layout/SidebarStyle";
import { useDispatch, useSelector } from "react-redux";
import store from "@redux/store";
import { getSidebarStatus } from "@redux/selectors/sidebarSelectors";
import { toggleSidebar } from "@redux/slices/sidebarSlice";
import { AppConfig } from "@constants/constants";

function Sidebar() {
  //#region hook

  const dispatch = useDispatch();
  const sidebarIsOpen = useSelector(getSidebarStatus);

  //#endregion

  //#region method

  //#endregion

  //#region event
  const onCloseSidebar = () => {
    dispatch(toggleSidebar(false));
  };
  //#endregion

  return (
    <>
      <SidebarStyle />
      <Drawer
        title={
          <div className="title-sidebar">
            <div className="logo">
              <img src={`${AppConfig.PUBLIC_URL}/images/logo.png`} />
            </div>
            <Button type="text" onClick={onCloseSidebar}>
              <i className="fa-solid fa-xmark" />
            </Button>
          </div>
        }
        placement={"left"}
        closable={false}
        onClose={onCloseSidebar}
        open={sidebarIsOpen}
      >
        <div className="App">
          <NavLink to={`/vi`}>Index</NavLink>
          <br />
          <NavLink to="/vi/form1">Form1</NavLink>
          <br />
          <NavLink to="/vi/form1/childForm1">ChildForm1</NavLink>
          <br />
          <NavLink to="/vi/form1">Form1</NavLink>
          <br />
          <NavLink to="/vi/form1/childForm1">ChildForm1</NavLink>
          <br />
          <NavLink to="/vi/form1">Form1</NavLink>
          <br />
          <NavLink to="/vi/form1/childForm1">ChildForm1</NavLink>
          <br />
          <NavLink to="/vi/form1">Form1</NavLink>
          <br />
          <NavLink to="/vi/form1/childForm1">ChildForm1</NavLink>
          <br />
          <NavLink to="/vi/form1">Form1</NavLink>
          <br />
          <NavLink to="/vi/form1/childForm1">ChildForm1</NavLink>
          <br />
          <NavLink to="/vi/form1">Form1</NavLink>
          <br />
          <NavLink to="/vi/form1/childForm1">ChildForm1</NavLink>
          <br />
          <NavLink to="/vi/form1">Form1</NavLink>
          <br />
          <NavLink to="/vi/form1/childForm1">ChildForm1</NavLink>
          <br />
          <NavLink to="/vi/form1">Form1</NavLink>
          <br />
          <NavLink to="/vi/form1/childForm1">ChildForm1</NavLink>
          <br />
          <NavLink to="/vi/form1">Form1</NavLink>
          <br />
          <NavLink to="/vi/form1/childForm1">ChildForm1</NavLink>
          <br />
          <NavLink to="/vi/form1">Form1</NavLink>
          <br />
          <NavLink to="/vi/form1/childForm1">ChildForm1</NavLink>
          <br />
          <NavLink to="/vi/form1">Form1</NavLink>
          <br />
          <NavLink to="/vi/form1/childForm1">ChildForm1</NavLink>
          <br />
          <NavLink to="/vi/form1">Form1</NavLink>
          <br />
          <NavLink to="/vi/form1/childForm1">ChildForm1</NavLink>
          <br />
          <NavLink to="/vi/form1">Form1</NavLink>
          <br />
          <NavLink to="/vi/form1/childForm1">ChildForm1</NavLink>
          <br />
          <NavLink to="/vi/form1">Form1</NavLink>
          <br />
          <NavLink to="/vi/form1/childForm1">ChildForm1</NavLink>
          <br />
          <NavLink to="/vi/form1">Form1</NavLink>
          <br />
          <NavLink to="/vi/form1/childForm1">ChildForm1</NavLink>
          <br />
          <NavLink to="/vi/form1">Form1</NavLink>
          <br />
          <NavLink to="/vi/form1/childForm1">ChildForm1</NavLink>
          <br />
          <NavLink to="/vi/form1">Form1</NavLink>
          <br />
          <NavLink to="/vi/form1/childForm1">ChildForm1</NavLink>
          <br />
          <NavLink to="/vi/form1">Form1</NavLink>
          <br />
          <NavLink to="/vi/form1/childForm1">ChildForm1</NavLink>
        </div>
      </Drawer>
    </>
  );
}

export default Sidebar;

export const openSidebar = () => {
  store.dispatch(toggleSidebar(true));
};
