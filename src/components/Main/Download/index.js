import React, { useEffect, useState } from 'react'
import { imageFormats2 } from '../Formats/formats';
import { videoFormats2 } from '../Formats/formats';
import { audioFormats2 } from '../Formats/formats';
import { BiCloudDownload } from "react-icons/bi";

export const DownloadButton = ({ fileUrl,type }) => {
    const [showButton, setShowButton] = useState(false);
    console.log(fileUrl)
    useEffect(() => {
      const timer = setTimeout(() => {
        setShowButton(true);
      }, 3000);
  
      return () => clearTimeout(timer);
    }, []); // Run effect only once after component mounts
    const handleDownload = () => {
      // URL of the file to download
      var url;
      if (type.toUpperCase() in imageFormats2){
        url="https://lobster-app-eg6c6.ondigitalocean.app/download/uploads/"+fileUrl
      }
      else if(type.toUpperCase() in videoFormats2){
        url="https://lobster-app-eg6c6.ondigitalocean.app/download/uploads/"+fileUrl
        
      }
      else if(type.toUpperCase() in audioFormats2){
        url="https://lobster-app-eg6c6.ondigitalocean.app/download/uploads/"+fileUrl
        
      }
      console.log(url)
      const downloadAnchor = document.createElement("a");
      downloadAnchor.href = url;
      downloadAnchor.target = "_blank"; // Open in new tab
      // Set the download filename
  
      // Append the anchor to the body
      document.body.appendChild(downloadAnchor);
  
      // Delay before triggering the click event
      setTimeout(() => {
        downloadAnchor.click();
        // Clean up
        document.body.removeChild(downloadAnchor);
      }, 100);
    };
  
    return (
      <>
      {showButton && (
        <BiCloudDownload
          className="cursor-pointer text-3xl"
          onClick={handleDownload}
        />
        
      )}
      </>
    );
  };
  