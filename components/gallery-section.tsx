"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useRef, useState } from "react";
import { galleryImages } from "@/config/gallery";

export function GallerySection() {
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  function openImage(index: number) {
    setActiveImage(index);
    dialogRef.current?.showModal();
  }

  function closeImage() {
    dialogRef.current?.close();
  }

  return (
    <section className="gallery-section section-pad" id="espaco" aria-labelledby="gallery-title">
      <div className="page-shell">
        <div className="section-heading section-heading--split gallery-heading">
          <div><p className="eyebrow"><span /> Um olhar por dentro</p><h2 id="gallery-title">Espaço para<br /><em>se sentir bem.</em></h2></div>
          <p className="section-intro">Imagens ilustrativas nesta prévia. Fotografias do consultório serão inseridas quando fornecidas e autorizadas.</p>
        </div>
        <div className="gallery-grid">{galleryImages.map((image, index) => (
          <button className={`gallery-item gallery-item--${index + 1}`} key={image.src} type="button" onClick={() => openImage(index)} aria-label={`Ampliar: ${image.caption}`}>
            <Image src={image.src} alt={image.alt} width={index === 0 ? 1100 : 700} height={index === 0 ? 850 : 900} sizes="(max-width: 760px) 90vw, 50vw" />
            <span className="gallery-item__caption">{image.caption}</span>
          </button>
        ))}</div>
      </div>
      <dialog
        className="gallery-dialog"
        ref={dialogRef}
        aria-label="Imagem ampliada da galeria"
        onKeyDown={(event) => {
          if (event.key === "Escape") closeImage();
        }}
        onCancel={(event) => {
          event.preventDefault();
          closeImage();
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeImage();
        }}
        onClose={() => setActiveImage(null)}
      >
        {activeImage !== null && (
          <div className="gallery-dialog__content">
            <button className="gallery-dialog__close" type="button" onClick={closeImage} aria-label="Fechar imagem ampliada">
              <X size={22} aria-hidden="true" />
            </button>
            <Image src={galleryImages[activeImage].src} alt={galleryImages[activeImage].alt} fill sizes="90vw" />
            <p>{galleryImages[activeImage].caption}</p>
          </div>
        )}
      </dialog>
    </section>
  );
}