const exportTableToXLS = (idTable: string, filename: string) => {
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
  const format = (s: string, c: any) => s.replace(/{(\w+)}/g, (m: any, p: any) => c[p]);

  const element = window.document.createElement("a");
  element.href = uri + convertToBase64(format(template, context));
  element.download = filename;
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};

const numToAlpha = (num: number) => {
  let alpha = "";

  for (; num >= 0; num = parseInt(String(num / 26), 10) - 1) {
    alpha = String.fromCharCode((num % 26) + 0x41) + alpha;
  }

  return alpha;
};

const alphaToNum = (alpha: string) => {
  alpha = String(alpha || "").toUpperCase();

  let i = 0;
  let num = 0;
  const len = alpha.length;

  for (; i < len; i++) {
    num = num * 26 + alpha.charCodeAt(i) - 0x40;
  }

  return num - 1;
};

const excel = {
  exportTableToXLS,
  numToAlpha,
  alphaToNum,
};

export default excel;
