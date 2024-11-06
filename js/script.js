document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    const toggleImagesBtn = document.getElementById("toggleImagesBtn");

    // Referências para a visualização em tela cheia
    const fullscreenOverlay = document.getElementById("fullscreenOverlay");
    const fullscreenImage = document.getElementById("fullscreenImage");
    const closeFullscreen = document.getElementById("closeFullscreen");

    // Defina os grupos de imagens
    const imageGroups = [
        ['../images/img1.png', '../images/img2.png', './img3.png', './img4.png', './img5.png', './img6.png', './img7.png'],
        ['./img1B.png', './img2B.png', './img3B.png', './img4B.png', './img5B.png', './img6B.png', './img7BS.png']
    ];
    let currentGroupIndex = 0;

    // Função para atualizar as imagens do grupo atual
    function updateImages() {
        const images = imageGroups[currentGroupIndex];
        cards.forEach((card, index) => {
            card.style.backgroundImage = `url(${images[index]})`;
            card.dataset.fullImage = images[index]; // Armazena o caminho completo da imagem para o modo tela cheia
        });
    }

    // Alternar entre os grupos de imagens ao clicar no botão
    toggleImagesBtn.addEventListener("click", () => {
        currentGroupIndex = (currentGroupIndex + 1) % imageGroups.length;
        updateImages();
    });

    // Inicialize o grupo de imagens inicial
    updateImages();

    // Função para abrir a imagem em tela cheia
    function openFullscreen(imageSrc) {
        fullscreenImage.src = imageSrc;
        fullscreenOverlay.classList.add("active");
    }

    // Função para fechar a visualização em tela cheia
    function closeFullscreenView() {
        fullscreenOverlay.classList.remove("active");
        fullscreenImage.src = "";
    }

    // Adiciona o evento de duplo clique para abrir a imagem em tela cheia
    cards.forEach(card => {
        card.addEventListener("dblclick", () => {
            const imageSrc = card.dataset.fullImage;
            openFullscreen(imageSrc);
        });
    });

    // Evento para fechar a visualização em tela cheia
    closeFullscreen.addEventListener("click", closeFullscreenView);

    // Fecha a visualização em tela cheia ao clicar fora da imagem
    fullscreenOverlay.addEventListener("click", (e) => {
        if (e.target === fullscreenOverlay) {
            closeFullscreenView();
        }
    });
});
