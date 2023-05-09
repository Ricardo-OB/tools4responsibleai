console.log("Working...");

import {axios} from 'axios';
import {XLSX} from 'xlsx';

// const axios = require('axios');
// const XLSX = require('xlsx');

async function displayJsonToHtmlTable(jsonData){
    if (typeof document !== 'undefined') {
        let table = document.getElementById("display_excel_data");
        if (jsonData.length > 0){
            let htmlData = `<tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>TASK</th>
                                <th>SECTOR</th>
                                <th>LEVEL_DEV</th>
                                <th>DOI/URL</th>
                                <th>YEAR</th>
                                <th>AUTHOR(S)</th>
                                <th>OTHER_LINKS</th>
                            </tr>`;
            for (let i=0; i<jsonData.length; i++){
                let row = jsonData[i];
                htmlData += '<tr><td>'+ row["ID"] + '</td><td>' + row["NAME"] +'</td><td>' + row["TASK"] + '</td><td>' + row["SECTOR"] + '</td>'
                            '<td>'+ row["LEVEL_DEV"] + '</td><td>' + row["DOI/URL"] +'</td><td>' + row["YEAR"] + '</td><td>' + row["AUTHOR(S)"] + '</td>'
                            '<td>'+ row["OTHER_LINKS"] + '</td></tr>';
            }
            table.innerHTML = htmlData;
        } else {
            table.innerHTML='There is no data in Excel';
        }
    }
}

async function testAxiosXlsx(url) {
    const options = { 
        url,
        responseType: "arraybuffer"
    }
    let axiosResponse = await axios(options);
    const workbook = XLSX.read(axiosResponse.data);

    let firstSheetName = workbook.SheetNames[0];
    let jsonDataRaw = XLSX.utils.sheet_to_json(workbook.Sheets[firstSheetName]);

    // console.log(jsonDataRaw);

    // for (let i=0; i<jsonDataRaw.length; i++){
    //     let row = jsonDataRaw[i];
    //     console.log(row["NAME"]);
    // }

    return jsonDataRaw;
}

const url_main = "https://github.com/Ricardo-OB/tools-ethical-dev-ai/raw/master/csv/herramientas_prueba.xlsx";
let json = testAxiosXlsx(url_main);
displayJsonToHtmlTable(json);