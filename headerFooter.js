var headerContent = [
    {
        name: "Games",
        link: "games.html"
    }
];
var footerContent = [
    {
        img: "https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/66e3d7f4ef6498ac018f2c55_Symbol.svg",
        link: "https://discord.gg/Y3XNzmQpCe"
    },
    {
        img: "images/github-mark-white.png",
        link: "https://github.com/Pineapples1000"
    },
    {
        img: "images/scratch-logo.png",
        link: "https://scratch.mit.edu/users/cuddlyscout"
    },
    {
        img: "images/ka-logo.png",
        link: "https://www.khanacademy.org/profile/cuddlyscout"
    }
];
const headerElement = document.getElementById('headerID');
let headerHTML = `<a class="navSection noTextDecoration" href="index.html"><img src="images/pappy.png" id="navImg"><span class="navText">Pineapple Programming</span></a>`;
for (let i = 0; i < headerContent.length; i++) {
    headerHTML += `<a class="navSection noTextDecoration" href="${headerContent[i].link}"><span class="navText">${headerContent[i].name}</span></a>`;
}
headerElement.innerHTML = headerHTML;
const footerElement = document.getElementById('footerID');
let footerHTML = `<p>&copy;2025, Pineapples. All rights reserved.</p><br>`;
for (let i = 0; i < footerContent.length; i++) {
    footerHTML += `<a href="${footerContent[i].link}"><img class="footerImage" src="${footerContent[i].img}"></a>`;
}
footerElement.innerHTML = footerHTML;