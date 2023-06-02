async function showCardTool(id) {
  let card = document.getElementById("card-tool");
  let featureCard = document.getElementById("featured-card");
  let titleCard = document.getElementById("tool-title");
  let sectorCard = document.getElementById("card-sector");
  let taskCard = document.getElementById("card-task");
  let levelDevCard = document.getElementById("card-level-dev");
  let urlCard = document.getElementById("card-url");

  let values = getInfoTool(id);
  let enlacesJoint = (await values).links;
  let enlaces = enlacesJoint.split("\n\n");
  
  for (let i=0; i<enlaces.length; i++) {
      console.log(enlaces[i]);
  }

  if (card.style.display == 'flex') {
      card.style.display = 'none';
  } else {
      card.style.display = 'flex';
      featureCard.innerText = "Tool " + id;
      titleCard.innerText = (await values).nameT;
      sectorCard.innerText = (await values).sector;
      taskCard.innerText = (await values).task;
      levelDevCard.innerText = (await values).levelDev;
      urlCard.innerText = (await values).url;
      urlCard.href = (await values).url;
  }
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