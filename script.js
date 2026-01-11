// Tomamos los elementos del HTML
const imageUrlInput = document.getElementById("imageUrl");
const addImageButton = document.getElementById("addImage");
const deleteImageButton = document.getElementById("deleteImage");
const gallery = document.getElementById("gallery");

// Aquí guardamos la imagen seleccionada
let selectedImage = null;

// Cuando se hace clic en "Agregar Imagen"
addImageButton.addEventListener("click", () => {

    const url = imageUrlInput.value;

    if (url === "") {
        alert("Por favor ingresa una URL de imagen");
        return;
    }

    const img = document.createElement("img");
    img.src = url;

    img.addEventListener("click", () => {

        if (selectedImage) {
            selectedImage.classList.remove("selected");
        }

        img.classList.add("selected");
        selectedImage = img;
    });

    gallery.appendChild(img);
    imageUrlInput.value = "";
});

// Cuando se hace clic en "Eliminar Imagen Seleccionada"
deleteImageButton.addEventListener("click", () => {

    if (!selectedImage) {
        alert("No hay ninguna imagen seleccionada");
        return;
    }

    gallery.removeChild(selectedImage);
    selectedImage = null;
});

// Atajo con teclado: tecla Delete
document.addEventListener("keydown", (event) => {
    if (event.key === "Delete" && selectedImage) {
        gallery.removeChild(selectedImage);
        selectedImage = null;
    }
});
