

//document.getElementById("ok").onclick = okClick; // null 
//function okClick() { alert(" You clicked ok!! ") }
// called when page loads; sets up event handlers
function pageLoad() {
    document.getElementById("ok").onclick = okClick;
}
function okClick() {
    alert(" You clicked ok!!");
    const okButton = document.getElementById("ok");
    okButton.className = "fancy";
    setTimeout(reset, 2000);
}
function reset() {
    const okButton = document.getElementById("ok");
    okButton.className = "";
}
window.onload = pageLoad;  // onload is a browser event