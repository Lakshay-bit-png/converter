import React, { useRef } from 'react';
import './index.css'; // Import CSS styles

export const Offer = () => {
  const parentRef = useRef(null);
  const childRef = useRef(null);

  const handleParentScroll = (e) => {
    const parentScrollTop = parentRef.current.scrollTop;
    const scrollAmount = e.deltaY;
  
    const parentScrollHeight = parentRef.current.scrollHeight;
    const parentClientHeight = parentRef.current.clientHeight;
  
    if (scrollAmount < 0 && parentScrollTop === 0) {
      // If scrolling up and parent is at the top
      e.preventDefault(); // Prevent parent div from scrolling up
  
      const childScrollTop = childRef.current.scrollTop;
      if (childScrollTop > 0) {
        // If child is not scrolled to the top
        childRef.current.scrollBy({ top: scrollAmount, behavior: 'smooth' });
      } else {
        // If child is already scrolled to the top, allow parent to scroll up
        parentRef.current.scrollBy({ top: scrollAmount, behavior: 'smooth' });
      }
    } else if (scrollAmount > 0 && parentScrollTop === parentScrollHeight - parentClientHeight) {
      // If scrolling down and parent is at the bottom
      e.preventDefault(); // Prevent parent div from scrolling down
  
      const childScrollHeight = childRef.current.scrollHeight;
      const childClientHeight = childRef.current.clientHeight;
      const childScrollTop = childRef.current.scrollTop;
  
      if (childScrollHeight - childClientHeight > childScrollTop) {
        // If child is not scrolled to the bottom
        childRef.current.scrollBy({ top: scrollAmount, behavior: 'smooth' });
      } else {
        // If child is already scrolled to the bottom, allow parent to scroll down
        parentRef.current.scrollBy({ top: scrollAmount, behavior: 'smooth' });
      }
    } else {
      // Otherwise, allow parent to scroll
      parentRef.current.scrollBy({ top: scrollAmount, behavior: 'smooth' });
    }
  };
  

  const handleScrollDown = () => {
    const childElement = childRef.current;
    const scrollAmount = 100; // Adjust this value as needed
    childElement.scrollTop += scrollAmount;
  };

  return (
    <div
      ref={parentRef}
      className='offer-parent text-gray-100'
      onWheel={handleParentScroll}
      
    >
      <div className='offer-heading text-center font-semibold text-gray-100 text-5xl'>
        About Us
      </div>
      <div className='offers flex items-center w-[80%] gap-36 justify-center bg-gray-500'>
        <img src='https://play-lh.googleusercontent.com/PXJtX6D0xyvnakG7idyf5BQMtcgry1BzSsEdpeZjIEvQ7O46p9LUgEUhOeATLWktQX8=w240-h480-rw' alt='Offer' />
        <div ref={childRef} className='offer-list'>
          <div className='offer-child w-[400px]'>
            Your file converter 
          </div>
          <div className='offer-child w-[400px]'>
            Your file converter website 
          </div>
          <div className='offer-child w-[400px]'>
            Your file converter website prioritizes 
          </div>
    
        </div>
      </div>
      <button onClick={handleScrollDown}>Scroll Down</button>
    </div>
  );
};
