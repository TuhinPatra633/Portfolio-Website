document.addEventListener("DOMContentLoaded", () => {
    fetch("certificates.json")
      .then(response => response.json())
      .then(certificates => {
        const container = document.getElementById("certificates-container");
        certificates.forEach(cert => {
          const certBox = document.createElement("div");
          certBox.className = "box";
          certBox.innerHTML = `
            <img draggable="false" src="${cert.image}" alt="${cert.title}">
            <div class="content">
              <div class="tag">
                <h3>${cert.title}</h3>
              </div>
              <div class="desc">
                <p>${cert.description}</p>
              </div>
            </div>
          `;
          certBox.onclick = () => openModal(cert.image, cert.title);
          container.appendChild(certBox);
        });
      });
  });
  
  function openModal(imageSrc, title) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");
    const captionText = document.getElementById("caption");
  
    modal.style.display = "block";
    modalImg.src = imageSrc;
    captionText.innerHTML = title;
  }
  
  function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
  }
  