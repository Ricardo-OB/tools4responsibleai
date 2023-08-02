async function showCardTool(id) {
    console.log(id);
    let [cardA, cardB, cardC, cardD] = [document.getElementById("card-tool-A"), document.getElementById("card-tool-B"), document.getElementById("card-tool-C"), document.getElementById("card-tool-D")];
    let jsonCards = {"cardA": cardA, "cardB": cardB, "cardC": cardC, "cardD": cardD};

    let [idToolCA, taskCA, levelDevCA, sectorCA] = [document.getElementById("tool-id-cA"), document.getElementById("task-cA"), document.getElementById("level-dev-cA"), document.getElementById("sector-cA")];
    let [titleCA, otherTitleCA] = [document.getElementById("title-cA"), document.getElementById("other-title-cA")];
    let urlCA = document.getElementById("url-tool-cA");
    let linksCA = document.getElementById("links-cA");

    let [featureCardA, featureCardB, featureCardC, featureCardD] = [document.getElementById("featured-card-A"), document.getElementById("featured-card-B"), document.getElementById("featured-card-C"), document.getElementById("featured-card-D")];
    let [titleCardA, titleCardB, titleCardC, titleCardD] = [document.getElementById("tool-title-A"), document.getElementById("tool-title-B"), document.getElementById("tool-title-C"), document.getElementById("tool-title-D")];
    let [sectorCardA, sectorCardB, sectorCardC, sectorCardD] = [document.getElementById("card-sector-A"), document.getElementById("card-sector-B"), document.getElementById("card-sector-C"), document.getElementById("card-sector-D")];
    let [taskCardA, taskCardB, taskCardC, taskCardD] = [document.getElementById("card-task-A"), document.getElementById("card-task-B"), document.getElementById("card-task-C"), document.getElementById("card-task-D")];
    let [levelDevCardA, levelDevCardB, levelDevCardC, levelDevCardD] = [document.getElementById("card-level-dev-A"), document.getElementById("card-level-dev-B"), document.getElementById("card-level-dev-C"), document.getElementById("card-level-dev-D")];
    let [urlCardA, urlCardB, urlCardC, urlCardD] = [document.getElementById("card-url-A"), document.getElementById("card-url-B"), document.getElementById("card-url-C"), document.getElementById("card-url-D")];

    let component_tool = document.getElementById(id);
    let num_tool = component_tool.innerText;

    let infoTool = getInfoTool(num_tool);

    let idTool = (await infoTool).id, name = (await infoTool).name, otherName = (await infoTool).otherName, description = (await infoTool).description, stage = (await infoTool).stage;
    let highPrinciple = (await infoTool).highPrinciple, lowPrinciple = (await infoTool).lowPrinciple, task = (await infoTool).task, levelDev = (await infoTool).levelDev;
    let sector = (await infoTool).sector, toolType = (await infoTool).toolType, language = (await infoTool).language, urldoi = (await infoTool).urlDoi;
    let year = (await infoTool).year, authors = (await infoTool).authors, links = (await infoTool).links;
    
    for (var key in jsonCards) {
        if (jsonCards.hasOwnProperty(key)) {
          var element = eval(jsonCards[key]); // Evaluar la cadena como una expresión JavaScript
          var display = element.style.display;
        //   console.log("Elemento: " + key + ", display: " + display);
          if (display == '' || display == 'none') {
                console.log("none");
                element.style.display = 'flex';
                if (key == 'cardA') {
                    idToolCA.innerHTML = "ID " + idTool;
                    taskCA.innerHTML = task;
                    levelDevCA.innerHTML = levelDev;
                    sectorCA.innerHTML = sector;
                    titleCA.innerHTML = name;
                    otherTitleCA.innerHTML = otherName;

                    sectorCardA.innerHTML = sector;
                    taskCardA.innerHTML = task;
                    levelDevCardA.innerHTML = levelDev;
                    
                    urlCA.innerHTML = urldoi;
                    linksCA.innerHTML = links;

                } else if (key == 'cardB') {
                    featureCardB.innerText = "Tool " + id;
                    titleCardB.innerText = (await infoTool).nameT;
                    sectorCardB.innerText = (await infoTool).sector;
                    taskCardB.innerHTML = task;
                    levelDevCardB.innerText = (await infoTool).levelDev;
                    urlCardB.innerText = (await infoTool).url;
                    urlCardB.href = (await infoTool).url;
                } else if (key == 'cardC') {
                    featureCardC.innerText = "Tool " + id;
                    titleCardC.innerText = (await infoTool).nameT;
                    sectorCardC.innerText = (await infoTool).sector;
                    taskCardC.innerHTML = task;
                    levelDevCardC.innerText = (await infoTool).levelDev;
                    urlCardC.innerText = (await infoTool).url;
                    urlCardC.href = (await infoTool).url;
                } else if (key == 'cardD') {
                    featureCardD.innerText = "Tool " + id;
                    titleCardD.innerText = (await infoTool).nameT;
                    sectorCardD.innerText = (await infoTool).sector;
                    taskCardD.innerHTML = task;
                    levelDevCardD.innerText = (await infoTool).levelDev;
                    urlCardD.innerText = (await infoTool).url;
                    urlCardD.href = (await infoTool).url;
                }
                break;
            }
        }
    }

}

