import React from 'react';

const GalleryItem = ({ image, name, year }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full">
      <div className="aspect-[16/9] w-full overflow-hidden"> {/* Changed from aspect-square to aspect-[16/9] */}
        <img 
          src={image}
          alt={name}
          className="h-full w-full object-contain md:object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="text-xl md:text-lg font-semibold">{name}</h3>
        <p className="text-base md:text-sm text-gray-200">{year}</p>
      </div>
    </div>
  );
};

export default GalleryItem;