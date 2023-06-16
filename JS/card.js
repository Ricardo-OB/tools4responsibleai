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

    let original = 'Card -';

    let values = getInfoTool(id);
    let enlacesJoint = (await values).links;
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
                    featureCardA.innerText = "Tool " + id;
                    titleCardA.innerText = (await values).nameT;
                    sectorCardA.innerText = (await values).sector;
                    taskCardA.innerText = (await values).task;
                    levelDevCardA.innerText = (await values).levelDev;
                    urlCardA.innerText = (await values).url;
                    urlCardA.href = (await values).url;
                } else if (key == 'cardB') {
                    featureCardB.innerText = "Tool " + id;
                    titleCardB.innerText = (await values).nameT;
                    sectorCardB.innerText = (await values).sector;
                    taskCardB.innerText = (await values).task;
                    levelDevCardB.innerText = (await values).levelDev;
                    urlCardB.innerText = (await values).url;
                    urlCardB.href = (await values).url;
                } else if (key == 'cardC') {
                    featureCardC.innerText = "Tool " + id;
                    titleCardC.innerText = (await values).nameT;
                    sectorCardC.innerText = (await values).sector;
                    taskCardC.innerText = (await values).task;
                    levelDevCardC.innerText = (await values).levelDev;
                    urlCardC.innerText = (await values).url;
                    urlCardC.href = (await values).url;
                } else if (key == 'cardD') {
                    featureCardD.innerText = "Tool " + id;
                    titleCardD.innerText = (await values).nameT;
                    sectorCardD.innerText = (await values).sector;
                    taskCardD.innerText = (await values).task;
                    levelDevCardD.innerText = (await values).levelDev;
                    urlCardD.innerText = (await values).url;
                    urlCardD.href = (await values).url;
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
    //     titleCardA.innerText = (await values).nameT;
    //     sectorCardA.innerText = (await values).sector;
    //     taskCardA.innerText = (await values).task;
    //     levelDevCardA.innerText = (await values).levelDev;
    //     urlCardA.innerText = (await values).url;
    //     urlCardA.href = (await values).url;
    // }
}

async function getInfoTool(id) {
    let Name = "", Task = "", Sector = "", LevelDev = "", URL = "", Year = "", Authors = "", Links = "";
    url = "https://raw.githubusercontent.com/Ricardo-OB/tools-ethical-dev-ai/master/csv/herramientas_prueba.csv";
    const options = {
        url,
        responseType: "arraybuffer"
    }
    let axiosResponse = await axios(options);
    const workbook = XLSX.read(axiosResponse.data);

    let firstSheetName = workbook.SheetNames[0];
    let jsonDataRaw = XLSX.utils.sheet_to_json(workbook.Sheets[firstSheetName]);

    console.log(jsonDataRaw);
    console.log(jsonDataRaw.length);

    for (let i=0; i<jsonDataRaw.length; i++){
        let row = jsonDataRaw[i];
        if (row["ID"] == id) {
          console.log("ID encontrado: " + row["ID"]);
          Name = row["NAME"];
          Task = row["TASK"];
          Sector = row["SECTOR"];
          LevelDev = row["LEVEL_DEV"];
          URL = row["DOI/URL"];
          Year = row["YEAR"];
          Authors = row["AUTHOR(S)"];
          Links = row["OTHER_LINKS"];
          break;
        }
    }

    return {nameT: Name, task: Task, sector: Sector, levelDev: LevelDev, url: URL, year: Year, autohrs: Authors, links: Links};
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