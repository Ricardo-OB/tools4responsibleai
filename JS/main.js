console.log("Working...");

async function processCSV(url) {
    const options = {
        url,
        responseType: "arraybuffer"
    }
    let axiosResponse = await axios(options);
    const workbook = XLSX.read(axiosResponse.data);

    let firstSheetName = workbook.SheetNames[0];
    let jsonDataRaw = XLSX.utils.sheet_to_json(workbook.Sheets[firstSheetName]);

    //console.log(jsonDataRaw);

    for (let i=0; i<48; i++){
        let row = jsonDataRaw[i];
        let dataRow = row["Other Links"];
    }

    //console.log(jsonDataRaw.length);

    let table = document.getElementById("display_excel_data");

    /*
    ID, Name, Article / Other Name, Description, AI Life Cycle Stage, High Level Principle, Associated Principles, Task, Level of Development, Sector, Tool Type, Programming Language, DOI / URL, Year, Authors / Owners, Other Links 
    */

    if (jsonDataRaw.length > 0){
        let htmlData = `<tr>
                            <th class="th-1-width">ID</th>
                            <th class="th-2-width">NAME</th>
                            <th class="th-3-width">ARTICLE/OTHER NAME</th>
                            <th class="th-4-width">AI LIFE CYCLE STAGE</th>
                            <th class="th-5-width">HIGH LEVEL PRINCIPLE</th>
                            <th class="th-6-width">ASSOCIATED PRINCIPLES</th>
                            <th class="th-7-width">TASK</th>
                            <th class="th-8-width">LEVEL OF DEVELOPMENT</th>
                            <th class="th-9-width">SECTOR</th>
                            <th class="th-10-width">TOOL TYPE</th>
                            <th class="th-11-width">PROGRAMMING LANGUAGE</th>
                            <th class="th-12-width">DOI/URL</th>
                            <th class="th-13-width">YEAR</th>
                            <th class="th-14-width">AUTHOR/OWNER</th>
                            <th class="th-15-width">OTHER LINKS</th>
                        </tr>`;

        for (let i=0; i<jsonDataRaw.length; i++){
            let row = jsonDataRaw[i];

            let stage = "";
            let dataRowStage = row["AI Life Cycle Stage"];
            let arrayStage = dataRowStage.split("; ");
            arrayStage.forEach(element => stage += element + "<br/><br/>");

            let highPrinciple = "";
            let dataRowHighPrinciple = row["High Level Principle"];
            let arrayHighPrinciple = dataRowHighPrinciple.split("; ");
            arrayHighPrinciple.forEach(element => highPrinciple += element + "<br/><br/>");

            let lowPrinciple = "";
            let dataRowLowPrinciple = row["Associated Principles"];
            let arrayLowPrinciple = dataRowLowPrinciple.split("; ");
            arrayLowPrinciple.forEach(element => lowPrinciple += element + "<br/>");

            let task;
            let dataRowTask = row["Task"];
            if (dataRowTask !== "Does not apply") {
                task = "";
                let arrayTask = dataRowTask.split("; ");
                arrayTask.forEach(element => task += element + "<br/>");
            } else {
                task = row["Task"];
            }

            let levelDev;
            let dataRowLevelDev = row["Level of Development"];
            if (dataRowLevelDev !== "Does not apply") {
                levelDev = parseInt(dataRowLevelDev)
                if (levelDev > 10) {
                    levelDev = levelDev / 10.0
                }
            } else {
                levelDev = row["Level of Development"];
            }

            let sector = "";
            let dataRowSector = row["Sector"];
            let arraySector = dataRowSector.split("; ");
            arraySector.forEach(element => sector += element + "<br/>");

            let toolType = "";
            let dataRowToolType = row["Tool Type"];
            let arrayToolType = dataRowToolType.split("; ");
            arrayToolType.forEach(element => toolType += element + "<br/>");

            let language;
            let dataRowLanguage = row["Programming Language"];
            if (dataRowLanguage !== "Does not apply") {
                language = "";
                let arrayLanguage = dataRowLanguage.split("; ");
                arrayLanguage.forEach(element => language += element + "<br/>");
            } else {
                language = row["Programming Language"];
            }

            let dataRow = row["Other Links"];
            let arrayLinks, finalLinks = "";
            if (dataRow !== undefined) {
                arrayLinks = dataRow.split("\n\n");
                arrayLinks.forEach(element => finalLinks += "<a target='_blank' href=" + element + ">" + element + "</a> <br/><br/>");
            } else {
                finalLinks = "";
            }

            let dataRowOtherName = row["Article / Other Name"];
            if (dataRowOtherName == undefined ) {
                dataRowOtherName = "";
            }

            let dataRowDOI = "<a target='_blank' href=" + row["DOI / URL"] + ">" + row["DOI / URL"] + "</a>";

            htmlData += '<tr><td>'+ row["ID"] +
                        '</td><td>' + row["Name"] +
                        '</td><td>' + dataRowOtherName +
                        '</td><td>' + stage +
                        '</td><td>' + highPrinciple +
                        '</td><td>' + lowPrinciple +
                        '</td><td>' + task +
                        '</td><td>' + levelDev +
                        '</td><td>' + sector +
                        '</td><td>' + toolType +
                        '</td><td>' + language +
                        '</td><td>' + dataRowDOI +
                        '</td><td>' + row["Year"] +
                        '</td><td>' + row["Authors / Owners"] +
                        '</td><td>' + finalLinks + '</td></tr>';
        }
        table.innerHTML = htmlData;
    } else {
        table.innerHTML = 'There is no data in Excel';
    }

    //initializePerfectScrollbar();
}

// const url_main = 'https://raw.githubusercontent.com/Ricardo-OB/tools-ethical-dev-ai/master/csv/herramientas_prueba.csv';
const url_main = 'https://raw.githubusercontent.com/Ricardo-OB/tools-ethical-dev-ai/master/csv/final_resources.csv';

async function initializePerfectScrollbar() {
    
    const tableContainer = document.querySelector('.table-responsive');
    const table = document.getElementById('display_excel_data');

    if (table.rows.length > 5) {
        const psVertical = new PerfectScrollbar(tableContainer, {
            suppressScrollX: true,
        });
    }

    if (table.rows[0].cells.length > 5) {
        const psHorizontal = new PerfectScrollbar(table, {
            suppressScrollY: true,
        });
    }
}

processCSV(url_main);