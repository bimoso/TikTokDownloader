import React, { useState } from 'react';
import axios from 'axios';
import { Download } from 'lucide-react';
import { toast } from 'react-toastify';

interface TikTokDownloaderProps {
  onDownload: (content: string | string[]) => void;
}

const TikTokDownloader: React.FC<TikTokDownloaderProps> = ({ onDownload }) => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    try {
      // Simulating the download. In a real implementation, you'd make a request to a backend
      const response = await axios.get(`https://api.example.com/tiktok?url=${encodeURIComponent(url)}`);
      
      // Simulating different types of response
      const content = Math.random() > 0.5 ? 
        'https://example.com/video.mp4' : 
        ['https://example.com/image1.jpg', 'https://example.com/image2.jpg', 'https://example.com/image3.jpg'];
      
      onDownload(content);
    } catch (error) {
      // Safe error logging
      if (error instanceof Error) {
        console.error('Error al descargar:', error.message);
        toast.error(`Error al descargar: ${error.message}`);
      } else {
        console.error('Error desconocido al descargar');
        toast.error('Error desconocido al descargar');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-md">
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Pega el enlace de TikTok aquí"
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded"
      />
      <button
        onClick={handleDownload}
        disabled={loading || !url}
        className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center ${loading || !url ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        <Download size={20} className="mr-2" />
        {loading ? 'Descargando...' : 'Descargar'}
      </button>
    </div>
  );
};

export default TikTokDownloader;