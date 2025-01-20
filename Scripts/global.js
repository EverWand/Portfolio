const PlaceHolderImg = "../Images/PlaceholderLC.png";


var isIndexLevel = false;

class NavBar {
    constructor(containerId) {
        // Find the navigation container element
        this.navContainer = document.getElementById(containerId);
        if (!this.navContainer) {
            console.error(`Element with ID "${containerId}" not found.`);
            return;
        }

        // Create the navigation logo
        //this.createLogo();

        // Create and append navigation options
        const navOptions = document.createElement("ul");
        navOptions.id = "NavOptions";
        this.navContainer.appendChild(navOptions);

        // Add navigation items
        this.addNav(navOptions, "Home", "index.html");
        this.addNav(navOptions, "Portfolio", "Pages/portfolio.html");
        this.addNav(navOptions, "SIP", "Pages/sip.html");
        this.addNav(navOptions, "Objectives", "Pages/board.html");
        this.addNav(navOptions, "About Me", "Pages/about.html");
        this.addNav(navOptions, "Contact", "Pages/contact.html");
    }

    createLogo() {
        const logo = document.createElement("img");

        logo.id = "Nav-Logo";
        logo.src = "./Images/Branding/EverLogo-Revision.png";
        logo.alt = "Site Logo";
        logo.onclick = () => (window.location.href = "./index.html");
        
        this.navContainer.appendChild(logo);
    }

    addNav(navOptions, name, href) {
        
        const listItem = document.createElement("li");
        listItem.id = `NavOpt_${name}`;
        listItem.className = "Nav-Item";
        
        const link = document.createElement("a");
        var pathBase = isIndexLevel ? "./" : "../";
        link.href = pathBase + href;
        link.textContent = name;

        listItem.appendChild(link);
        navOptions.appendChild(listItem);
    }
}


// Initialize the navigation bar
document.addEventListener("DOMContentLoaded", () => {
    // Pass `true` for index.html level or `false` for pages folder
    isIndexLevel = window.location.pathname.endsWith("index.html");

    new NavBar("NavBar");
});