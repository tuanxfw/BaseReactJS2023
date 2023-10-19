import { dateUtil } from "@utils/commonUtil";
import dayjs from "dayjs";
import * as XLSX from "xlsx";

export interface sheetDataExport {
  data: any[];
  headers: string[];
  name: string;
}

const readXlsx = (file: any, config: XLSX.Sheet2JSONOpts = { header: 2 }, sheetIndex = 0): Promise<any> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const workbook = XLSX.read(reader.result, { type: "binary" });

      const sheet = workbook.SheetNames[sheetIndex];

      const excelRows = XLSX.utils.sheet_to_json(workbook.Sheets[sheet], config);

      resolve(excelRows);
    };
    reader.onerror = (error) => reject(error);
  });

const writeXlsx = (listSheetData: sheetDataExport[], fileName: string, options: XLSX.JSON2SheetOpts) => {
  const wb = XLSX.utils.book_new();

  listSheetData.map((sheetData: sheetDataExport) => {
    const { data, headers, name } = sheetData;

    const ws = XLSX.utils.json_to_sheet(data, options);
    ws["!cols"] = headers.map(() => ({ wch: 30 }));

    XLSX.utils.sheet_add_aoa(ws, [headers], { origin: 0 });

    XLSX.utils.book_append_sheet(wb, ws, name);
  });

  XLSX.writeFile(wb, fileName);
};

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

const base64ToXlsx = (base64: string, fileName: string) => {
  try {
    const mediaType = "data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,";

    const a: HTMLAnchorElement = document.createElement("a");
    a.href = mediaType + base64;
    a.download = fileName;

    a.click();
  } catch (error) {
    console.error(error);
  }
};

const serialDateToDateString = (serial: string, formatDate: string) => {
  let result = null;

  try {
    const utcDays = Math.floor(Number(serial) - 25569);
    const utcValue = utcDays * 86400;
    const date = new Date(utcValue * 1000);

    result = dateUtil.dateToString(dayjs(date), formatDate);
  } catch (error) {
    result = null;
    console.log(error);
  }

  return result;
};

const excel = {
  readXlsx,
  writeXlsx,
  exportTableToXLS,
  base64ToXlsx,
  serialDateToDateString,
  numToAlpha,
  alphaToNum,
};

export default excel;
