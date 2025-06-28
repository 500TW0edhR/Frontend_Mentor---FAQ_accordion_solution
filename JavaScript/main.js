const btn = document.querySelectorAll(".btn");
// console.log(btn);// NodeList(4)[img btn accept *4]

const accept = document.querySelector(".accept");
// console.log(accept);// NodeList(4)[img btn *4]

const p = document.querySelectorAll("p");

const answer = document.querySelectorAll(".answer");


for (let i = 0; i < p.length; i++) {

    btn[i].addEventListener("click", (e) => {
        console.log(e.target);//<img class="q btn accept"> <+-button>
        // console.log(e.target.className);// q btn accept = class.Name
        // console.log(dd[j]);// <dd class="answer">

        if (e.target.className.match(/accept/) ) {

            e.target.classList.remove("accept");
            e.target.src = "./assets/images/icon-plus.svg";
            p[i].classList.add("answer");
        }
        else if (e.target.className != "accept") {

            e.target.classList.add("accept");
            e.target.src = "./assets/images/icon-minus.svg";
            p[i].classList.remove("answer");
        }
    });
}