async function getInfoTool(id) {

    const url = 'https://raw.githubusercontent.com/Ricardo-OB/tools4responsibleai/master/csv/final_resources_v2.csv';
    const options = {
        url,
        responseType: "arraybuffer"
    }
    let axiosResponse = await axios(options);
    const workbook = XLSX.read(axiosResponse.data);

    let firstSheetName = workbook.SheetNames[0];
    let jsonDataRaw = XLSX.utils.sheet_to_json(workbook.Sheets[firstSheetName]);

    // console.log(jsonDataRaw);
    // console.log(jsonDataRaw.length);
    let Id = "", Name = "", OtherName = "", Description = "", preStage = "", preHighPrinciple = "", preLowPrinciple = "", preTask = "", preLevelDev = 0;
    let preSector = "", preToolType = "", preLanguage = "", preURLDOI = "", Year = "", Authors = "", preLinks = "";
    
    for (let i=0; i<jsonDataRaw.length; i++){
        let row = jsonDataRaw[i];
            if (row["ID"] == id) {
            console.log("ID encontrado: " + row["ID"]);
            /*
            ID, Name, Article / Other Name, Description, AI Life Cycle Stage, High Level Principle, Associated Principles, Task, Level of Development, Sector, Tool Type, Programming Language, DOI / URL, Year, Authors / Owners, Other Links 
            */
            Id = row["ID"];
            Name = row["Name"];
            OtherName = row["Article / Other Name"];
            Description = row["Description"];
            preStage = row["AI Life Cycle Stage"];
            preHighPrinciple = row["High Level Principle"];
            preLowPrinciple = row["Associated Principles"];
            preTask = row["Task"];
            preLevelDev = row["Level of Development"];
            preSector = row["Sector"];
            preToolType = row["Tool Type"];
            preLanguage = row["Programming Language"];
            preURLDOI = row["DOI / URL"];
            Year = row["Year"];
            Authors = row["Authors / Owners"];
            preLinks = row["Other Links"];
            break;
        }
    }

    //#region Other Name
    if (OtherName == undefined ) {
        OtherName = "";
    }
    //#endregion

    //#region Stage
    let arrayStage = preStage.split("; ");
    let Stage = "";
    if (arrayStage.length > 1) {
        arrayStage.forEach(element => Stage += element + "<br/>");
    } else {
        Stage = preStage;
    }
    //#endregion

    //#region High Principle
    let arrayHighPrinciple = preHighPrinciple.split("; ");
    let HighPrinciple = "";
    if (arrayHighPrinciple.length > 1) {
        arrayHighPrinciple.forEach(element => HighPrinciple += element + "<br/>");
    } else {
        HighPrinciple = preHighPrinciple;
    }
    //#endregion

    //#region Low Principle
    let arrayLowPrinciple = preLowPrinciple.split("; ");
    let LowPrinciple = "";
    if (arrayLowPrinciple.length > 1) {
        arrayLowPrinciple.forEach(element => LowPrinciple += element + "<br/>");
    } else {
        LowPrinciple = preLowPrinciple;
    }
    //#endregion

    //#region Task
    let arrayTask = preTask.split("; ");
    let Task = "";
    if (arrayTask.length > 1) {
        arrayTask.forEach(element => Task += "<p>" + element + "</p>");
    } else {
        Task = preTask;
    }
    //#endregion

    //#region Sector
    let Sector = "";
    let arraySector = preSector.split("; ");
    if (arraySector.length > 1) {
        arraySector.forEach(element => Sector += element + "<br/>");
    } else {
        Sector = preSector;
    }
    //#endregion

    //#region Level Dev
    let LevelDev = 0;
    if (preLevelDev !== "Does not apply") {
        LevelDev = parseInt(preLevelDev);
        if (LevelDev > 10) {
            LevelDev = LevelDev / 10.0;
        }
    } else {
        LevelDev = preLevelDev;
    }
    //#endregion

    //#region Tool Type
    let ToolType = "";
    let arrayToolType = preToolType.split("; ");
    if (arrayToolType.length > 1) {
        arrayToolType.forEach(element => ToolType += "<p>" + element + "</p>");
    } else {
        ToolType = preToolType;
    }
    //#endregion

    //#region Language
    let Language = "";
    let arrayLanguage = preLanguage.split("; ");
    if (arrayLanguage.length > 1) {
        arrayLanguage.forEach(element => Language += element + "<br/>");
    } else {
        Language = preLanguage;
    }
    //#endregion

    //#region URL / DOI
    let URLDOI = "<a target='_blank' href=" + preURLDOI + ">" + preURLDOI + "</a> <br/>";
    //#endregion
    
    //#region Links
    let Links = "";
    let arrayLinks = preLinks.split("; ");
    if (arrayLinks.length > 1) {
        arrayLinks.forEach(element => Links += "<a target='_blank' href=" + element + ">" + element + "</a> <br/>");
    } else {
        Links = "<a target='_blank' href=" + preLinks + ">" + preLinks + "</a> <br/>";
    }
    //#endregion


    return {id: Id, name: Name, otherName: OtherName, description: Description, stage: Stage, highPrinciple: HighPrinciple, lowPrinciple: LowPrinciple,
            task: Task, levelDev: LevelDev, sector: Sector, toolType: ToolType, language: Language, urlDoi: URLDOI, year: Year, authors: Authors, links: Links};
}

async function cleanCardA(){
    let cardA = document.getElementById("card-tool-A");
    cardA.style.display = 'none';
}

async function cleanCardB(){
    let cardB = document.getElementById("card-tool-B");
    cardB.style.display = 'none';
}

async function cleanCardC(){
    let cardC = document.getElementById("card-tool-C");
    cardC.style.display = 'none';
}

async function cleanCardD(){
    let cardD = document.getElementById("card-tool-D");
    cardD.style.display = 'none';
}