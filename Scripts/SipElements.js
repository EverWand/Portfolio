const LOGCARD_TAG = "devCard";
const TRAIT_TAG = "trait";

// Make Trait Cards
class TraitCards {
    // Constructor
    constructor(columnLimit) {
        this.currCol = 1;
        this.currRow = 1;
        this.colLimit = columnLimit;

        for (let i = 1; i <= 4; i++) {
            const traitLabel = `Trait ${i}`;
            this.InsertTrait(`../Images/PlaceholderLC.png`, traitLabel);
        }
    }

    InsertTrait(iconPath, traitLabel) {
        if (this.currCol > this.colLimit) {
            this.currCol = 1;
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
}

// Create Devlog Entry Tag
class DevLog extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
    }
    
    connectedCallback() {
        const label = this.getAttribute('label') || 'Label';
        const thumbnail = this.getAttribute('thumbnail') || '../Images/Branding/EverLogo-Revision.png';             
        const portal = this.getAttribute('portal') || null;
        const content = this.innerHTML; // Move innerHTML content to a variable
        this.innerHTML = ''; // Clear the innerHTML

        /* DEVLOG HTML STRUCTURE */
        this.shadowRoot.innerHTML = `
            <div class="${LOGCARD_TAG}">
                <img src="${thumbnail}" alt="Thumbnail">
                <div class="logInfo">
                    <h1>${label}</h1>
                    <div class="logContent">${content}</div>
                    ${portal ? `<div id="CTA_Box"><cta-button type="dark" text="Read More" link="${portal}"/></div>` : ''}
                </div>
            </div>
        `; 

        this.addStyle(); // Add the style to the shadow root
    }

    addStyle(){
        const style = document.createElement('style');
        style.textContent = `
            .${LOGCARD_TAG}{
                display: flex;
                border: 3px double black;
                gap: 1em;
                padding: .5em;
                border-radius: 8px;
            }
            .${LOGCARD_TAG} > img{
                height: 100px; width: 100px;
                border-radius: 8px;
            }
        `;

        this.shadowRoot.appendChild(style);
    }
}
customElements.define('dev-log', DevLog);
