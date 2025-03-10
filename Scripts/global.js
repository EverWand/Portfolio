const PlaceHolderImg = "../Images/PlaceholderLC.png";

class NavBar {
    constructor() {
        // Example navigation items
        const navItems = [
            { text: "Home", href: "index.html" },
            { text: "Portfolio", href: "Pages/portfolio.html" },
            { text: "SIP", href: "Pages/sip.html" },
            { text: "Boards", href: "Pages/board.html" },
            { text: "Contact", href: "Pages/contact.html" },
            { text: "About", href: "Pages/about.html" }
        ];

        // Create the navigation bar
        const nav = document.createElement("nav");
        this.ul = document.createElement("ul");

        navItems.forEach(item => {
            this.addNav(item.text, item.href);
        });

        nav.appendChild(this.ul);

        document.body.insertBefore(nav, document.body.firstChild);

        this.addStyles(); //STYLES THE NAVIGATION BAR
    }

    createLogo() {
        const logo = document.createElement("img");

        logo.id = "Nav-Logo";
        logo.src = "./Images/Branding/EverLogo-Revision.png";
        logo.alt = "Site Logo";
        logo.onclick = () => (window.location.href = "./index.html");
        
        this.navContainer.appendChild(logo);
    }

    addNav(name, href) {
        const li = document.createElement("li");
        li.id = `NavOpt_${name}`;
        li.className = "Nav-Item";
        
        // Set the path base for the link, based on root folder
        const rootPath = window.location.pathname.includes('/Pages/') ? '../' : './';
        const fullPath = `${rootPath}${href}`;
        
        const a = document.createElement("a");
        a.href = fullPath;
        a.textContent = name;

        li.appendChild(a);
        this.ul.appendChild(li);
    }

    addStyles() {
        const style = document.createElement("style");
        style.textContent = `
            nav {
                width: 100%;
                padding: .5em;
                background-color: var(--P1_DarkAccent);
                display: flex;
                position: fixed;
                z-index: 99;
            }
            nav ul {
                list-style: none;
                display: flex;
                gap: .5em;
            }
            .Nav-Item a {
                color: var(--P1_LightShade); 
                text-decoration: none;
                font-size: 18px;
                padding: 10px;
            }
            .Nav-Item a:hover {
                background-color: var(--P1_DarkShade);
                border-radius: 7px;
            }
        `;
        document.head.appendChild(style);
    }
}

class CTAButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const type = this.getAttribute('type') || 'dark';
        const text = this.getAttribute('text') || 'Click Here';
        const link = this.getAttribute('link') || '#';

        const button = document.createElement('a');
        button.href = link;
        button.textContent = text;
        button.className = 'cta-button';

        this.shadowRoot.appendChild(button);

        this.addStyles(type);
    }

    addStyles(type) {
        let borderColor, textColor, hoverColor;
        
        if (type === 'dark') {
            borderColor = 'var(--P1_DarkAccent)';
            textColor = 'var(--P1_DarkAccent)';
            hoverColor = '#464b52';
        } else {
            borderColor = 'var(--P1_LightShade)';
            textColor = 'var(--P1_LightShade)';
            hoverColor = '#bebebe';
        }

        const style = document.createElement('style');
        style.textContent = `
            .cta-button {
                font-size: 1rem;
                background-color: rgba(0, 0, 0, 0.0);
                color: ${textColor};
                font-weight: bold;
                text-decoration: none;
                padding: .6em 1em;
                border: .2em, double, ${borderColor};
                border-radius: .2em .8em .2em .8em;
                flex: 1;
                max-width: 500px;
                text-align: center;
            }
            .cta-button:hover {
                color:${hoverColor};
                border-color:${hoverColor};
                box-shadow: 0px 1px 0px 0px black;
            }
        `;
        this.shadowRoot.appendChild(style);
    }
}

customElements.define('cta-button', CTAButton);


// Initialize the navigation bar
document.addEventListener("DOMContentLoaded", () => {
    // Pass `true` for index.html level or `false` for pages folder
    isIndexLevel = window.location.pathname.endsWith("index.html");

    new NavBar();
});

//FOOTER DISPLAY
document.addEventListener("DOMContentLoaded", () => {
    const footer = document.createElement("footer");
    footer.innerHTML = `
    <div id="FooterContent">
        <div id="FooterLogo">
            <img src="./Images/Branding/EverLogo-Revision.png" alt="Site Logo">
        </div>
        <div id="FooterText">
            <p>Page Created by Lucas Foxworthy</p>
            <hr>
            <p>Last Updated: 3/10/2025</p>
        </div>
    </div>
    `;

    document.body.appendChild(footer);

    const style = document.createElement("style");

    style.textContent = `
        footer{
            background-color: var(--P1_DarkAccent);
            color: var(--P1_LightShade);
            text-align: center;
            padding: .7em;
            margin-top: auto;
        }
        #FooterContent{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1em;
        }
        #FooterLogo img{
            width: 100px;
        }
    `;
    
    document.head.appendChild(style)
});