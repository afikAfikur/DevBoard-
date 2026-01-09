document
  .getElementById("DiscoverBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "./QnA.html";
  });
const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

document.getElementById("day").innerText = today;
const monthName = new Date().toLocaleDateString("en-US", { month: "short" });
const Datenum = new Date().getDate();

const yearName = new Date().getFullYear();
document.getElementById("mon").innerText = monthName + " ";
document.getElementById("date").innerText = Datenum + " ";
document.getElementById("year").innerText = yearName;


 const buttons=document.querySelectorAll('.completebtn');
        for(const button of buttons){
            button.addEventListener('click',function(event){
                event.preventDefault();
                button.classList.remove(
                    'from-blue-500','to-blue-900'
                );
                button.classList.add(
                    'from-white-200','to-gray-100'
                );
                button.classList.add(
                    'text-black'
                );
                button.disabled=true;

                
            })
            
        }

// first FixMobile Issue


            
function Adding(name){
    const now = new Date().toLocaleTimeString();
    const newone=document.createElement('div');
    newone.className="tohide text-[16px] font-medium bg-[#F4F7FF] p-3 rounded-xl";
    const newp=document.createElement('p');
    newp.innerText=`You have completed the ${name} at ${now}`;
    newone.appendChild(newp);
    document.getElementById('containerHistory').appendChild(newone);
    let uppertask=Number(document.getElementById('tasknum').innerText);
    uppertask=uppertask-1;
    stringUpper=String(uppertask);
    document.getElementById('tasknum').innerText='0'+stringUpper;
    let ekdomupore=Number(document.getElementById('twenty3').innerText);
    ekdomupore+=1;
    stringekdom=String(ekdomupore);
    document.getElementById('twenty3').innerText=stringekdom;

}
const btnIssue=document.getElementById('btnIssue').innerText;
document.getElementById('mobilebtn').addEventListener('click',function(event){
    event.preventDefault();
    Adding(btnIssue);
})
const darkMode=document.getElementById('dark').innerText;
document.getElementById('darkbtn').addEventListener('click',function(event){
    event.preventDefault();
    Adding(darkMode);
})
const jobbutn=document.getElementById('job').innerText;
document.getElementById('jobtn').addEventListener('click',function(event){
    event.preventDefault();
    Adding(jobbutn);
})
const openAi=document.getElementById('Ai').innerText;
document.getElementById('aibtn').addEventListener('click',function(event){
    event.preventDefault();
    Adding(openAi);
})
const sc=document.getElementById('screen').innerText;
document.getElementById('screenbtn').addEventListener('click',function(event){
    event.preventDefault();
    Adding(sc);
})
const optimize=document.getElementById('ophom').innerText;
document.getElementById('ophombtn').addEventListener('click',function(event){
    event.preventDefault();
    Adding(optimize);
})
document.getElementById('clear').addEventListener('click',function(){
    const items=document.querySelectorAll('.tohide');
    for(const item of items){
item.style.display='none';

    }
    
    
})