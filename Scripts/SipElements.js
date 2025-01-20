
const LOGCARD_TAG = "devCard";
const TRAIT_TAG = "trait";

var isIndexLevel = true;

//Make Trait Cards
class TraitCardS{
    currCol = 1;
    currRow = 1;
    //Contrstructor
    constructor(columnLimit){
        for(i=0; i < 4;i++){
            traitLabel = 'Trait ' + '${i}'
            this.InsertTrait("", traitLabel)
        }
    }

    InsertTrait(iconPath, traitLabel){
        this.currCol++;
        
        if(this.currCol > columnLimit)
        {
            this.currCol=1; 
            this.currRow++;
        }
    
        traitPos = 'grid-column: ${currCol}; grid-row: ${currRow};';
        content = "<div class=${TRAIT_TAG} style=${traitPos}><img src=${iconPath} alt='Icon'><h1>${traitLabel}</h1></div>";

        document.getElementById("TraitsDiv").appendChild(content);
    }
};
//Create Devlog Entry System


// Initialize the navigation bar
document.addEventListener("DOMContentLoaded", () => {
    // Pass `true` for index.html level or `false` for pages folder
    isIndexLevel = window.location.pathname.endsWith("index.html");

    new TraitCardS(2);
});
