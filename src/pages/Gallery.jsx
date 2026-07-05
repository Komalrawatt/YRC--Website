import React, { useState, useEffect } from 'react';
import { gallery } from '../../gallery';
import GalleryItem from '../components/GalleryItem';

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  const [filteredGallery, setFilteredGallery] = useState([]);
  const years = ['all', ...new Set(gallery.map(item => item.year))].sort((a, b) => b - a);

  useEffect(() => {
    const filtered = filter === 'all' 
      ? gallery 
      : gallery.filter(item => item.year === filter);
    setFilteredGallery(filtered);
  }, [filter]);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Gallery</h1>
        <p className="text-base md:text-lg text-gray-600">Capturing our journey of service and compassion</p>
      </div>

      {/* Year Filter */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setFilter(year)}
            className={`px-4 md:px-6 py-2 rounded-full text-sm font-medium transition-all
              ${filter === year 
                ? 'bg-[#A7101F] text-white shadow-lg' 
                : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
              }`}
          >
            {year === 'all' ? 'All Years' : year}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {filteredGallery.map((item) => (
            <GalleryItem
              key={item.id}
              image={item.image}
              name={item.name}
              year={item.year}
            />
          ))}
        </div>

        {filteredGallery.length === 0 && (
          <div className="text-center py-8 md:py-12">
            <p className="text-gray-500 text-lg">No images found for the selected year.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;