const maintenanceNotice = document.getElementById("maintenance-notice");

const removeNotice = function () {
  maintenanceNotice.classList.add("invisible");
};
setTimeout(removeNotice, 5000);
