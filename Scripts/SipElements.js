
const LOGCARD_TAG = "devCard";
const TRAIT_TAG = "trait";

var isIndexLevel = true;

//Make Trait Cards
class TraitCards{
    
    //Contrstructor
    constructor(columnLimit){
        this.currCol = 1;
        this.currRow = 1;
        this.colLimit = columnLimit;

        for(let i=1; i <= 4; i++){
            const traitLabel = `Trait ${i}`;
            this.InsertTrait("../Images/PlaceholderLC.png", traitLabel)
        }
    }

    InsertTrait(iconPath, traitLabel){        
        if(this.currCol > this.colLimit)
        {
            this.currCol=1; 
            this.currRow++;
        }
    
        const traitPos = `grid-column: ${this.currCol}; grid-row: ${this.currRow};`;
        const content = document.createElement("div");
        content.className = TRAIT_TAG;
        content.style = traitPos;
        content.innerHTML = `<img src=${iconPath} alt="Icon"><h1>${traitLabel}</h1>`;

        document.getElementById("TraitsDiv").appendChild(content);
        this.currCol++;
    }
};
//Create Devlog Entry System
class DevLog{
    constructor(){
        this.AddLog("First Log", "../Images/PlaceholderLC.png","../Pages/sip.html", "This is to test the log cards");
        this.AddLog("Second Log", "../Images/PlaceholderLC.png","../Pages/sip.html", "This is to test the log cards");
        this.AddLog("Third Log", "../Images/PlaceholderLC.png","../Pages/sip.html", "This is to test the log cards");
    };
    AddLog(Label,Thumbnail,portal="",description=""){
        const log = document.createElement("div");
        log.className = LOGCARD_TAG;
        
        //THUMBNAIL
        const thumbnail = document.createElement("img");
        thumbnail.src = Thumbnail; thumbnail.alt = "Thumbnail";
        log.appendChild(thumbnail);
        
        //INFORMATION
        const InfoBox = document.createElement("div");
        InfoBox.className = "logInfo";
        log.appendChild(InfoBox);
        //|__LABEL
        InfoBox.innerHTML = `<h1>${Label}</h1>`;
        //|__DESCRIPTION
        const descBox = document.createElement("div");
        descBox.className = "logDesc";
        descBox.innerHTML = `<p>${description}</p>`;
        InfoBox.appendChild(descBox);
        //|__CTA - READ MORE BUTTON
        if (portal != "") {
            const ctaBox = document.createElement("div");
            ctaBox.id = "CTA_Box";
            ctaBox.innerHTML = `<a href="${portal}" class="CalltoAction_Dark">Read More!</a>`;
            InfoBox.appendChild(ctaBox);
        }

        document.getElementById("LogsDiv").appendChild(log);
    }
}

// Initialize the navigation bar
document.addEventListener("DOMContentLoaded", () => {
    // Pass `true` for index.html level or `false` for pages folder
    isIndexLevel = window.location.pathname.endsWith("index.html");

    new TraitCards(2);
    new DevLog();
});
