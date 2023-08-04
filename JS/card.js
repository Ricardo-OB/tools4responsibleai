async function showCardTool(id) {
    console.log(id);

    // Freeze circle
    let circle = document.getElementById(id);
    let numCircle = document.getElementById("circle-"+id);

    let [cardA, cardB, cardC, cardD] = [document.getElementById("card-tool-A"), document.getElementById("card-tool-B"), document.getElementById("card-tool-C"), document.getElementById("card-tool-D")];
    let jsonCards = {"cardA": cardA, "cardB": cardB, "cardC": cardC, "cardD": cardD};

    let [idToolCA, taskCA, levelDevCA, sectorCA] = [document.getElementById("tool-id-cA"), document.getElementById("task-cA"), document.getElementById("level-dev-cA"), document.getElementById("sector-cA")];
    let [titleCA, otherTitleCA, linksCA] = [document.getElementById("title-cA"), document.getElementById("other-title-cA"), document.getElementById("links-cA")];
    let [stageCA, principlesCA, secPrinciplesCA, taskCA2, levelDevCA2, toolTypeCA, languageCA, urlCA, yearCA, sectorCA2, authorsCA] = 
                                            [document.getElementById("stage-cA"), document.getElementById("principles-cA"), document.getElementById("sec-principles-cA"),
                                             document.getElementById("task-cA-2"), document.getElementById("level-dev-cA-2"), document.getElementById("tool-type-cA"),
                                             document.getElementById("language-cA"), document.getElementById("url-tool-cA"), document.getElementById("year-cA"),
                                             document.getElementById("sector-cA-2"), document.getElementById("authors-cA")];

    let [idToolCB, taskCB, levelDevCB, sectorCB] = [document.getElementById("tool-id-cB"), document.getElementById("task-cB"), document.getElementById("level-dev-cB"), document.getElementById("sector-cB")];
    let [titleCB, otherTitleCB, linksCB] = [document.getElementById("title-cB"), document.getElementById("other-title-cB"), document.getElementById("links-cB")];
    let [stageCB, principlesCB, secPrinciplesCB, taskCB2, levelDevCB2, toolTypeCB, languageCB, urlCB, yearCB, sectorCB2, authorsCB] = 
                                            [document.getElementById("stage-cB"), document.getElementById("principles-cB"), document.getElementById("sec-principles-cB"),
                                            document.getElementById("task-cB-2"), document.getElementById("level-dev-cB-2"), document.getElementById("tool-type-cB"),
                                            document.getElementById("language-cB"), document.getElementById("url-tool-cB"), document.getElementById("year-cB"),
                                            document.getElementById("sector-cB-2"), document.getElementById("authors-cB")];

    let [idToolCC, taskCC, levelDevCC, sectorCC] = [document.getElementById("tool-id-cC"), document.getElementById("task-cC"), document.getElementById("level-dev-cC"), document.getElementById("sector-cC")];
    let [titleCC, otherTitleCC, linksCC] = [document.getElementById("title-cC"), document.getElementById("other-title-cC"), document.getElementById("links-cC")];
    let [stageCC, principlesCC, secPrinciplesCC, taskCC2, levelDevCC2, toolTypeCC, languageCC, urlCC, yearCC, sectorCC2, authorsCC] = 
                                            [document.getElementById("stage-cC"), document.getElementById("principles-cC"), document.getElementById("sec-principles-cC"),
                                            document.getElementById("task-cC-2"), document.getElementById("level-dev-cC-2"), document.getElementById("tool-type-cC"),
                                            document.getElementById("language-cC"), document.getElementById("url-tool-cC"), document.getElementById("year-cC"),
                                            document.getElementById("sector-cC-2"), document.getElementById("authors-cC")];

    let [idToolCD, taskCD, levelDevCD, sectorCD] = [document.getElementById("tool-id-cD"), document.getElementById("task-cD"), document.getElementById("level-dev-cD"), document.getElementById("sector-cD")];
    let [titleCD, otherTitleCD, linksCD] = [document.getElementById("title-cD"), document.getElementById("other-title-cD"), document.getElementById("links-cD")];
    let [stageCD, principlesCD, secPrinciplesCD, taskCD2, levelDevCD2, toolTypeCD, languageCD, urlCD, yearCD, sectorCD2, authorsCD] = 
                                            [document.getElementById("stage-cD"), document.getElementById("principles-cD"), document.getElementById("sec-principles-cD"),
                                            document.getElementById("task-cD-2"), document.getElementById("level-dev-cD-2"), document.getElementById("tool-type-cD"),
                                            document.getElementById("language-cD"), document.getElementById("url-tool-cD"), document.getElementById("year-cD"),
                                            document.getElementById("sector-cD-2"), document.getElementById("authors-cD")];

    let component_tool = document.getElementById(id);
    let num_tool = component_tool.innerText;
    console.log(num_tool);

    let infoTool = getInfoTool(num_tool);

    let idTool = (await infoTool).id, name = (await infoTool).name, otherName = (await infoTool).otherName, description = (await infoTool).description, stage = (await infoTool).stage;
    let highPrinciple = (await infoTool).highPrinciple, lowPrinciple = (await infoTool).lowPrinciple, task = (await infoTool).task, levelDev = (await infoTool).levelDev;
    let sector = (await infoTool).sector, toolType = (await infoTool).toolType, language = (await infoTool).language, urldoi = (await infoTool).urlDoi;
    let year = (await infoTool).year, authors = (await infoTool).authors, links = (await infoTool).links;
    
    for (let key in jsonCards) {
        if (jsonCards.hasOwnProperty(key)) {
          let element = eval(jsonCards[key]); // Evaluar la cadena como una expresión JavaScript
          let display = element.style.display;
          // console.log("Elemento: " + key + ", display: " + display);
          if (display == '' || display == 'none') {
                element.style.display = 'flex';
                if (key == 'cardA') {
                    idToolCA.innerHTML = idTool;
                    taskCA.innerHTML = task;
                    levelDevCA.innerHTML = levelDev;
                    // sectorCA.innerHTML = sector;
                    titleCA.innerHTML = name;
                    otherTitleCA.innerHTML = otherName;
                    stageCA.innerHTML = stage;
                    principlesCA.innerHTML = highPrinciple;
                    secPrinciplesCA.innerHTML = lowPrinciple;
                    // taskCA2.innerHTML = task; // duplicated
                    // levelDevCA2.innerHTML = levelDev; // duplicated
                    toolTypeCA.innerHTML = toolType;
                    languageCA.innerHTML = language;
                    yearCA.innerHTML = year;
                    sectorCA2.innerHTML = sector; // duplicated
                    authorsCA.innerHTML = authors;              
                    urlCA.innerHTML = urldoi;
                    linksCA.innerHTML = links;

                } else if (key == 'cardB') {
                    idToolCB.innerHTML = idTool;
                    taskCB.innerHTML = task;
                    levelDevCB.innerHTML = levelDev;
                    // sectorCB.innerHTML = sector;
                    titleCB.innerHTML = name;
                    otherTitleCB.innerHTML = otherName;
                    stageCB.innerHTML = stage;
                    principlesCB.innerHTML = highPrinciple;
                    secPrinciplesCB.innerHTML = lowPrinciple;
                    // taskCB2.innerHTML = task; // duplicated
                    // levelDevCB2.innerHTML = levelDev; // duplicated
                    toolTypeCB.innerHTML = toolType;
                    languageCB.innerHTML = language;
                    yearCB.innerHTML = year;
                    sectorCB2.innerHTML = sector; // duplicated
                    authorsCB.innerHTML = authors;              
                    urlCB.innerHTML = urldoi;
                    linksCB.innerHTML = links;

                } else if (key == 'cardC') {
                    idToolCC.innerHTML = idTool;
                    taskCC.innerHTML = task;
                    levelDevCC.innerHTML = levelDev;
                    // sectorCC.innerHTML = sector;
                    titleCC.innerHTML = name;
                    otherTitleCC.innerHTML = otherName;
                    stageCC.innerHTML = stage;
                    principlesCC.innerHTML = highPrinciple;
                    secPrinciplesCC.innerHTML = lowPrinciple;
                    // taskCC2.innerHTML = task; // duplicated
                    // levelDevCC2.innerHTML = levelDev; // duplicated
                    toolTypeCC.innerHTML = toolType;
                    languageCC.innerHTML = language;
                    yearCC.innerHTML = year;
                    sectorCC2.innerHTML = sector; // duplicated
                    authorsCC.innerHTML = authors;              
                    urlCC.innerHTML = urldoi;
                    linksCC.innerHTML = links;

                } else if (key == 'cardD') {
                    idToolCD.innerHTML = idTool;
                    taskCD.innerHTML = task;
                    levelDevCD.innerHTML = levelDev;
                    // sectorCD.innerHTML = sector;
                    titleCD.innerHTML = name;
                    otherTitleCD.innerHTML = otherName;
                    stageCD.innerHTML = stage;
                    principlesCD.innerHTML = highPrinciple;
                    secPrinciplesCD.innerHTML = lowPrinciple;
                    // taskCD2.innerHTML = task; // duplicated
                    // levelDevCD2.innerHTML = levelDev; // duplicated
                    toolTypeCD.innerHTML = toolType;
                    languageCD.innerHTML = language;
                    yearCD.innerHTML = year;
                    sectorCD2.innerHTML = sector; // duplicated
                    authorsCD.innerHTML = authors;              
                    urlCD.innerHTML = urldoi;
                    linksCD.innerHTML = links;
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
    let preId = "", Name = "", OtherName = "", Description = "", preStage = "", preHighPrinciple = "", preLowPrinciple = "", preTask = "", preLevelDev = 0;
    let preSector = "", preToolType = "", preLanguage = "", preURLDOI = "", Year = "", Authors = "", preLinks = "";
    
    for (let i=0; i<jsonDataRaw.length; i++){
        let row = jsonDataRaw[i];
            if (row["ID"] == id) {
            //console.log("ID encontrado: " + row["ID"]);
            /*
            ID, Name, Article / Other Name, Description, AI Life Cycle Stage, High Level Principle, Associated Principles, Task, Level of Development, Sector, Tool Type, Programming Language, DOI / URL, Year, Authors / Owners, Other Links 
            */
            preId = row["ID"];
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

    iconsTask = {"Regression": "<div class='badge-task color-R'>R</div>",
            	 "Binary Classification": "<div class='badge-task color-BC'>BC</div>", 
                 "Multi-class Classification": "<div class='badge-task color-MC'>MC</div>", 
                 "Natural Language Processing": "<div class='badge-task color-NLP'>NLP</div>", 
                 "Computer Vision": "<div class='badge-task color-CV'>CV</div>", 
                 "Clustering": "<div class='badge-task color-C'>C</div>", 
                 "Dimensionality Reduction": "<div class='badge-task color-DR'>DR</div>", 
                 "Times Series": "<div class='badge-task color-TS'>TS</div>"};

    iconsSector = {"Private": '<i class="fa fa-solid fa-circle"></i>', 
                   "Public": '<i class="fa fa-solid fa-square"></i>', 
                   "NGO": '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-diamond-fill icon-ngo" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435z"/></svg>', 
                   "Academic": '<i class="fa fa-solid fa-plus"></i>'};

    //#region Id
    let Id = '<i class="fa fa-solid fa-gear icon-id"></i>' + '<p class="text-id">' + preId.toString() + '</p>';
    //#endregion

    //#region Other Name
    if (OtherName == undefined ) {
        OtherName = "";
    }
    //#endregion

    //#region Stage
    let Stage = "";
    let arrayStage = preStage.split("; ");
    arrayStage = [...new Set(arrayStage)];
    if (arrayStage.length > 1) {
        arrayStage.forEach(element => Stage += '<li>' + element + '</li>');
    } else {
        Stage = '<li>' + arrayStage + '</li>';
    }
    //#endregion

    //#region High Principle
    let arrayHighPrinciple = preHighPrinciple.split("; ");
    arrayHighPrinciple = [...new Set(arrayHighPrinciple)];
    let HighPrinciple = "";
    if (arrayHighPrinciple.length > 1) {
        arrayHighPrinciple.forEach(element => HighPrinciple += '<li>' + element + '</li>');
    } else {
        HighPrinciple = '<li>' + arrayHighPrinciple + '</li>';
    }
    //#endregion

    //#region Low Principle
    let arrayLowPrinciple = preLowPrinciple.split("; ");
    let LowPrinciple = "";
    if (arrayLowPrinciple.length > 1) {
        LowPrinciple = preLowPrinciple.replace(/; /g, ", ");
    } else {
        LowPrinciple = preLowPrinciple;
    }
    //#endregion

    //#region Task
    let arrayTask = preTask.split("; ");
    let Task = '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" class="icon-task"><path d="M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>'; 
    if (preTask == "undefined" || preTask == "Does not apply") {
        Task += "<i>No Task</i>";
    } else if (arrayTask.length > 1) {
        arrayTask.forEach(element => Task += iconsTask[element]);
    } else {
        Task += iconsTask[preTask];
    }
    //#endregion

    //#region Sector
    let Sector = "";
    let arraySector = preSector.split("; ");
    if (arraySector.length > 1) {
        arraySector.forEach(element => Sector += iconsSector[element] + "&nbsp;");
    } else {
        Sector = iconsSector[preSector];
    }
    //#endregion

    //#region Level Dev
    let LevelDev = '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" class="icon-level"><path d="M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z"/></svg>';
    if (preLevelDev !== "Does not apply") {
        let numLevelDev = parseInt(preLevelDev);
        if (numLevelDev > 10) {
            LevelDev += '<p class="text-level">' + (numLevelDev / 10.0) + '</p>';
        } else {
            LevelDev += '<p class="text-level">' + numLevelDev + '</p>';
        }
    } else {
        LevelDev += '<i class="text-level"> No Level Dev. </i>';
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
    if (preLinks !== undefined) {
        let arrayLinks = preLinks.split("; ");
        if (arrayLinks.length > 1) {
            arrayLinks.forEach(element => Links += "<a target='_blank' href=" + element + ">" + element + "</a> <br/>");
        } else {
            Links = "<a target='_blank' href=" + preLinks + ">" + preLinks + "</a> <br/>";
        }
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