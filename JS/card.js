console.log("Working...");

async function addTitles() {
    let allNumbers = document.getElementsByClassName("number");
    let allCircles = document.getElementsByClassName("tiny-circle-shape");

    let infoDict = await getIdName();

    for (let i=0; i<allNumbers.length; i++) {
        let num = allNumbers[i].innerHTML;
        allNumbers[i].title = infoDict[num];
        allCircles[i].title = infoDict[num];
    }
}

async function getIdName() {

    const url = 'https://raw.githubusercontent.com/Ricardo-OB/tools4responsibleai/master/csv/final_resources_v2.csv';
    const options = {
        url,
        responseType: "arraybuffer"
    }
    let axiosResponse = await axios(options);
    const workbook = XLSX.read(axiosResponse.data);

    let firstSheetName = workbook.SheetNames[0];
    let jsonDataRaw = XLSX.utils.sheet_to_json(workbook.Sheets[firstSheetName]);

    let dict = {};
    
    for (let i=0; i<jsonDataRaw.length; i++){
        let row = jsonDataRaw[i];
        dict[row["ID"].toString()] = row["Name"].toString();
    }

    return dict;
}


async function showCardTool(id) {
    // console.log(id);

    let [cardA, cardB, cardC, cardD] = [document.getElementById("card-tool-A"), document.getElementById("card-tool-B"), document.getElementById("card-tool-C"), document.getElementById("card-tool-D")];
    let jsonCards = {"cardA": cardA, "cardB": cardB, "cardC": cardC, "cardD": cardD};

    let [idToolCA, taskCA, levelDevCA, sectorCA] = [document.getElementById("tool-id-cA"), document.getElementById("task-cA"), document.getElementById("level-dev-cA"), document.getElementById("sector-cA")];
    let [titleCA, otherTitleCA, linksCA] = [document.getElementById("title-cA"), document.getElementById("other-title-cA"), document.getElementById("links-cA")];
    let [stageCA, principlesCA, secPrinciplesCA, taskCA2, levelDevCA2, toolTypeCA, languageCA, urlCA, yearCA, sectorCA2, authorsCA] = 
                                            [document.getElementById("stage-cA"), document.getElementById("principles-cA"), document.getElementById("sec-principles-cA"),
                                             document.getElementById("task-cA-2"), document.getElementById("level-dev-cA-2"), document.getElementById("tool-type-cA"),
                                             document.getElementById("language-cA"), document.getElementById("url-tool-cA"), document.getElementById("year-cA"),
                                             document.getElementById("sector-cA-2"), document.getElementById("authors-cA")];
    let idHiddenCA = document.getElementById('tool-id-cA-hidden');

    let [idToolCB, taskCB, levelDevCB, sectorCB] = [document.getElementById("tool-id-cB"), document.getElementById("task-cB"), document.getElementById("level-dev-cB"), document.getElementById("sector-cB")];
    let [titleCB, otherTitleCB, linksCB] = [document.getElementById("title-cB"), document.getElementById("other-title-cB"), document.getElementById("links-cB")];
    let [stageCB, principlesCB, secPrinciplesCB, taskCB2, levelDevCB2, toolTypeCB, languageCB, urlCB, yearCB, sectorCB2, authorsCB] = 
                                            [document.getElementById("stage-cB"), document.getElementById("principles-cB"), document.getElementById("sec-principles-cB"),
                                            document.getElementById("task-cB-2"), document.getElementById("level-dev-cB-2"), document.getElementById("tool-type-cB"),
                                            document.getElementById("language-cB"), document.getElementById("url-tool-cB"), document.getElementById("year-cB"),
                                            document.getElementById("sector-cB-2"), document.getElementById("authors-cB")];
    let idHiddenCB = document.getElementById('tool-id-cB-hidden');

    let [idToolCC, taskCC, levelDevCC, sectorCC] = [document.getElementById("tool-id-cC"), document.getElementById("task-cC"), document.getElementById("level-dev-cC"), document.getElementById("sector-cC")];
    let [titleCC, otherTitleCC, linksCC] = [document.getElementById("title-cC"), document.getElementById("other-title-cC"), document.getElementById("links-cC")];
    let [stageCC, principlesCC, secPrinciplesCC, taskCC2, levelDevCC2, toolTypeCC, languageCC, urlCC, yearCC, sectorCC2, authorsCC] = 
                                            [document.getElementById("stage-cC"), document.getElementById("principles-cC"), document.getElementById("sec-principles-cC"),
                                            document.getElementById("task-cC-2"), document.getElementById("level-dev-cC-2"), document.getElementById("tool-type-cC"),
                                            document.getElementById("language-cC"), document.getElementById("url-tool-cC"), document.getElementById("year-cC"),
                                            document.getElementById("sector-cC-2"), document.getElementById("authors-cC")];
    let idHiddenCC = document.getElementById('tool-id-cC-hidden');

    let [idToolCD, taskCD, levelDevCD, sectorCD] = [document.getElementById("tool-id-cD"), document.getElementById("task-cD"), document.getElementById("level-dev-cD"), document.getElementById("sector-cD")];
    let [titleCD, otherTitleCD, linksCD] = [document.getElementById("title-cD"), document.getElementById("other-title-cD"), document.getElementById("links-cD")];
    let [stageCD, principlesCD, secPrinciplesCD, taskCD2, levelDevCD2, toolTypeCD, languageCD, urlCD, yearCD, sectorCD2, authorsCD] = 
                                            [document.getElementById("stage-cD"), document.getElementById("principles-cD"), document.getElementById("sec-principles-cD"),
                                            document.getElementById("task-cD-2"), document.getElementById("level-dev-cD-2"), document.getElementById("tool-type-cD"),
                                            document.getElementById("language-cD"), document.getElementById("url-tool-cD"), document.getElementById("year-cD"),
                                            document.getElementById("sector-cD-2"), document.getElementById("authors-cD")];
    let idHiddenCD = document.getElementById('tool-id-cD-hidden');

    let component_tool = document.getElementById(id);
    let num_tool = component_tool.innerText;
    // console.log(num_tool);

    let infoTool = getInfoTool(num_tool);

    let idTool = (await infoTool).id, name = (await infoTool).name, otherName = (await infoTool).otherName, description = (await infoTool).description, stage = (await infoTool).stage;
    let highPrinciple = (await infoTool).highPrinciple, lowPrinciple = (await infoTool).lowPrinciple, task = (await infoTool).task, levelDev = (await infoTool).levelDev;
    let sector = (await infoTool).sector, toolType = (await infoTool).toolType, language = (await infoTool).language, urldoi = (await infoTool).urlDoi;
    let year = (await infoTool).year, authors = (await infoTool).authors, links = (await infoTool).links;
    let sectLanguage = (await infoTool).sectLanguage;
    
    for (let key in jsonCards) {
        if (jsonCards.hasOwnProperty(key)) {
          let element = eval(jsonCards[key]); // Evaluar la cadena como una expresión JavaScript
          let display = element.style.display;
          // console.log("Elemento: " + key + ", display: " + display);
          if (display == '' || display == 'none') {
                element.style.display = 'flex';

                // Freeze circle
                let circle = document.getElementsByClassName("circle-"+id)[0];
                let numCircle = document.getElementById(id);
                circle.classList.add("active-circle-hover");
                numCircle.classList.add("active-circle-number-hover");

                if (key == 'cardA') {
                    if (sectLanguage == false) {
                        let langSectionA = document.getElementsByClassName("seventh-card-section-A")[0];
                        langSectionA.style.display = "none";
                    }
                    idToolCA.innerHTML = idTool;
                    idHiddenCA.innerHTML = id;
                    taskCA.innerHTML = task;
                    levelDevCA.innerHTML = levelDev;
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
                    sectorCA.innerHTML = sector;
                    // sectorCA2.innerHTML = sector; // duplicated
                    authorsCA.innerHTML = authors;              
                    urlCA.innerHTML = urldoi;
                    linksCA.innerHTML = links;

                } else if (key == 'cardB') {
                    if (sectLanguage == false) {
                        let langSectionB = document.getElementsByClassName("seventh-card-section-B")[0];
                        langSectionB.style.display = "none";
                    }
                    idToolCB.innerHTML = idTool;
                    idHiddenCB.innerHTML = id;
                    taskCB.innerHTML = task;
                    levelDevCB.innerHTML = levelDev;
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
                    sectorCB.innerHTML = sector;
                    // sectorCB2.innerHTML = sector; // duplicated
                    authorsCB.innerHTML = authors;              
                    urlCB.innerHTML = urldoi;
                    linksCB.innerHTML = links;

                } else if (key == 'cardC') {
                    if (sectLanguage == false) {
                        let langSectionC = document.getElementsByClassName("seventh-card-section-C")[0];
                        langSectionC.style.display = "none";
                    }
                    idToolCC.innerHTML = idTool;
                    idHiddenCC.innerHTML = id;
                    taskCC.innerHTML = task;
                    levelDevCC.innerHTML = levelDev;
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
                    sectorCC.innerHTML = sector;
                    // sectorCC2.innerHTML = sector; // duplicated
                    authorsCC.innerHTML = authors;              
                    urlCC.innerHTML = urldoi;
                    linksCC.innerHTML = links;

                } else if (key == 'cardD') {
                    if (sectLanguage == false) {
                        let langSectionD = document.getElementsByClassName("seventh-card-section-D")[0];
                        langSectionD.style.display = "none";
                    }
                    idToolCD.innerHTML = idTool;
                    idHiddenCD.innerHTML = id;
                    taskCD.innerHTML = task;
                    levelDevCD.innerHTML = levelDev;
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
                    sectorCD.innerHTML = sector;
                    // sectorCD2.innerHTML = sector; // duplicated
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

    iconsSector = {"Private": '<i class="fa fa-solid fa-circle icon-fa-sector"></i>', 
                   "Public": '<i class="fa fa-solid fa-square icon-fa-sector"></i>', 
                   "NGO": '<svg xmlns="http://www.w3.org/2000/svg" class="bi bi-diamond-fill icon-fa-sector" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435z"/></svg>', 
                   "Academic": '<i class="fa fa-solid fa-plus icon-fa-sector"></i>'};

    iconsToolType = {"Website": '<i class="bi bi-globe2 icon-bootstrap-tool-type" title="Website"></i>',
        	         "Code": '<i class="bi bi-github icon-bootstrap-tool-type" title="Open source code on GitHub"></i>',
                     "Course": '<svg xmlns="http://www.w3.org/2000/svg" class="icon-fa-tool-type" viewBox="0 0 640 512"><title>Course</title><path d="M337.8 5.4C327-1.8 313-1.8 302.2 5.4L166.3 96H48C21.5 96 0 117.5 0 144V464c0 26.5 21.5 48 48 48H592c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48H473.7L337.8 5.4zM256 416c0-35.3 28.7-64 64-64s64 28.7 64 64v96H256V416zM96 192h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V208c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H512c-8.8 0-16-7.2-16-16V208zM96 320h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H512c-8.8 0-16-7.2-16-16V336zM232 176a88 88 0 1 1 176 0 88 88 0 1 1 -176 0zm88-48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H336V144c0-8.8-7.2-16-16-16z"/></svg>',
                     "Guide": '<svg xmlns="http://www.w3.org/2000/svg" class="icon-fa-tool-type" viewBox="0 0 512 512"><title>Guide</title><path d="M160 96a96 96 0 1 1 192 0A96 96 0 1 1 160 96zm80 152V512l-48.4-24.2c-20.9-10.4-43.5-17-66.8-19.3l-96-9.6C12.5 457.2 0 443.5 0 427V224c0-17.7 14.3-32 32-32H62.3c63.6 0 125.6 19.6 177.7 56zm32 264V248c52.1-36.4 114.1-56 177.7-56H480c17.7 0 32 14.3 32 32V427c0 16.4-12.5 30.2-28.8 31.8l-96 9.6c-23.2 2.3-45.9 8.9-66.8 19.3L272 512z"/></svg>',
                     "Guidelines": '<i class="bi bi-journal-text icon-bootstrap-tool-type" title="Guidelines"></i>', 
                     "Theoretical Framework": '<svg xmlns="http://www.w3.org/2000/svg" class="icon-ib-tool-type" viewBox="0 0 20 20"><title>Theoretical Framework</title><path fill="currentColor" d="M17.226 0C18.206 0 19 .814 19 1.818v16.364C19 19.186 18.206 20 17.226 20H4.542c-.98 0-1.774-.814-1.774-1.818l-.001-1.686H1.665a.674.674 0 0 1-.665-.68c0-.377.298-.682.665-.682h1.102v-2.419H1.665A.674.674 0 0 1 1 12.033c0-.377.298-.682.665-.682l1.102-.001V8.919H1.665A.674.674 0 0 1 1 8.239c0-.377.298-.682.665-.682l1.102-.001V5.122H1.665A.674.674 0 0 1 1 4.441c0-.377.298-.682.665-.682l1.102-.001l.001-1.94C2.768.814 3.562 0 4.542 0h12.684Zm-3.248 1.364H4.466a.344.344 0 0 0-.246.118a.428.428 0 0 0-.12.268v2.008h.844a.668.668 0 0 1 .665.683a.674.674 0 0 1-.665.681H4.1v2.431h.873l.045.007l-.074-.004a.65.65 0 0 1 .313.08l.02.011a.53.53 0 0 1 .124.101l-.055-.053a.684.684 0 0 1 .261.509l-.007-.08a.676.676 0 0 1-.596.792l-.03.002l-.016.001H4.1v2.431h.844a.65.65 0 0 1 .308.078c.062.03.111.066.15.111l-.03-.029a.687.687 0 0 1 .216.696l-.009.03a.682.682 0 0 1-.286.378l-.01.005a.644.644 0 0 1-.339.095H4.1v2.419h.873c.008 0 .016.002.023.004l-.052-.004c.367 0 .665.305.665.682c0 .222-.104.42-.265.544l-.013.01a.524.524 0 0 1-.062.04l-.008.004a.628.628 0 0 1-.275.082h-.013l-.015.002h-.014l-.844-.001v1.764c.006.067.03.13.072.19l.048.058c.073.077.163.12.27.13h9.488V1.364Zm3.264-.002h-1.938v17.274h1.974c.091 0 .176-.042.256-.13a.473.473 0 0 0 .134-.267V1.794a.486.486 0 0 0-.134-.298a.415.415 0 0 0-.292-.134Z"/></svg>',
                     "Practical Framework": '<svg xmlns="http://www.w3.org/2000/svg" class="icon-if-tool-type" viewBox="0 0 32 32"><title>Practical Framework</title><path d="M24,14.059V5.584L18.414,0H0v32h24v-0.059c4.499-0.5,7.998-4.309,8-8.941C31.998,18.366,28.499,14.556,24,14.059z    M17.998,2.413L21.586,6h-3.588V2.413z M2,30V1.998h14v6.001h6v6.06c-1.752,0.194-3.352,0.89-4.652,1.941H4v2h11.517   c-0.412,0.616-0.743,1.289-0.994,2H4v2h10.059C14.022,22.329,14,22.661,14,23c0,2.829,1.308,5.351,3.349,7H2z M23,29.883   c-3.801-0.009-6.876-3.084-6.885-6.883c0.009-3.801,3.084-6.876,6.885-6.885c3.799,0.009,6.874,3.084,6.883,6.885   C29.874,26.799,26.799,29.874,23,29.883z M20,12H4v2h16V12z"/><path d="M28,24v-2.001h-1.663c-0.063-0.212-0.145-0.413-0.245-0.606l1.187-1.187l-1.416-1.415l-1.165,1.166   c-0.22-0.123-0.452-0.221-0.697-0.294V18h-2v1.662c-0.229,0.068-0.446,0.158-0.652,0.27l-1.141-1.14l-1.415,1.415l1.14,1.14   c-0.112,0.207-0.202,0.424-0.271,0.653H18v2h1.662c0.073,0.246,0.172,0.479,0.295,0.698l-1.165,1.163l1.413,1.416l1.188-1.187   c0.192,0.101,0.394,0.182,0.605,0.245V28H24v-1.665c0.229-0.068,0.445-0.158,0.651-0.27l1.212,1.212l1.414-1.416l-1.212-1.21   c0.111-0.206,0.201-0.423,0.27-0.651H28z M22.999,24.499c-0.829-0.002-1.498-0.671-1.501-1.5c0.003-0.829,0.672-1.498,1.501-1.501   c0.829,0.003,1.498,0.672,1.5,1.501C24.497,23.828,23.828,24.497,22.999,24.499z"/></svg>',
                     "Examples": '<svg xmlns="http://www.w3.org/2000/svg" class="icon-if-tool-type" viewBox="0 0 128 128"><title>Examples</title><path d="M126,16H2a2,2,0,0,0-2,2v92a2,2,0,0,0,2,2H126a2,2,0,0,0,2-2V18A2,2,0,0,0,126,16Zm-2,92H4V20H124Z"/><path d="M68.66,86.49a2,2,0,0,0,2.83-.15L88,68l16.51,18.35a2,2,0,0,0,3-2.68L90.69,65l16.8-18.66a2,2,0,1,0-3-2.68L88,62,71.49,43.66a2,2,0,0,0-3,2.68L85.31,65,68.51,83.66A2,2,0,0,0,68.66,86.49Z"/><path d="M26,87H58a2,2,0,0,0,0-4H28V67H53a2,2,0,0,0,0-4H28V47H58a2,2,0,0,0,0-4H26a2,2,0,0,0-2,2V85A2,2,0,0,0,26,87Z"/></svg>',
                     "Resource Compendium": '<i class="bi bi-archive icon-bootstrap-tool-type" title="Resource Compendium"></i>',
                     "Law": `<svg xmlns="http://www.w3.org/2000/svg" class="icon-if2-tool-type" viewBox="0 0 6.82666 6.82666">
                                <title>Law</title>
                                <path d="M3.68863 1.80285l0.750965 0.750969c0.0100236,0.0100236 0.0190354,0.0206811 0.0270433,0.0318504 -0.0451102,0.0214252 -0.086689,0.050563 -0.122803,0.0866732l-0.824906 0.824909c-0.0361102,0.0361102 -0.0652402,0.0776929 -0.0866693,0.122799 -0.0111693,-0.00800787 -0.0218268,-0.0170197 -0.0318465,-0.0270394l-3.93701e-006 -3.93701e-006 -0.750969 -0.750969c-0.0100236,-0.0100236 -0.0190354,-0.0206811 -0.0270433,-0.0318504 0.0451063,-0.0214252 0.086689,-0.0505591 0.122799,-0.0866693l0.824909 -0.824909c0.0361102,-0.0361142 0.065248,-0.0776929 0.0866732,-0.122803 0.0111693,0.00800787 0.0218268,0.0170197 0.0318504,0.0270433z"/>
                                <path d="M2.17474 2.66695l-7.87402e-006 -7.87402e-006c-0.0707244,-0.0707244 -0.106091,-0.16387 -0.106091,-0.256945 0,-0.0930748 0.0353661,-0.18622 0.106091,-0.256945l0.824909 -0.824909c0.0707283,-0.0707283 0.16387,-0.106094 0.256945,-0.106094 0.0930748,0 0.186217,0.0353701 0.256945,0.106098l3.93701e-006 3.93701e-006c0.0707283,0.0707283 0.106098,0.16387 0.106098,0.256945 0,0.0930748 -0.0353661,0.186217 -0.106094,0.256945l-0.824909 0.824909c-0.0707244,0.0707244 -0.16387,0.106091 -0.256945,0.106091 -0.0930748,0 -0.18622,-0.0353661 -0.256945,-0.106091z"/>
                                <path d="M3.83244 4.17381c-0.0927087,0 -0.18548,-0.0350945 -0.256102,-0.105264l-0.000854331 -0.000830709 3.93701e-006 -3.93701e-006c-0.0707283,-0.0707283 -0.106094,-0.163874 -0.106094,-0.256949 0,-0.0930748 0.0353701,-0.186217 0.106094,-0.256941l0.824906 -0.824909c0.0707283,-0.0707283 0.16387,-0.106094 0.256945,-0.106094 0.0922756,0 0.184618,0.0347717 0.255118,0.104287 0.00125984,0.00118504 0.00248819,0.00241339 0.0036811,0.00368504 0.0694921,0.0704961 0.104252,0.162811 0.104252,0.255075 0,0.0930709 -0.0353661,0.186213 -0.106091,0.256941l-3.93701e-006 3.93701e-006 -0.824909 0.824909 -3.93701e-006 3.93701e-006c-0.0707205,0.0707165 -0.163858,0.106087 -0.256941,0.106087z"/>
                                <path d="M3.16546 3.4712l-0.602823 0.602823 3.93701e-006 3.93701e-006c-0.0312402,0.0312402 -0.0818937,0.0312402 -0.113134,0l-0.000287402 -0.000295276 -0.287646 -0.287642 -3.93701e-006 7.87402e-006c-0.0312402,-0.0312402 -0.0312441,-0.0818976 -3.93701e-006,-0.113138l0.000444882 -0.000433071 0.602386 -0.602386 0.401063 0.401059z"/><path d="M2.25135 3.64961l0.33463 0.33463c0.0498622,0.0498701 0.0747992,0.115504 0.0747992,0.181075 0,0.0655709 -0.0249409,0.131217 -0.0747992,0.181075l-0.961071 0.961071c-0.0498661,0.0498661 -0.115504,0.0748031 -0.181079,0.0748031 -0.0655709,0 -0.131217,-0.0249409 -0.181075,-0.0747992l-0.33463 -0.33463c-0.0496535,-0.0496535 -0.0744882,-0.115311 -0.0744843,-0.181075l-0.000311024 0c0,-0.0655709 0.0249409,-0.131217 0.0747992,-0.181075l0.961071 -0.961075c0.0498622,-0.0498622 0.115504,-0.0747953 0.181075,-0.0747953 0.0655748,0 0.131213,0.0249331 0.181075,0.0747953z"/>
                                <path d="M3.52172 4.98099l2.37161 0c0.0441811,0 0.08,0.0358189 0.08,0.08l0 0.463622c0,0.0441811 -0.0358189,0.08 -0.08,0.08l-2.37161 0c-0.0441811,0 -0.08,-0.0358189 -0.08,-0.08l0 -0.463622c0,-0.0441811 0.0358189,-0.08 0.08,-0.08z"/>
                            </svg>`,
                     "Article": '<svg xmlns="http://www.w3.org/2000/svg" class="icon-if-tool-type" viewBox="0 0 846.66 846.66"><title>Investigation Article</title><path d="M130.31 8.46l542.72 0c11.47,0 20.76,9.3 20.76,20.76l0 127.56 105.6 0c11.46,0 20.76,9.3 20.76,20.76l0 450.3c0,4.74 -1.6,9.12 -4.28,12.62l-124.81 187.28c-3.58,6.25 -10.31,10.46 -18.03,10.46l-625.76 0c-11.46,0 -20.76,-9.3 -20.76,-20.76l0 -705.18c0,-57.14 46.67,-103.8 103.8,-103.8zm67.92 403.89c-27.3,0 -27.3,-41.52 0,-41.52l323.85 0c27.3,0 27.3,41.52 0,41.52l-323.85 0zm0 313.46c-27.3,0 -27.3,-41.51 0,-41.51l323.85 0c27.3,0 27.3,41.51 0,41.51l-323.85 0zm0 -208.97c-27.3,0 -27.3,-41.52 0,-41.52l323.85 0c27.3,0 27.3,41.52 0,41.52l-323.85 0zm0 104.49c-27.3,0 -27.3,-41.52 0,-41.52l323.85 0c27.3,0 27.3,41.52 0,41.52l-323.85 0zm-71.23 -500.48l466.31 0c11.46,0 20.76,9.29 20.76,20.76l0 121.27c0,11.47 -9.3,20.76 -20.76,20.76l-466.31 0c-11.47,0 -20.76,-9.29 -20.76,-20.76l0 -121.27c0,-11.47 9.29,-20.76 20.76,-20.76zm445.55 41.51l-424.8 0 0 79.76 424.8 0 0 -79.76zm121.24 35.94l0 550.64 84.84 -127.3 0 -423.34 -84.84 0zm-41.52 -148.32l-521.96 0c-34.21,0 -62.28,28.07 -62.28,62.28l0 684.42 584.24 0 0 -746.7z"/></svg>',
                     "Playbook": '<svg xmlns="http://www.w3.org/2000/svg" class="icon-if2-tool-type" viewBox="0 0 24 24"><title>Playbook</title><path d="M6.5 2C5.11929 2 4 3.11929 4 4.5V19.5C4 20.8807 5.11929 22 6.5 22H19.75C20.1642 22 20.5 21.6642 20.5 21.25C20.5 20.8358 20.1642 20.5 19.75 20.5H6.5C5.94772 20.5 5.5 20.0523 5.5 19.5H19.75C20.1642 19.5 20.5 19.1642 20.5 18.75V4.5C20.5 3.11929 19.3807 2 18 2H6.5ZM8 5H16C16.5523 5 17 5.44772 17 6V7C17 7.55228 16.5523 8 16 8H8C7.44772 8 7 7.55228 7 7V6C7 5.44772 7.44772 5 8 5Z"/></svg>',
                     "Tool Compendium": '<svg xmlns="http://www.w3.org/2000/svg" class="icon-if2-tool-type" viewBox="0 0 20 20"><title>Tool Compendium</title><path d="M11.2999 2.48129C10.4654 2.14751 9.53457 2.14751 8.70013 2.48129L2.94291 4.78418C2.37343 5.01197 2 5.56353 2 6.17689V13.8228C2 14.4362 2.37343 14.9877 2.94291 15.2155L8.70013 17.5184C8.79983 17.5583 8.9009 17.5934 9.00301 17.6238C9.00101 17.5828 9 17.5415 9 17.5V16.5613L3.3143 14.2871C3.12448 14.2111 3 14.0273 3 13.8228V6.23834L9.50015 8.8384V11.9996C9.75797 11.6565 10.102 11.3819 10.5001 11.208V8.8384L17 6.23846V9.49982C17.4911 9.86866 17.8419 10.4141 17.9581 11.0419C17.9721 11.0445 17.9861 11.0472 18 11.05V6.17689C18 5.56353 17.6266 5.01197 17.0571 4.78418L11.2999 2.48129ZM9.07152 3.40977C9.66755 3.17135 10.3324 3.17135 10.9285 3.40977L16.1538 5.4999L13.8751 6.41137L7.72133 3.94984L9.07152 3.40977ZM6.37504 4.48836L12.5289 6.94988L10.0001 7.96137L3.84633 5.49984L6.37504 4.48836ZM12 12V11.5C12 10.6716 12.6716 10 13.5 10H15.5C16.3284 10 17 10.6716 17 11.5V12H17.5C18.3284 12 19 12.6716 19 13.5V15H17V14.5C17 14.2239 16.7761 14 16.5 14C16.2239 14 16 14.2239 16 14.5V15H13V14.5C13 14.2239 12.7761 14 12.5 14C12.2239 14 12 14.2239 12 14.5V15H10V13.5C10 12.6716 10.6716 12 11.5 12H12ZM15.5 11H13.5C13.2239 11 13 11.2239 13 11.5V12H16V11.5C16 11.2239 15.7761 11 15.5 11ZM17 16.5V16H19V17.5C19 18.3284 18.3284 19 17.5 19H11.5C10.6716 19 10 18.3284 10 17.5V16H12V16.5C12 16.7761 12.2239 17 12.5 17C12.7761 17 13 16.7761 13 16.5V16H16V16.5C16 16.7761 16.2239 17 16.5 17C16.7761 17 17 16.7761 17 16.5Z"/></svg>',
                     "Principles": '<svg xmlns="http://www.w3.org/2000/svg" class="icon-if2-tool-type" viewBox="0 0 512 512"><title>Principles</title><path d="M180,178.58h232.2a6,6,0,0,0,0-12.06H180a6,6,0,1,0,0,12.06Z"/><path d="M180,232.4h232.2a6,6,0,0,0,0-12.06H180a6,6,0,1,0,0,12.06Z"/><path d="M180,286.22h232.2a6,6,0,0,0,0-12.06H180a6,6,0,1,0,0,12.06Z"/><path d="M180,340H347.87a6,6,0,0,0,0-12.06H180A6,6,0,1,0,180,340Z"/><path d="M460,62.16H129.52a6,6,0,0,0-6,6V378.52H52a6,6,0,0,0-6,6,65.36,65.36,0,0,0,65.29,65.29H400.78a65.36,65.36,0,0,0,65.29-65.29V68.19A6,6,0,0,0,460,62.16ZM111.22,437.78a53.31,53.31,0,0,1-52.89-47.2h276a64.83,64.83,0,0,0,18.84,40.14,66.43,66.43,0,0,0,8.37,7.06ZM454,384.55a53.29,53.29,0,0,1-53.23,53.23h-1.44a53.23,53.23,0,0,1-53.23-53.23,6,6,0,0,0-6-6H135.56V74.22H454Z"/></svg>',
                     "Theory Document": '<svg xmlns="http://www.w3.org/2000/svg" class="icon-if-tool-type" viewBox="0 0 128 128"><title>Theory Document</title><path d="M112,41v-0.6L87.9,14.3l-5.9,5.4L101.6,41H72V1H16v126h96V41z M104,119H24V9h40v40h40V119z"/><rect height="8" width="40" x="44" y="70"/><rect height="8" width="40" x="44" y="91"/></svg>', 
                     "Dataset": '<i class="bi bi-database icon-bootstrap-tool-type" title="Dataset"></i>',
                     "Book": '<svg xmlns="http://www.w3.org/2000/svg" class="icon-fa-tool-type" viewBox="0 0 448 512"><title>Book</title><path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>',
                     "Code of Practice": '<svg xmlns="http://www.w3.org/2000/svg" class="icon-if2-tool-type" viewBox="0 0 256 256"><title>Code of Practice</title><path d="M208,24H72A32.1,32.1,0,0,0,40,56V224a8,8,0,0,0,8,8H192a8,8,0,0,0,0-16H56a16,16,0,0,1,16-16H208a8,8,0,0,0,8-8V32A8,8,0,0,0,208,24Zm-24,96-25.6-19.2a3.9,3.9,0,0,0-4.8,0L128,120V40h56Z"/></svg>',
                     "Code of Ethics": `<svg xmlns="http://www.w3.org/2000/svg" class="icon-if2-tool-type" viewBox="0 0 32 32.000001">
                                            <title>Code of Ethics</title>
                                            <defs id="defs4"/>
                                            <g id="layer1" transform="translate(0,-1020.3622)">
                                            <path d="m 5.000796,1022.3638 15.99857,-8e-4 3.99984,3.9999 -0.0024,22.4976 -19.996025,9e-4 z" id="path11011" style="opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:1.00157475;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/>
                                            <path d="m 7.007926,1050.8614 19.991242,0 0,-26.4912" id="path11013" style="opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:1.00157475;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/>
                                            <path d="m 21.000007,1022.3622 0,4 4,0" id="path11015" style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:round;stroke-opacity:1"/>
                                            <path d="m 15.000007,1029.8692 0,8.9859" id="path11017" style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.99999976px;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1"/>
                                            <path d="m 20.500006,1030.8622 -11,0" id="path11019" style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:round;stroke-opacity:1"/>
                                            <path d="m 12.507126,1038.8622 4.986165,0" id="path11021" style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.99999982px;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1"/>
                                            <path d="m 11.500564,1035.3597 c 9e-6,1.1026 -0.890614,1.9977 -1.9921748,2.0022 -1.1015843,0 -1.9994575,-0.8833 -2.0083708,-1.9859 l 2.0002923,-4.5136 z" id="path11023" style="opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/>
                                            <path d="m 7.5975783,1035.3597 3.8054257,0" id="path11025" style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"/>
                                            <path d="m 22.500565,1035.3597 c 9e-6,1.1026 -0.890614,1.9977 -1.992175,2.0022 -1.101584,0 -1.999457,-0.8833 -2.008371,-1.9859 l 2.000293,-4.5136 z" id="path11029" style="opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/>
                                            <path d="m 18.597579,1035.3597 3.805426,0" id="path11031" style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"/>
                                            <path d="m 8.007115,1025.3622 1.486139,0" id="path11035" style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.99999988px;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1"/>
                                            <path d="m 8.007115,1027.3623 4.235757,-10e-5" id="path11037" style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1"/>
                                            <path d="m 14.257115,1041.8624 6.735757,-2e-4" id="path11039" style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1"/>
                                            <path d="m 18.993053,1045.8623 -7.985938,0" id="path11041" style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1"/>
                                            <path d="m 9.007115,1041.8622 3.485758,2e-4" id="path11043" style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1"/>
                                            <path d="m 19.507116,1043.8624 1.485757,-2e-4" id="path11045" style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1"/>
                                            <path d="m 9.007115,1043.8622 4.235758,2e-4" id="path11047" style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1"/>
                                            <path d="m 15.007115,1043.8624 2.735758,-10e-5" id="path11049" style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1"/>
                                            <path d="m 11.257115,1025.3622 0.986229,0" id="path11053" style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1"/>
                                            </g>
                                        </svg>`,
                     "White Paper": '<svg xmlns="http://www.w3.org/2000/svg" class="icon-if-tool-type" viewBox="0 0 32 32"><title>White Paper</title><defs><style>.cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}</style></defs><title/><g data-name="18-paper" id="_18-paper"><path class="cls-1" d="M27,5V3a2,2,0,0,0-2-2H7A2,2,0,0,0,5,3V29a2,2,0,0,0,2,2H25a2,2,0,0,0,2-2V19"/><line class="cls-1" x1="14" x2="18" y1="27" y2="27"/><polygon class="cls-1" points="22.75 19.25 19 20 19.75 16.25 28 8 31 11 22.75 19.25"/><line class="cls-1" x1="16" x2="9" y1="20" y2="20"/><line class="cls-1" x1="9" x2="17" y1="16" y2="16"/><line class="cls-1" x1="9" x2="19" y1="12" y2="12"/></g></svg>',
                     "App": '<i class="bi bi-google-play icon-bootstrap-tool-type" title="App"</i>',
                     "Checklist": '<svg xmlns="http://www.w3.org/2000/svg" class="icon-fa-tool-type" viewBox="0 0 576 512"><title>Checklist</title><path d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H512c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H512c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm96 64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm104 0c0-13.3 10.7-24 24-24H448c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24H448c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24H448c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24zm-72-64a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM96 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>',
                     "Report": '<svg xmlns="http://www.w3.org/2000/svg" class="icon-ib2-tool-type" viewBox="0 0 24 24"><title>Report</title><path fill="#000000" d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6m4 18H6V4h7v5h5v11m-9-7v6H7v-6h2m6 2v4h2v-4h-2m-4-4v8h2v-8h-2Z"/></svg>',
                     "License": '<svg xmlns="http://www.w3.org/2000/svg" class="icon-ib2-tool-type" viewBox="0 0 16 16"><title>License</title><path fill="#000000" fill-rule="evenodd" d="M8 10.5a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9ZM14 6a5.997 5.997 0 0 1-2.886 5.13l.58 3.185L12 16l-1.623-.544L8 14.66l-2.377.796L4 16l.306-1.684l.58-3.187A6 6 0 1 1 14 6Zm-7.748 6h3.496l.322 1.772l-1.594-.534l-.476-.16l-.476.16l-1.594.534L6.252 12ZM9.5 6a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0ZM11 6a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z" clip-rule="evenodd"/></svg>',
                     "Voice Assistant": '<svg xmlns="http://www.w3.org/2000/svg" class="icon-fa-tool-type" viewBox="0 0 384 512"><title>Voice Assistant</title><path d="M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z"/></svg>',
                     "Standard": '<i class="bi bi-badge-sd icon-bootstrap-tool-type" title="Standard"</i>',
                     "Certification": '<svg xmlns="http://www.w3.org/2000/svg" class="icon-if-tool-type" viewBox="0 0 24 24"><title>Certification</title><path d="M20.9,0H1.1C0.5,0,0,0.5,0,1.1v21.8C0,23.5,0.5,24,1.1,24h19.8c0.6,0,1.1-0.5,1.1-1.1V1.1C22,0.5,21.5,0,20.9,0z M20,22H2   V2h18V22z"/><path d="M13,10.4V15l2-1l2,1v-4.6c1.2-0.7,2-2,2-3.4c0-2.2-1.8-4-4-4s-4,1.8-4,4C11,8.5,11.8,9.8,13,10.4z M16,13.3l-1-0.5l-1,0.5   v-2.4c0.3,0.1,0.7,0.1,1,0.1s0.7-0.1,1-0.1V13.3z M15,4c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S13.3,4,15,4z"/><rect height="1" width="7" x="5" y="12"/><rect height="1" width="7" x="5" y="14"/><rect height="1" width="12" x="5" y="16"/><rect height="1" width="12" x="5" y="18"/><path d="M10.1,6H5v1h5C10,6.7,10,6.3,10.1,6z"/><path d="M10.1,8H5v1h5.4C10.3,8.7,10.2,8.3,10.1,8z"/><path d="M11,10H5v1h7C11.6,10.7,11.3,10.4,11,10z"/></svg>',
                     "Contractual Terms": '<svg xmlns="http://www.w3.org/2000/svg" class="icon-if-tool-type" viewBox="0 0 846.66 846.66"><title>Contractual Terms</title><defs><style type="text/css"></style></defs><g id="Layer_x0020_1"><path class="fil0" d="M92.95 9.15l492.42 0c104.02,0 189.05,85.04 189.05,189.06l0 618.58c0,11.44 -9.27,20.71 -20.71,20.71l-660.76 0c-11.44,0 -20.71,-9.27 -20.71,-20.71l0 -786.93c0,-11.43 9.27,-20.71 20.71,-20.71zm417.41 266.01c19.12,22.05 29.7,50.08 29.7,79.32l0 96.25c0,11.44 -9.27,20.71 -20.71,20.71l-201.85 0c-11.44,0 -20.71,-9.27 -20.71,-20.71l0 -96.25c0,-29.24 10.58,-57.26 29.69,-79.31 -8.51,-15.2 -13.36,-32.72 -13.36,-51.37 0,-58.16 47.15,-105.3 105.3,-105.3 58.16,0 105.3,47.14 105.3,105.3 0,18.65 -4.85,36.17 -13.36,51.36zm-27.35 31.81c-17.83,13.86 -40.25,22.12 -64.59,22.12 -24.33,0 -46.75,-8.26 -64.58,-22.12 -10.17,13.83 -15.63,30.29 -15.63,47.51l0 75.54 160.43 0 0 -75.54c0,-17.21 -5.46,-33.69 -15.63,-47.51zm-252.81 421.19c-27.24,0 -27.24,-41.42 0,-41.42l386.25 0c27.24,0 27.24,41.42 0,41.42l-386.25 0zm0 -171.15c-27.24,0 -27.24,-41.42 0,-41.42l386.25 0c27.24,0 27.24,41.42 0,41.42l-386.25 0zm0 85.58c-27.24,0 -27.24,-41.42 0,-41.42l386.25 0c27.24,0 27.24,41.42 0,41.42l-386.25 0zm188.22 -482.67c-35.28,0 -63.88,28.59 -63.88,63.88 0,35.28 28.6,63.87 63.88,63.87 35.28,0 63.88,-28.59 63.88,-63.87 0,-35.29 -28.6,-63.88 -63.88,-63.88zm166.95 -109.34l-471.71 0 0 745.5 619.34 0 0 -597.87c0,-81.16 -66.48,-147.63 -147.63,-147.63z"/></g></svg>',
                     "Case Studies": '<svg xmlns="http://www.w3.org/2000/svg" class="icon-if2-tool-type" viewBox="0 0 32 32"><title>Case Studies</title><defs><style>.cls-1{fill:#1a1a1a;}</style></defs><path class="cls-1" d="M26.74,8.5a.65.65,0,0,0,0-.19.64.64,0,0,0,0-.07A.86.86,0,0,0,26.53,8L20.86,2.46a.83.83,0,0,0-.22-.14l-.07,0a.58.58,0,0,0-.18,0H6A.76.76,0,0,0,5.25,3V29a.76.76,0,0,0,.75.75H26a.76.76,0,0,0,.75-.75V8.55S26.74,8.52,26.74,8.5ZM17.55,20.8a4.71,4.71,0,0,1-2.79-.92L11,23.69a.75.75,0,0,1-1.06,0,.75.75,0,0,1,0-1.06l3.81-3.81a4.71,4.71,0,0,1-.93-2.8,4.78,4.78,0,1,1,4.78,4.78Zm7.7-11.5H20.34a.75.75,0,0,1-.75-.75V3.75H20l1.06,1,3.07,3,1.09,1.06Zm-7.7,3.45A3.28,3.28,0,1,0,20.83,16,3.28,3.28,0,0,0,17.55,12.75Z"/></svg>',
                     "Tutorial": '<svg xmlns="http://www.w3.org/2000/svg" class="icon-if3-tool-type" viewBox="0 0 64 64"><title>Tutorial</title><path d="M52,12.982H12c-2.2,0-4,1.8-4,4v30.036c0,2.2,1.8,4,4,4H52c2.2,0,4-1.8,4-4V16.982C56,14.782,54.2,12.982,52,12.982z    M28.204,20.789l9.593,6.55l-9.593,6.55V20.789z M48.001,43.212H26.875c-0.57,1.24-1.816,2.105-3.27,2.105s-2.699-0.866-3.27-2.105   H16c-0.829,0-1.5-0.672-1.5-1.5s0.671-1.5,1.5-1.5h4.336c0.57-1.24,1.815-2.106,3.27-2.106s2.7,0.866,3.27,2.106h21.126   c0.828,0,1.5,0.672,1.5,1.5S48.829,43.212,48.001,43.212z"/><circle cx="23.605" cy="41.712" r="1.397"/></svg>',
                     "Program": '<svg xmlns="http://www.w3.org/2000/svg" class="icon-ib2-tool-type" viewBox="0 0 32 32"><title>Program - Software</title><path fill="#000000" d="m20.17 19l-2.59 2.59L19 23l4-4l-4-4l-1.42 1.41L20.17 19zm-8.34 0l2.59-2.59L13 15l-4 4l4 4l1.42-1.41L11.83 19z"/><circle cx="9" cy="8" r="1" fill="#000000"/><circle cx="6" cy="8" r="1" fill="#000000"/><path fill="#000000" d="M28 4H4c-1.103 0-2 .897-2 2v20c0 1.103.897 2 2 2h24c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2Zm0 2v4H4V6h24ZM4 26V12h24v14H4Z"/></svg>'};

    iconsLanguage = {"Python": '<svg xmlns="http://www.w3.org/2000/svg" class="icon-fa-language" viewBox="0 0 448 512"><title>Python</title><path d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"/></svg>',
                     "Java": '<svg xmlns="http://www.w3.org/2000/svg" class="icon-fa-language" viewBox="0 0 384 512"><title>Java</title><path d="M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z"/></svg>',
                     "JavaScript": '<svg xmlns="http://www.w3.org/2000/svg" class="icon-fa-language" viewBox="0 0 448 512"><title>JavaScript</title><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/></svg>',
                     "R": '<svg xmlns="http://www.w3.org/2000/svg" class="icon-if-language" viewBox="0 0 581 512"><title>R</title><path d="M581 226.6C581 119.1 450.9 32 290.5 32S0 119.1 0 226.6C0 322.4 103.3 402 239.4 418.1V480h99.1v-61.5c24.3-2.7 47.6-7.4 69.4-13.9L448 480h112l-67.4-113.7c54.5-35.4 88.4-84.9 88.4-139.7zm-466.8 14.5c0-73.5 98.9-133 220.8-133s211.9 40.7 211.9 133c0 50.1-26.5 85-70.3 106.4-2.4-1.6-4.7-2.9-6.4-3.7-10.2-5.2-27.8-10.5-27.8-10.5s86.6-6.4 86.6-92.7-90.6-87.9-90.6-87.9h-199V361c-74.1-21.5-125.2-67.1-125.2-119.9zm225.1 38.3v-55.6c57.8 0 87.8-6.8 87.8 27.3 0 36.5-38.2 28.3-87.8 28.3zm-.9 72.5H365c10.8 0 18.9 11.7 24 19.2-16.1 1.9-33 2.8-50.6 2.9v-22.1z"/></svg>',
                     "C++": '<svg xmlns="http://www.w3.org/2000/svg" class="icon-ib-language" viewBox="0 0 455 512"><title>C++</title><path fill="#000000" d="M435.28 113.284L247.19 4.692c-10.835-6.256-28.567-6.256-39.402 0L19.701 113.284C8.865 119.54 0 134.896 0 147.408v217.184c.843 14.572 8.286 26.64 19.7 34.124l188.09 108.591c10.834 6.257 28.566 6.257 39.401 0L435.28 398.716c12.248-8.146 19.22-20.408 19.701-34.124V147.408c-.44-13.165-8.323-26.443-19.7-34.124zM75.83 256.001c-.891-148.09 197.46-213.48 282.996-75.878l-65.634 37.98c-39.622-65.533-138.001-42.1-141.532 37.898c1.06 73.729 97.754 107.978 141.536 37.892l65.635 37.98c-75.383 130.862-279.2 83.78-283-75.872zm303.32 8.424h-16.852v16.852H345.45v-16.852h-16.852v-16.85h16.852v-16.85h16.85v16.85h16.851v16.85zm63.192 0H425.49v16.852h-16.85v-16.852h-16.85v-16.85h16.852v-16.85h16.849v16.85h16.852v16.85z"/></svg>',
                     "MATLAB": '<svg xmlns="http://www.w3.org/2000/svg" class="icon-ib-language" viewBox="0 0 455 512"><title>MATLAB</title><path fill="#000000" d="M495.855 367.604c-28.98-73.177-53.037-148.231-80.725-221.893c-12.23-31.362-24.198-62.986-40.868-92.33c-6.62-10.535-12.956-22.119-23.814-28.86c-2.739-1.74-5.828-2.479-8.88-2.42c-5.084.096-10.14 2.37-14.025 5.65c-14.571 11.543-23.209 28.334-32.896 43.793c-17.114 28.698-35.156 58.748-63.773 77.396c-13.44 9.485-31.039 10.514-43.995 20.686c-17.72 13.36-29.767 32.31-44.298 48.737c-3.31 3.956-8.436 5.53-12.916 7.67C86.315 243.71 42.945 261.35 0 279.916c36.367 28.132 75.115 53.157 112.208 80.321c10.172-2.018 20.383-6.196 30.877-4.339c16.63 5.207 26.377 21.15 34.006 35.721c15.5 31.765 26.7 65.307 39.253 98.283c20.988-1.493 39.878-12.31 56.104-25.025c31.24-25.307 55.034-58.001 81.23-88.192c12.552-13.199 25.347-28.92 44.197-32.593c19.05-4.601 39.454 2.22 53.581 15.338c19.818 17.719 37.376 38.203 60.544 51.765c-3.108-15.338-10.575-29.101-16.145-43.592zm-324.011-51.563c-18.284 10.817-37.699 19.717-56.71 29.162c-29.828-19.98-58.889-41.15-88.192-61.856c39.515-17.315 79.635-33.4 119.675-49.545c18.97 14.813 38.547 28.88 57.517 43.693c-8.92 14.248-19.657 27.487-32.29 38.546zm40.665-49.646c-18.85-14.167-37.94-27.951-56.508-42.482c11.907-16.226 24.945-31.906 40.565-44.701c10.333-6.62 22.966-8.456 33.703-14.43c25.469-12.714 42.845-36.044 59.434-58.324c-21.271 55.216-43.975 110.654-77.194 159.937z"/></svg>',
                     "TypeScript": '<svg xmlns="http://www.w3.org/2000/svg" class="icon-if-language" viewBox="0 0 15 15"><title>TypeScript</title><path clip-rule="evenodd" d="M0 0H15V15H0V0ZM10 6C8.89543 6 8 6.89543 8 8C8 9.10457 8.89543 10 10 10H11C11.5523 10 12 10.4477 12 11C12 11.5523 11.5523 12 11 12H10C9.44772 12 9 11.5523 9 11H8C8 12.1046 8.89543 13 10 13H11C12.1046 13 13 12.1046 13 11C13 9.89543 12.1046 9 11 9H10C9.44772 9 9 8.55228 9 8C9 7.44772 9.44772 7 10 7H11.1667C11.6269 7 12 7.3731 12 7.83333V8H13V7.83333C13 6.82081 12.1792 6 11.1667 6H10ZM3 6H8V7H6V13H5V7H3V6Z" fill="black" fill-rule="evenodd"/></svg>',
                     "Scala": '<svg xmlns="http://www.w3.org/2000/svg" class="icon-ib-language" viewBox="0 0 24 24"><title>Scala</title><path fill="#000000" d="M4.589 24c4.537 0 13.81-1.516 14.821-3v-5.729c-.957 1.408-10.284 2.912-14.821 2.912V24zm0-7.635c4.537 0 13.81-1.516 14.821-3V7.636c-.957 1.408-10.284 2.912-14.821 2.912v5.817zm0-7.636c4.537 0 13.81-1.516 14.821-3V0C18.453 1.408 9.126 2.912 4.589 2.912v5.817z"/></svg>',
                     "UML": '<svg xmlns="http://www.w3.org/2000/svg" class="icon-ib-language" viewBox="0 0 24 24"><title>UML</title><path fill="#000000" d="M10.768 0L7.182 1.604s6.126 2.72 6.852 3.055c.72.335 1.744.947.565 1.629c-1.18.682-2.423.477-3.259.09c-.835-.384-7.012-3.257-7.012-3.257L.666 4.777s6.4 2.935 7.4 3.417c1.003.482 4.753 1.784 8.48.002c3.727-1.781 3.261-2.577 3.268-2.724c.006-.148-.036-.933-.632-1.467c-.599-.534-2.378-1.375-3.127-1.73C15.305 1.916 10.77 0 10.77 0ZM.411 5.299v13.215l2.904 1.402v-7.963l1.585 8.6l2.58 1.243l1.66-7.154v7.826l2.916 1.38V10.643L7.629 8.628l-1.403 6.296l-1.412-7.598Zm16.76 3.115l-4.624 2.315L12.559 24l11.03-5.225l-.025-3.613l-6.393 2.92Z"/></svg>',
                     "Spark": '<svg xmlns="http://www.w3.org/2000/svg" class="icon-ib-language" viewBox="0 0 32 32"><title>Apache Spark</title><path fill="#000000" d="M14.417 0c-.568.016-1.125.286-1.594.807c-.26.292-.479.615-.661.964c-.469.885-.563 1.885-.74 2.854c-.328 1.818-.651 3.635-.969 5.453c-.036.214-.125.302-.323.359c-2.359.745-4.719 1.484-7.063 2.25a6.563 6.563 0 0 0-1.484.672c-1.391.885-1.599 2.339-.557 3.615c.464.563 1.057.953 1.714 1.245c1.469.656 2.938 1.302 4.401 1.964c.026.01.047.016.068.026h-.005l1.745.714v.094c-.266 2.708-.521 5.417-.776 8.13c-.052.557-.016 1.104.182 1.641c.422 1.156 1.417 1.526 2.505.932c.495-.271.891-.661 1.25-1.089c1.828-2.167 3.661-4.328 5.484-6.5c.146-.177.271-.198.484-.13c.464.156.927.307 1.391.464h.005c.026.016.057.026.094.042l.193.057c1.661.552 3.573 1.031 5.234 1.583c.536.177.833.219 1.396.13c.417-.063.792-.083 1.104-.313a2.518 2.518 0 0 0 1.318-2.245c-.005-.568-.208-1.083-.469-1.578c-1.094-2.078-2.182-4.151-3.281-6.224c-.104-.198-.099-.323.052-.5c1.839-2.151 3.672-4.313 5.51-6.474c.359-.427.682-.875.87-1.411c.411-1.167-.12-2.094-1.333-2.318a3.725 3.725 0 0 0-1.646.089c-2.635.698-5.266 1.391-7.891 2.094c-.234.063-.349.021-.474-.193a439.173 439.173 0 0 0-3.229-5.354a6.107 6.107 0 0 0-.87-1.135c-.495-.49-1.068-.729-1.635-.714zm.229 4.938a.768.768 0 0 1 .25.281c1.161 1.927 2.323 3.854 3.479 5.786c.094.156.182.208.37.156c2.036-.542 4.068-1.083 6.104-1.62c.49-.13.979-.255 1.474-.385a.572.572 0 0 1-.135.266a2855.165 2855.165 0 0 1-5.036 5.917c-.146.177-.161.297-.057.495c1.25 2.406 2.359 4.411 3.333 6.349l-4.927-1.359l-2.156-.719c-.214-.073-.333-.042-.479.13c-1.661 1.984-3.339 3.964-5.01 5.943a.527.527 0 0 1-.24.172c.047-.5.089-1.005.135-1.51c.203-2.099.396-4.193.604-6.292c-.042-.422.156-.536-.432-.724c-1.99-.792-4.458-1.76-6.417-2.542a.741.741 0 0 1 .318-.177c2.396-.76 4.792-1.521 7.193-2.276c.167-.052.266-.12.281-.307c.016-.198.068-.396.099-.589l.969-5.453c.094-.516.188-1.026.281-1.542z"/></svg>',
                     "Rust": '<svg xmlns="http://www.w3.org/2000/svg" class="icon-fa-language" viewBox="0 0 512 512"><title>Rust</title><path d="M508.52,249.75,486.7,236.24c-.17-2-.34-3.93-.55-5.88l18.72-17.5a7.35,7.35,0,0,0-2.44-12.25l-24-9c-.54-1.88-1.08-3.78-1.67-5.64l15-20.83a7.35,7.35,0,0,0-4.79-11.54l-25.42-4.15c-.9-1.73-1.79-3.45-2.73-5.15l10.68-23.42a7.35,7.35,0,0,0-6.95-10.39l-25.82.91q-1.79-2.22-3.61-4.4L439,81.84A7.36,7.36,0,0,0,430.16,73L405,78.93q-2.17-1.83-4.4-3.61l.91-25.82a7.35,7.35,0,0,0-10.39-7L367.7,53.23c-1.7-.94-3.43-1.84-5.15-2.73L358.4,25.08a7.35,7.35,0,0,0-11.54-4.79L326,35.26c-1.86-.59-3.75-1.13-5.64-1.67l-9-24a7.35,7.35,0,0,0-12.25-2.44l-17.5,18.72c-1.95-.21-3.91-.38-5.88-.55L262.25,3.48a7.35,7.35,0,0,0-12.5,0L236.24,25.3c-2,.17-3.93.34-5.88.55L212.86,7.13a7.35,7.35,0,0,0-12.25,2.44l-9,24c-1.89.55-3.79,1.08-5.66,1.68l-20.82-15a7.35,7.35,0,0,0-11.54,4.79l-4.15,25.41c-1.73.9-3.45,1.79-5.16,2.73L120.88,42.55a7.35,7.35,0,0,0-10.39,7l.92,25.81c-1.49,1.19-3,2.39-4.42,3.61L81.84,73A7.36,7.36,0,0,0,73,81.84L78.93,107c-1.23,1.45-2.43,2.93-3.62,4.41l-25.81-.91a7.42,7.42,0,0,0-6.37,3.26,7.35,7.35,0,0,0-.57,7.13l10.66,23.41c-.94,1.7-1.83,3.43-2.73,5.16L25.08,153.6a7.35,7.35,0,0,0-4.79,11.54l15,20.82c-.59,1.87-1.13,3.77-1.68,5.66l-24,9a7.35,7.35,0,0,0-2.44,12.25l18.72,17.5c-.21,1.95-.38,3.91-.55,5.88L3.48,249.75a7.35,7.35,0,0,0,0,12.5L25.3,275.76c.17,2,.34,3.92.55,5.87L7.13,299.13a7.35,7.35,0,0,0,2.44,12.25l24,9c.55,1.89,1.08,3.78,1.68,5.65l-15,20.83a7.35,7.35,0,0,0,4.79,11.54l25.42,4.15c.9,1.72,1.79,3.45,2.73,5.14L42.56,391.12a7.35,7.35,0,0,0,.57,7.13,7.13,7.13,0,0,0,6.37,3.26l25.83-.91q1.77,2.22,3.6,4.4L73,430.16A7.36,7.36,0,0,0,81.84,439L107,433.07q2.18,1.83,4.41,3.61l-.92,25.82a7.35,7.35,0,0,0,10.39,6.95l23.43-10.68c1.69.94,3.42,1.83,5.14,2.73l4.15,25.42a7.34,7.34,0,0,0,11.54,4.78l20.83-15c1.86.6,3.76,1.13,5.65,1.68l9,24a7.36,7.36,0,0,0,12.25,2.44l17.5-18.72c1.95.21,3.92.38,5.88.55l13.51,21.82a7.35,7.35,0,0,0,12.5,0l13.51-21.82c2-.17,3.93-.34,5.88-.56l17.5,18.73a7.36,7.36,0,0,0,12.25-2.44l9-24c1.89-.55,3.78-1.08,5.65-1.68l20.82,15a7.34,7.34,0,0,0,11.54-4.78l4.15-25.42c1.72-.9,3.45-1.79,5.15-2.73l23.42,10.68a7.35,7.35,0,0,0,10.39-6.95l-.91-25.82q2.22-1.79,4.4-3.61L430.16,439a7.36,7.36,0,0,0,8.84-8.84L433.07,405q1.83-2.17,3.61-4.4l25.82.91a7.23,7.23,0,0,0,6.37-3.26,7.35,7.35,0,0,0,.58-7.13L458.77,367.7c.94-1.7,1.83-3.43,2.73-5.15l25.42-4.15a7.35,7.35,0,0,0,4.79-11.54l-15-20.83c.59-1.87,1.13-3.76,1.67-5.65l24-9a7.35,7.35,0,0,0,2.44-12.25l-18.72-17.5c.21-1.95.38-3.91.55-5.87l21.82-13.51a7.35,7.35,0,0,0,0-12.5Zm-151,129.08A13.91,13.91,0,0,0,341,389.51l-7.64,35.67A187.51,187.51,0,0,1,177,424.44l-7.64-35.66a13.87,13.87,0,0,0-16.46-10.68l-31.51,6.76a187.38,187.38,0,0,1-16.26-19.21H258.3c1.72,0,2.89-.29,2.89-1.91V309.55c0-1.57-1.17-1.91-2.89-1.91H213.47l.05-34.35H262c4.41,0,23.66,1.28,29.79,25.87,1.91,7.55,6.17,32.14,9.06,40,2.89,8.82,14.6,26.46,27.1,26.46H407a187.3,187.3,0,0,1-17.34,20.09Zm25.77,34.49A15.24,15.24,0,1,1,368,398.08h.44A15.23,15.23,0,0,1,383.24,413.32Zm-225.62-.68a15.24,15.24,0,1,1-15.25-15.25h.45A15.25,15.25,0,0,1,157.62,412.64ZM69.57,234.15l32.83-14.6a13.88,13.88,0,0,0,7.06-18.33L102.69,186h26.56V305.73H75.65A187.65,187.65,0,0,1,69.57,234.15ZM58.31,198.09a15.24,15.24,0,0,1,15.23-15.25H74a15.24,15.24,0,1,1-15.67,15.24Zm155.16,24.49.05-35.32h63.26c3.28,0,23.07,3.77,23.07,18.62,0,12.29-15.19,16.7-27.68,16.7ZM399,306.71c-9.8,1.13-20.63-4.12-22-10.09-5.78-32.49-15.39-39.4-30.57-51.4,18.86-11.95,38.46-29.64,38.46-53.26,0-25.52-17.49-41.59-29.4-49.48-16.76-11-35.28-13.23-40.27-13.23H116.32A187.49,187.49,0,0,1,221.21,70.06l23.47,24.6a13.82,13.82,0,0,0,19.6.44l26.26-25a187.51,187.51,0,0,1,128.37,91.43l-18,40.57A14,14,0,0,0,408,220.43l34.59,15.33a187.12,187.12,0,0,1,.4,32.54H423.71c-1.91,0-2.69,1.27-2.69,3.13v8.82C421,301,409.31,305.58,399,306.71ZM240,60.21A15.24,15.24,0,0,1,255.21,45h.45A15.24,15.24,0,1,1,240,60.21ZM436.84,214a15.24,15.24,0,1,1,0-30.48h.44a15.24,15.24,0,0,1-.44,30.48Z"/></svg>',
                     "Unknown": '<p>Unknown</p>'};

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
        //LowPrinciple = arrayHighPrinciple.forEach(element => LowPrinciple += '<li>' + element + '</li>');
    } else {
        LowPrinciple = preLowPrinciple;
        //LowPrinciple = '<li>' + preLowPrinciple + '</li>';
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
        arraySector.forEach(element => Sector += iconsSector[element]);
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
        arrayToolType.forEach(element => ToolType += iconsToolType[element]);
    } else {
        ToolType = iconsToolType[preToolType];
    }
    //#endregion

    //#region Language
    let sectionLanguage = true;
    let Language = "";
    let arrayLanguage = preLanguage.split("; ");
    if (preLanguage == "Does not apply") {
        sectionLanguage = false;
    } else if (arrayLanguage.length > 1) {
        arrayLanguage.forEach(element => Language += iconsLanguage[element]);
    } else {
        Language = iconsLanguage[preLanguage];
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
            task: Task, levelDev: LevelDev, sector: Sector, toolType: ToolType, language: Language, urlDoi: URLDOI, year: Year, authors: Authors, links: Links,
            sectLanguage: sectionLanguage};
}

async function cleanCardA(toolID){
    let idcircleCardA = document.getElementById(toolID).innerText;
    let circle = document.getElementsByClassName("circle-" + idcircleCardA)[0];
    let numCircle = document.getElementById(idcircleCardA);
    circle.classList.remove("active-circle-hover");
    numCircle.classList.remove("active-circle-number-hover");

    let cardA = document.getElementById("card-tool-A");
    cardA.style.display = 'none';
}

async function cleanCardB(toolID){
    let idcircleCardB = document.getElementById(toolID).innerText;
    let circle = document.getElementsByClassName("circle-" + idcircleCardB)[0];
    let numCircle = document.getElementById(idcircleCardB);
    circle.classList.remove("active-circle-hover");
    numCircle.classList.remove("active-circle-number-hover");

    let cardB = document.getElementById("card-tool-B");
    cardB.style.display = 'none';
}

async function cleanCardC(toolID){
    let idcircleCardC = document.getElementById(toolID).innerText;
    let circle = document.getElementsByClassName("circle-" + idcircleCardC)[0];
    let numCircle = document.getElementById(idcircleCardC);
    circle.classList.remove("active-circle-hover");
    numCircle.classList.remove("active-circle-number-hover");

    let cardC = document.getElementById("card-tool-C");
    cardC.style.display = 'none';
}

async function cleanCardD(toolID){
    let idcircleCardD = document.getElementById(toolID).innerText;
    let circle = document.getElementsByClassName("circle-" + idcircleCardD)[0];
    let numCircle = document.getElementById(idcircleCardD);
    circle.classList.remove("active-circle-hover");
    numCircle.classList.remove("active-circle-number-hover");

    let cardD = document.getElementById("card-tool-D");
    cardD.style.display = 'none';
}

// Copy section
document.addEventListener("DOMContentLoaded", function() {

    addTitles();

    const copyButton = document.getElementById("copyButton");
    const codeElement = document.querySelector(".cite-section code");
  
    copyButton.addEventListener("click", function() {
      const textToCopy = codeElement.textContent;
      const tempTextArea = document.createElement("textarea");
      tempTextArea.value = textToCopy;
  
      document.body.appendChild(tempTextArea);
      tempTextArea.select();
      document.execCommand("copy");
      document.body.removeChild(tempTextArea);
    });
});