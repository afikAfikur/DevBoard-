document.getElementById("homebtn").addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "./index.html";
});

let newonediv = document.createElement("div");
document
  .getElementById("containerHistory")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const q = "Questions-" + document.getElementById("adq").value;
    const newone = document.createElement("div");
    newone.className =
      "font-bold text-[16px] font-medium bg-[#F4F7FF] p-3 rounded-xl w-full";
    const newp = document.createElement("p");
    newp.innerText = q;
    newone.appendChild(newp);
    const oldform = document.getElementById("ansers");
    document.getElementById("ansr").value = "";
    const newform = oldform.cloneNode(true);
    const middleDiv = document.createElement("div");
    middleDiv.classList = "nediv  gap-[20px] flex flex-col";

    const ervitor = document.createElement("div");
    ervitor.classList = "ervitor flex flex-col gap-[15px]";
    ervitor.appendChild(newone);
    middleDiv.appendChild(ervitor);
    middleDiv.appendChild(newform);
    document.getElementById("QuestionsContainer").appendChild(middleDiv);
    let inputfinal = newform.querySelector("input");
    newonediv = ervitor;
    newform.addEventListener("submit", function (e) {
      e.preventDefault();
      let getting = inputfinal.value;
      const spannew = document.createElement("span");
      spannew.innerText = getting;
      newonediv.appendChild(spannew);
      inputfinal.value = " ";
    });
  });
document.getElementById("ansers").addEventListener("submit", function (event) {
  event.preventDefault();
  const answers = "Answer-" + document.getElementById("ansr").value;
  const newone = document.createElement("div");
  newone.className =
    "font-bold text-[16px] font-medium bg-[#F4F7FF] p-3 rounded-xl w-full";
  const newp = document.createElement("p");
  newp.innerText = answers;
  newone.appendChild(newp);
  document.getElementById("QuestionsContainerforQ").appendChild(newone);
  document.getElementById("ansr").value = "";
});
document.getElementById("clearall").addEventListener("click", function () {
  location.reload();
});



 document.getElementById('themebtn').addEventListener('click',function(event){
            event.preventDefault();
            const colors = [
 "#FFE4E6", "#FADADD", "#FFF0F3",
  "#FFF9C4", "#FFF3B0", "#FFFDE7",
  "#E3F2FD", "#EAF4FF", "#DCEEFF",
  "#FFE5B4", "#FFD6A5", "#FFF1E6"
]
 const randomIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomIndex];
document.getElementById('bodycolor').style.background=randomColor;
        })