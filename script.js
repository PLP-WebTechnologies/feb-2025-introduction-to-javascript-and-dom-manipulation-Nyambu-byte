function changeText() {
    document.getElementById("description").textContent = "🎉 The text has been changed!";
  }
  
  function changeStyle() {
    document.getElementById("title").classList.toggle("highlight");
  }
  
  function addElement() {
    const newItem = document.createElement("li");
    newItem.textContent = "New Topic";
    document.getElementById("itemList").appendChild(newItem);
  }
  
  function removeElement() {
    const list = document.getElementById("itemList");
    if (list.children.length > 0) {
      list.removeChild(list.lastElementChild);
    }
  }