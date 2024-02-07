const node = document.querySelector(".content");
const searchBtn = document.querySelector("#basic-addon2");
const input = document.querySelector(".form-control");



const seachFunc = ()=>{
    node.innerHTML = "";
    const search = document.querySelector(".form-control").value;
    fetch(`https://api.pexels.com/v1/search?query=${search}`, {method:"GET", headers:{"Authorization":"AFuLktGiXVYeVSfmCrZU1SeImKGIWrzPDN9oFc1aFN7l7NDVd9fsODc5"}})
    .then((response) => {return response.json()})
    .then((json) => {
    array = json.photos;

    let cards = array.map((element, index) => {
        let cardCont = document.createElement("div");
        cardCont.classList.add("col-sm-6", "col-md-4", "col-lg-3", "my-3", "px-2");

        let card = document.createElement("div");
        card.classList.add("card", "pb-5", "pt-2", "px-2", "h-100");

        let img = document.createElement("img");
        img.classList.add("card-img-top");
        img.setAttribute("src", element.src.medium);
        img.setAttribute("alt", "image"+ index);
        
        let paragraph = document.createElement("p");
        paragraph.classList.add("mt-2");
        paragraph.style.fontSize = "16pt";
        paragraph.style.fontWeight = "600";
        paragraph.innerText = element.alt;

        let button = document.createElement("button");
        button.classList.add("btn", "btn-primary", "bottom");
        button.innerText = "Dettaglio";

        card.appendChild(img);
        card.appendChild(paragraph);
        card.appendChild(button);
        cardCont.appendChild(card);
        
        return cardCont;
    });
    cards.forEach(element => {
        node.appendChild(element);
    });
})
.catch((err) => console.log("Error code: ", err));
}

const pressEnter = (event)=>{
    let keyCode = event.keyCode;
    if(keyCode === 13){
        seachFunc();
    }
}

searchBtn.addEventListener("click", seachFunc);
input.addEventListener("keydown", pressEnter);