import React from 'react';
import { Play } from 'lucide-react';

interface VideoCreatorProps {
  images: string[];
  includeAudio: boolean;
  onCreateVideo: () => void;
}

const VideoCreator: React.FC<VideoCreatorProps> = ({ images, includeAudio, onCreateVideo }) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Crear video con imágenes seleccionadas</h2>
      <p className="mb-4">
        Se creará un video con {images.length} imágenes seleccionadas.
        {includeAudio ? ' Se incluirá el audio original.' : ' No se incluirá audio.'}
      </p>
      <button
        onClick={onCreateVideo}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 flex items-center"
      >
        <Play size={20} className="mr-2" />
        Crear Video
      </button>
    </div>
  );
};

export default VideoCreator;