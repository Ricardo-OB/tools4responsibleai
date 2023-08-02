async function showCardTool(id) {
    console.log(id);
    let [cardA, cardB, cardC, cardD] = [document.getElementById("card-tool-A"), document.getElementById("card-tool-B"), document.getElementById("card-tool-C"), document.getElementById("card-tool-D")];
    let jsonCards = {"cardA": cardA, "cardB": cardB, "cardC": cardC, "cardD": cardD};

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

    let enlacesJoint = (await infoTool).links;
    let enlaces = enlacesJoint.split("\n\n"); // array con enlaces
    
    for (var key in jsonCards) {
        if (jsonCards.hasOwnProperty(key)) {
          var element = eval(jsonCards[key]); // Evaluar la cadena como una expresión JavaScript
          var display = element.style.display;
        //   console.log("Elemento: " + key + ", display: " + display);
          if (display == '' || display == 'none') {
                console.log("none");
                element.style.display = 'flex';
                if (key == 'cardA') {
                    featureCardA.innerText = "Tool " + idTool;
                    titleCardA.innerText = (await infoTool).nameT;
                    sectorCardA.innerText = (await infoTool).sector;
                    taskCardA.innerText = (await infoTool).task;
                    levelDevCardA.innerText = (await infoTool).levelDev;
                    urlCardA.innerText = links;
                    urlCardA.href = (await infoTool).url;
                } else if (key == 'cardB') {
                    featureCardB.innerText = "Tool " + id;
                    titleCardB.innerText = (await infoTool).nameT;
                    sectorCardB.innerText = (await infoTool).sector;
                    taskCardB.innerText = (await infoTool).task;
                    levelDevCardB.innerText = (await infoTool).levelDev;
                    urlCardB.innerText = (await infoTool).url;
                    urlCardB.href = (await infoTool).url;
                } else if (key == 'cardC') {
                    featureCardC.innerText = "Tool " + id;
                    titleCardC.innerText = (await infoTool).nameT;
                    sectorCardC.innerText = (await infoTool).sector;
                    taskCardC.innerText = (await infoTool).task;
                    levelDevCardC.innerText = (await infoTool).levelDev;
                    urlCardC.innerText = (await infoTool).url;
                    urlCardC.href = (await infoTool).url;
                } else if (key == 'cardD') {
                    featureCardD.innerText = "Tool " + id;
                    titleCardD.innerText = (await infoTool).nameT;
                    sectorCardD.innerText = (await infoTool).sector;
                    taskCardD.innerText = (await infoTool).task;
                    levelDevCardD.innerText = (await infoTool).levelDev;
                    urlCardD.innerText = (await infoTool).url;
                    urlCardD.href = (await infoTool).url;
                }
                break;
            }
        }
    }

    // if (cardA.style.display == 'flex') {
    //     cardA.style.display = 'none';
    // } else {
    //     cardA.style.display = 'flex';
    //     featureCardA.innerText = "Tool " + id;
    //     titleCardA.innerText = (await infoTool).nameT;
    //     sectorCardA.innerText = (await infoTool).sector;
    //     taskCardA.innerText = (await infoTool).task;
    //     levelDevCardA.innerText = (await infoTool).levelDev;
    //     urlCardA.innerText = (await infoTool).url;
    //     urlCardA.href = (await infoTool).url;
    // }
}

async function getInfoTool(id) {

    const url = 'https://raw.githubusercontent.com/Ricardo-OB/tools-ethical-dev-ai/master/csv/final_resources_v2.csv';
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

    let Id = "", Name = "", OtherName = "", Description = "", Stage = "", HighPrinciple = "", LowPrinciple = "", Task = "", LevelDev = "", Sector = "", ToolType = "", Language = "", URLDOI = "", Year = "", Authors = "", Links = "";
    
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
            Stage = row["AI Life Cycle Stage"];
            HighPrinciple = row["High Level Principle"];
            LowPrinciple = row["Associated Principles"];
            Task = row["Task"];
            LevelDev = row["Level of Development"];
            Sector = row["sector"];
            ToolType = row["Tool Type"];
            Language = row["Programming Language"];
            URLDOI = row["DOI / URL"];
            Year = row["Year"];
            Authors = row["Authors / Owners"];
            Links = row["Other Links"];
            break;
        }
    }

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