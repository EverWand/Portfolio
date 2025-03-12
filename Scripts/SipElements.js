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
            this.InsertTrait(`/Portfolio/Images/PlaceholderLC.png`, traitLabel);
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
        const thumbnail = this.getAttribute('thumbnail') || '/Portfolio/Images/Branding/EverLogo-Revision.png';
        const portal = this.getAttribute('portal') || null;

        // Move innerHTML content to a variable
        const content = this.innerHTML;
        this.innerHTML = ''; // Clear the innerHTML

        this.addLog(label, thumbnail, portal, content);
        this.addStyle();
    }

    addLog(label, thumbnailPath, portal = null, content = "") {
        //|__LOG CONTAINER
        const log = document.createElement("div");
        log.className = LOGCARD_TAG;

        //|__THUMBNAIL
        const thumbnailImg = document.createElement("img");

        thumbnailImg.src = thumbnailPath;
        thumbnailImg.alt = "Thumbnail";
        /* Add thumbnail to Log container*/
        log.appendChild(thumbnailImg);

        //|__INFORMATION
        const InfoBox = document.createElement("div");
        InfoBox.className = "logInfo";
        /* Add Info to Log container */
        log.appendChild(InfoBox);
        
        // |__LABEL
        InfoBox.innerHTML = `<h1>${label}</h1>`;
        // |__LogContent
        const logContent = document.createElement("div");
        logContent.className = "logContent";
        logContent.innerHTML = `${content}`;
        InfoBox.appendChild(logContent);
        // |__CTA - READ MORE BUTTON
        if (portal != null) {
            const ctaBox = document.createElement("div");
            ctaBox.id = "CTA_Box";
            ctaBox.innerHTML = `<cta-button type="dark" text="Read More" link="${portal}"/>`;
            InfoBox.appendChild(ctaBox);
        }

        this.shadowRoot.appendChild(log);
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
