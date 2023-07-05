const sizeLayout = {
  headerHeight: "50px",
  breadcrumbHeight: "30px",
  sidebarWidth: "400px",
  bodyHeight: "",
  footerHeight: "30px",
};
sizeLayout.bodyHeight = `100vh - ${sizeLayout.headerHeight} - ${sizeLayout.breadcrumbHeight} - ${sizeLayout.footerHeight}`;

export default sizeLayout;
