const modalTriggerButtons = document.querySelectorAll("[data-modal-target");
const modals = document.querySelectorAll(".modal");
const modalCloseButtons = document.querySelectorAll(".modal-close");

modalTriggerButtons.forEach(elem => {

    elem.addEventListener("click", event => toggleModal(event.currentTarget.getAttribute("data-modal-target")));

});

modalCloseButtons.forEach(elem => {

    elem.addEventListener("click", event => toggleModal(event.currentTarget.closest(".modal").id));

});

modals.forEach(elem => {

    elem.addEventListener("click", event => {
        // 1번방법
        // if(event.target.classList.contains("modal")){
        //     toggleModal();
        // }

        // 2번방법
        if (event.currentTarget == event.target) toggleModal(event.currentTarget.id);
    });
});

document.addEventListener("keydown",event =>{
    if(event.key==="Escape" && document.querySelector(".modal.modal-show")){
        toggleModal(document.querySelector(".modal.modal-show").id);
    }
});

function toggleModal(modalId) {
    const modal = document.getElementById(modalId);

    if (window.getComputedStyle(modal).display === "flex") {
        modal.classList.add("modal-hide");
        setTimeout(() => {
            modal.style.display = "none";
            modal.classList.remove("modal-show", "modal-hide");
            document.body.style.overflow = "initial";

        }, 500);
    }
    else {
        modal.style.display = "flex";
        modal.classList.add("modal-show");
        document.body.style.overflow = "hidden";
    }
}