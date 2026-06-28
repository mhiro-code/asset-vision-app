(function(){
function openModal(title,body){document.getElementById("modalTitle").innerHTML=title;document.getElementById("modalBody").innerHTML=body;document.getElementById("modalBackdrop").style.display="flex"}
function closeModal(){document.getElementById("modalBackdrop").style.display="none"}
function closeModalIfOpen(){const backdrop=document.getElementById("modalBackdrop");if(backdrop&&backdrop.style.display!=="none")backdrop.style.display="none"}

window.AssetVisionModal={openModal,closeModal,closeModalIfOpen};
})();
