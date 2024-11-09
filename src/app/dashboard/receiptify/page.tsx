"use client";
import React, { useState } from 'react';
import { Upload, Camera } from 'lucide-react';
import Dashboard from '@/components/dashboard'; // Import your existing Dashboard component
import { Button } from '@/components/ui/button';

const ReceiptUploadContent = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-16"> {/* Added more top margin */}
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8">
        <div className="flex flex-col items-center gap-4">
          {/* Upload icon */}
          <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
            <Upload className="w-6 h-6 text-blue-500" />
          </div>
          
          {/* Upload text */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Upload Receipt</h3>
            <p className="text-sm text-gray-500">
              Drag and drop your receipt or click to browse
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-2">
            <Button
              variant="outline"
              onClick={() => document.getElementById('file-upload').click()}
              className="flex items-center gap-2"
            >
              <Upload className="w-4 h-4" />
              Browse Files
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2"
            >
              <Camera className="w-4 h-4" />
              Take Photo
            </Button>
          </div>

          <input
            id="file-upload"
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
      </div>
    </div>
  );
};

const ReceiptPage = () => {
  return (
    <Dashboard>
      <ReceiptUploadContent />
    </Dashboard>
  );
};

export default ReceiptPage;