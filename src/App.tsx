import React, { useState } from 'react';
import { Download, Image, Video, Volume2, VolumeX } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TikTokDownloader from './components/TikTokDownloader';
import ImageSelector from './components/ImageSelector';
import VideoCreator from './components/VideoCreator';

function App() {
  const [downloadedContent, setDownloadedContent] = useState<string | string[]>('');
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [createVideo, setCreateVideo] = useState(false);
  const [includeAudio, setIncludeAudio] = useState(true);

  const handleDownload = (content: string | string[]) => {
    setDownloadedContent(content);
    toast.success('Contenido descargado con éxito!');
  };

  const handleImageSelection = (images: string[]) => {
    setSelectedImages(images);
  };

  const handleCreateVideo = () => {
    // Aquí iría la lógica para crear el video con las imágenes seleccionadas
    toast.info('Creando video... (Funcionalidad no implementada)');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-8">Descargador de TikTok</h1>
      <TikTokDownloader onDownload={handleDownload} />
      
      {Array.isArray(downloadedContent) && (
        <ImageSelector images={downloadedContent} onSelect={handleImageSelection} />
      )}
      
      {selectedImages.length > 0 && (
        <div className="mt-4 flex flex-col items-center">
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              id="createVideo"
              checked={createVideo}
              onChange={(e) => setCreateVideo(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="createVideo">Crear video con imágenes seleccionadas</label>
          </div>
          
          {createVideo && (
            <div className="flex items-center mb-4">
              <button
                onClick={() => setIncludeAudio(!includeAudio)}
                className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                {includeAudio ? <Volume2 size={20} /> : <VolumeX size={20} />}
                <span className="ml-2">{includeAudio ? 'Con audio' : 'Sin audio'}</span>
              </button>
            </div>
          )}
          
          <button
            onClick={createVideo ? handleCreateVideo : () => {}}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 flex items-center"
          >
            {createVideo ? <Video size={20} className="mr-2" /> : <Image size={20} className="mr-2" />}
            {createVideo ? 'Crear Video' : 'Descargar Imágenes'}
          </button>
        </div>
      )}
      
      {typeof downloadedContent === 'string' && (
        <div className="mt-4">
          <a
            href={downloadedContent}
            download
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center"
          >
            <Download size={20} className="mr-2" />
            Descargar Video
          </a>
        </div>
      )}
      
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default App;