import React, { useState } from 'react';

function Gallery() {
  const initialLikes = [0, 0, 0, 0, 0];
  const [likes, setLikes] = useState(initialLikes);

  const handleLike = (index) => {
    const newLikes = [...likes];
    newLikes[index] += 1;
    setLikes(newLikes);
  };

  const images = [
    { id: 1, url: 'https://premium4animals.pl/upload/premium4/blog//Kot-ragdoll.jpeg', title: 'Image 1' },
    { id: 2, url: 'https://psiedobre.pl/upload/psiedobre/blog//gold-bengal-cat-white-space-1-.jpg', title: 'Image 2' },
    { id: 3, url: 'https://psiedobre.pl/upload/psiedobre/images/2023-10-25_1_db.jpg', title: 'Image 3' },
    { id: 4, url: 'https://www.zooplus.pl/magazyn/wp-content/uploads/2023/02/Portret-kota-amerykanskiego-krotkowlosego-768x512.jpg', title: 'Image 4' },
    { id: 5, url: 'https://lugers.pl/data/include/cms/Blog-Lugers/AdobeStock_311228231_1.jpeg', title: 'Image 5' },
  ];

  return (
    <div className="page">
      <h1>Gallery</h1>
      <p>Here are some of our latest projects.</p>
      <div className="gallery">
        {images.map((image, index) => (
          <div key={image.id} className="gallery-item">
            <img src={image.url} alt={image.title} />
            <p>{image.title}</p>
            <button onClick={() => handleLike(index)}>Like ({likes[index]})</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
