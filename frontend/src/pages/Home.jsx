import { useEffect, useState } from "react";

const Home = () => {
  const [images, setImages] = useState([]);

  const fetchImageData = async () => {
    try {
      const response = await fetch('/api/images');
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    fetchImageData();
  }, []);

  const handleCompress = () => {
    console.log("Compress button clicked");
    // File upload + compression logic goes here
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6 md:p-8">
      {/* Header with compress button */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-xl sm:text-2xl font-bold">Image Compression</h1>
        <button 
          onClick={handleCompress}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded w-full sm:w-auto"
        >
       Upload Image
        </button>
      </div>

      {/* Image list table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-800 rounded-lg overflow-hidden text-sm sm:text-base">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-4 sm:px-6 py-3 text-left">Original Image</th>
              <th className="px-4 sm:px-6 py-3 text-left">Compressed Image</th>
              <th className="px-4 sm:px-6 py-3 text-left">Date</th>
              <th className="px-4 sm:px-6 py-3 text-left">Time</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-600">
            {images.map((image, index) => (
              <tr key={index}>
                <td className="px-4 sm:px-6 py-3">
                  <a 
                    href={image.originalUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline break-all"
                  >
                    View Original
                  </a>
                </td>
                <td className="px-4 sm:px-6 py-3">
                  <a 
                    href={image.compressedUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline break-all"
                  >
                    View Compressed
                  </a>
                </td>
                <td className="px-4 sm:px-6 py-3">
                  {new Date(image.timestamp).toLocaleDateString()}
                </td>
                <td className="px-4 sm:px-6 py-3">
                  {new Date(image.timestamp).toLocaleTimeString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Empty state */}
      {images.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          No compressed images yet. Click "Compress" to get started.
        </div>
      )}
    </div>
  );
};

export default Home;
