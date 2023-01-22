const botaoTrailer = document.querySelector(".botao-trailer");
const botaoTrailerModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector (".modal");
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList .toggle("aberto");
}

botaoTrailer.addEventListener("click", () =>{
    alternarModal();
   video.setAttribute("src", linkDoVideo);
});

botaoTrailerModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
})

