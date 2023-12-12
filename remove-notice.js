const maintenanceNotice = document.getElementByClass("container");

const removeNotice = function () {
  maintenanceNotice.classList.add("d-none");
};
setTimeout(removeNotice, 5000);
console.log(removeNotice);
