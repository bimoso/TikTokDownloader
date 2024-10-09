import React, { useState } from 'react';
import { Check } from 'lucide-react';

interface ImageSelectorProps {
  images: string[];
  onSelect: (selectedImages: string[]) => void;
}

const ImageSelector: React.FC<ImageSelectorProps> = ({ images, onSelect }) => {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const toggleImageSelection = (image: string) => {
    setSelectedImages(prev => 
      prev.includes(image) 
        ? prev.filter(img => img !== image)
        : [...prev, image]
    );
  };

  React.useEffect(() => {
    onSelect(selectedImages);
  }, [selectedImages, onSelect]);

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Selecciona las imágenes:</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image}
              alt={`Imagen ${index + 1}`}
              className={`w-full h-40 object-cover cursor-pointer ${
                selectedImages.includes(image) ? 'border-4 border-blue-500' : ''
              }`}
              onClick={() => toggleImageSelection(image)}
            />
            {selectedImages.includes(image) && (
              <div className="absolute top-2 right-2 bg-blue-500 rounded-full p-1">
                <Check size={16} color="white" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSelector;