console.log("Working...");

import axios from "axios";
import XLSX from "xlsx";
import jsontoxml from "jsontoxml";

async function testAxiosXlsx(url) {
    const options = { 
        url,
        responseType: "arraybuffer"
    }
    let axiosResponse = await axios(options);
    const workbook = XLSX.read(axiosResponse.data);

    let worksheets = workbook.SheetNames.map(sheetName => {
        return { sheetName, data: XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]) };
    });

    console.log("json:\n", JSON.stringify(worksheets), "\n\n");
    console.log("xml:\n", jsontoxml(worksheets, {}));
}

testAxiosXlsx("https://file-examples.com/wp-content/uploads/2017/02/file_example_XLSX_10.xlsx");