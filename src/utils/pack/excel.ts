const exportXLS = (idTable: string, filename: string) => {
  const table: any = document.getElementById(idTable)?.outerHTML;
  if (!table) {
    throw new Error("Not found table id!");
  }

  filename = filename + ".xls";

  const uri = "data:application/vnd.ms-excel;base64,";

  const template =
    '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-mic' +
    'rosoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta cha' +
    'rset="UTF-8"><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:Exce' +
    "lWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/>" +
    "</x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></" +
    "xml><![endif]--></head><body>{table}</body></html>";

  const context = {
    worksheet: "Worksheet",
    table: table,
  };

  const convertToBase64 = (s: string) => window.btoa(unescape(encodeURIComponent(s)));
  const format = (s: string, c: any) =>
    s.replace(/{(\w+)}/g, (m: any, p: any) => {
      return c[p];
    });

  const element = window.document.createElement("a");
  element.href = uri + convertToBase64(format(template, context));
  element.download = filename;
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};

const excel = {
  exportXLS,
};

export default excel;
