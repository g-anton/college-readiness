let counter = 1;

const goForward = () => {
  if (counter < 5) {
    counter++;
    let idToMatch = "#slide-" + counter;
    document.querySelector(idToMatch).classList.remove("hidden"); 
  }
};

const goBack = () => {
  if (counter > 1) {
    let idToMatch= "#slide-" + counter;
    document.querySelector(idToMatch).classList.add("hidden");
    counter--;
  }
};

const downloadPNG = () => {
  let containerToSave = document.querySelector("#checklist");
  
  html2canvas(containerToSave, {}).then(
    (canvas) => {
      let a = document.createElement("a");
      a.download = "checklist.png";
      a.href = canvas.toDataURL("image/png");
      a.click();
    }
  )
};

const openChecklist = () => {
  let checklist = document.querySelector("#checklist");
  checklist.classList.remove("noheight");
  checklist.classList.add("fullheight");
}
