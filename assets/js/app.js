let tab1 = document.getElementById('tab1')
let tab2 = document.getElementById('tab2')
let tab3 = document.getElementById('tab3')
let tab4 = document.getElementById('tab4')
let opentab1 = document.getElementById('opentab1')
let opentab2 = document.getElementById('opentab1')
let opentab3 = document.getElementById('opentab1')
let opentab4 = document.getElementById('opentab1')
let roshni = document.getElementById('roshni')
let cross = document.getElementById("closebtn")
tab1.addEventListener("click", function () {
    opentab1.classList.remove("d_none")
    opentab1.classList.add("d_block")
    roshni.classList.add("d_none")
});
cross.addEventListener("click", function () {
    opentab1.classList.add("d_none")
    opentab1.classList.remove("d_block")
    roshni.classList.remove("d_none")
})
tab2.addEventListener("click", function () {
    opentab2.classList.remove("d_none")
    opentab2.classList.add("d_block")
    roshni.classList.add("d_none")
});
tab3.addEventListener("click", function () {
    opentab3.classList.remove("d_none")
    opentab3.classList.add("d_block")
    roshni.classList.add("d_none")
});
tab4.addEventListener("click", function () {
    opentab4.classList.remove("d_none")
    opentab4.classList.add("d_block")
    roshni.classList.add("d_none")
});