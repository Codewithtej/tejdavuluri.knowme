import { Fragment, useEffect, useState } from "react";

import {
  albumSpreads,
  allPhotos,
  featuredPhotos,
  galleryPhotos,
  imageUrl,
  openingPhoto,
  siteText,
} from "../content/text/siteContent";

export function Portfolio() {
  const [selected, setSelected] = useState<number | null>(null);
  const [instagramOpen, setInstagramOpen] = useState(false);

  const openPhoto = (index: number) => {
    if ("startViewTransition" in document) {
      const transitionDocument = document as Document & {
        startViewTransition: (callback: () => void) => void;
      };
      transitionDocument.startViewTransition(() => setSelected(index));
      return;
    }
    setSelected(index);
  };

  const closePhoto = () => setSelected(null);
  const move = (direction: number) => {
    if (selected === null) return;
    setSelected((selected + direction + allPhotos.length) % allPhotos.length);
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const scenes = Array.from(document.querySelectorAll<HTMLElement>(".photo-scene"));
    document.documentElement.classList.add("motion-ready");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -10% 0px" },
    );
    scenes.forEach((scene) => observer.observe(scene));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  useEffect(() => {
    if (selected === null) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closePhoto();
      if (event.key === "ArrowRight") move(1);
      if (event.key === "ArrowLeft") move(-1);
    };

    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  useEffect(() => {
    let frame = 0;
    const moveGlow = (x: number, y: number) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--glow-x", `${x}px`);
        document.documentElement.style.setProperty("--glow-y", `${y}px`);
      });
    };
    const onPointerMove = (event: PointerEvent) => moveGlow(event.clientX, event.clientY);
    const onPointerDown = (event: PointerEvent) => {
      moveGlow(event.clientX, event.clientY);
      document.documentElement.classList.add("touch-glow");
      window.setTimeout(() => document.documentElement.classList.remove("touch-glow"), 520);
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, []);

  return (
    <main>
      <div className="cursor-glow" aria-hidden="true" />
      <button className="opening" onClick={() => openPhoto(0)} aria-label="Open opening portrait">
        <img
          src={imageUrl(openingPhoto.file)}
          alt={openingPhoto.alt}
          fetchPriority="high"
          style={{ objectPosition: openingPhoto.position }}
        />
        <div className="opening-shade" />
        <div className="opening-copy">
          <h1>{siteText.name}</h1>
          <strong>{openingPhoto.location}</strong>
          <span>{openingPhoto.story}</span>
        </div>
        <span className="scroll-cue" aria-hidden="true" />
      </button>

      <div className="passions-line" aria-label="Interests">
        {siteText.interests.map((interest, index) => (
          <Fragment key={interest}>
            {index > 0 && <i />}
            {interest}
          </Fragment>
        ))}
      </div>

      <section className="feature-pair" aria-label="Featured photographs">
        {featuredPhotos.map((photo, index) => (
          <button
            className="photo-scene"
            key={photo.file}
            onClick={() => openPhoto(index + 1)}
            aria-label={`Open ${photo.alt}`}
          >
            <img src={imageUrl(photo.file)} alt={photo.alt} style={{ objectPosition: photo.position }} />
            <span className="photo-caption">
              <strong>{photo.location}</strong>
              <span>{photo.story}</span>
            </span>
          </button>
        ))}
      </section>

      <section className="story-ribbon" aria-label="A little more about Tej">
        <p>{siteText.intro[0]}<br />{siteText.intro[1]}</p>
      </section>

      <section className="gallery" aria-label="Photo gallery">
        {albumSpreads.map((spread, spreadIndex) => (
          <Fragment key={`${spread.kind}-${spreadIndex}`}>
            <div className="album-spread" data-spread={spread.kind}>
              {spread.photos.map((photoIndex) => {
                const photo = galleryPhotos[photoIndex];
                return (
                  <button
                    key={photo.file}
                    className="photo-scene"
                    data-scene={photo.scene}
                    onClick={() => openPhoto(photoIndex + 3)}
                    aria-label={`Open ${photo.alt}`}
                  >
                    <img src={imageUrl(photo.file)} alt={photo.alt} loading="lazy" style={{ objectPosition: photo.position }} />
                    <span className="photo-caption"><strong>{photo.location}</strong><span>{photo.story}</span></span>
                  </button>
                );
              })}
            </div>
            {spreadIndex === 1 && (
              <aside className="story-interlude" data-align="left">
                <p>{siteText.interludes[0][0]}<br />{siteText.interludes[0][1]}</p>
              </aside>
            )}
            {spreadIndex === 3 && (
              <aside className="story-interlude" data-align="right">
                <p>{siteText.interludes[1][0]}<br />{siteText.interludes[1][1]}</p>
              </aside>
            )}
          </Fragment>
        ))}
      </section>

      <div className="quiet-end">{siteText.closing}</div>

      <a
        className={`instagram-float${instagramOpen ? " is-open" : ""}`}
        href={siteText.instagramUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="See more of Tej's life on Instagram"
        onClick={(event) => {
          if (!instagramOpen && window.matchMedia("(hover: none)").matches) {
            event.preventDefault();
            setInstagramOpen(true);
          }
        }}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4.2" />
          <circle className="ig-dot" cx="17.4" cy="6.8" r="1" />
        </svg>
        <span>{siteText.instagramLabel}</span>
      </a>

      {selected !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Expanded photograph"
          onClick={closePhoto}
        >
          <button className="close" onClick={closePhoto} aria-label="Close photograph">
            ×
          </button>
          <button
            className="previous"
            onClick={(event) => {
              event.stopPropagation();
              move(-1);
            }}
            aria-label="Previous photograph"
          >
            ‹
          </button>
          <figure onClick={(event) => event.stopPropagation()}>
            <img
              key={allPhotos[selected].file}
              src={imageUrl(allPhotos[selected].file)}
              alt={allPhotos[selected].alt}
            />
            <figcaption>
              <strong>{allPhotos[selected].location}</strong>
              <span>{allPhotos[selected].story}</span>
              <small>
                {String(selected + 1).padStart(2, "0")} / {allPhotos.length}
              </small>
            </figcaption>
          </figure>
          <button
            className="next"
            onClick={(event) => {
              event.stopPropagation();
              move(1);
            }}
            aria-label="Next photograph"
          >
            ›
          </button>
        </div>
      )}
    </main>
  );
}
