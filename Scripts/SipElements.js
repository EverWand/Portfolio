const LOGCARD_TAG = "devCard";
const LOG_VIEW_TAG = "DevPage"
const TRAIT_TAG = "trait";

// Create Devlog Entry Tag
class DevLog extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
    }
    
    connectedCallback() {
        const label = this.getAttribute('label') || 'Label';
        const thumbnail = this.getAttribute('thumbnail') || '../Images/Branding/EverLogo-Revision.png';             
        const logPath = this.getAttribute('blog') || null;
        const content = this.innerHTML; // Move innerHTML content to a variable

        this.innerHTML = ''; // Clear the innerHTML

        /* DEVLOG HTML STRUCTURE */
        this.shadowRoot.innerHTML = `
            <div class="${LOGCARD_TAG}">
                <img src="${thumbnail}" alt="Thumbnail">
                <div class="logInfo">
                    <h2>${label}</h2>
                    <div class="logContent">${content}</div>
                </div>
            </div>
        `; 

        //ADD EVENT LISTENER
        this.shadowRoot.querySelector(`.${LOGCARD_TAG}`).addEventListener('click', () => {
            updateLogPage(logPath);
        });

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

            .${LOGCARD_TAG}:hover{
                background-color:rgba(125, 140, 154, .5); /* Change background color on hover */
            }
        `;

        this.shadowRoot.appendChild(style);
    }
}
customElements.define('dev-log', DevLog);

function updateLogPage(logPath){
    console.log("Updating log page with path:", logPath); // Debugging line
    const viewArea = document.getElementById(`${LOG_VIEW_TAG}`);
    if (logPath) {
        viewArea.src = logPath;
    } else {
        console.error("No logPath provided");
    }
}
