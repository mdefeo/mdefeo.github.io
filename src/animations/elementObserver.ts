export const observeImages = (): void => {
  const callback: IntersectionObserverCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        img.classList.add('animate-images');
        observer.unobserve(img); // Stop observing after class is added
      }
    });
  };

  const options: IntersectionObserverInit = {
    root: null, // Default to viewport
    rootMargin: '0px', // No margin
    threshold: 0.1 // Trigger when 10% of the image is in the viewport
  };

  const observer = new IntersectionObserver(callback, options);

  // Select all image tags in the document
  const images = document.querySelectorAll('img');

  // Observe each image
  images.forEach((img: HTMLImageElement) => {
    observer.observe(img);
  });
};

// Add global click listener
export const addGlobalClickListener = (): void => {
  document.addEventListener('click', () => {
    observeImages();
  });
};