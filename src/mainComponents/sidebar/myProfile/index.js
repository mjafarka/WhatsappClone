import React, { useEffect, useRef, useState } from 'react'
import profilePhoto from '../../../resources/profilephoto.jpg'
import { MdModeEdit } from "react-icons/md";
import { IoMdCamera } from "react-icons/io";

function MyProfile() {

  const profileRef = useRef(null);
  const [coord, setCoords] = useState({ x: 0, y: 0 });
  const [showOptions, setShowOptions] = useState(false);
  
  // calculate distance from the centre of the circle
  const calculateDistanceFromCenter = (x,y,centerX, centerY) => {
    return Math.sqrt((x-centerX) ** 2+ (y-centerY) ** 2);
  }


  const handleImageClick = (event) => {
    //getting the client coordingates
    const rect = profileRef.current.getBoundingClientRect();
    
    //calculate center of the circle
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const radi = rect.width / 2;

    const radiClicked  = calculateDistanceFromCenter(event.clientX,event.clientY,centerX,centerY);

    if (radiClicked <= radi) {

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      setCoords({x,y});
      setShowOptions(true);
    }

  }

  const handleClickOutside = (event) => {
    if (profileRef.current && !profileRef.current.contains(event.target)) {
      setShowOptions(false);
    }
  };

  //check outside clicks
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [])
  return (
    <div>
      <h2 className='text-white ml-4 mt-4 text-xl'>Profile</h2>
      <div className='flex flex-col items-center mt-16'>
        <div className='relative'>
          <div ref={profileRef} className='photo w-48 h-48 rounded-full overflow-hidden text-white relative cursor-pointer group' onClick={handleImageClick}>
            <img src={profilePhoto} alt='profilePhoto' className={`object-cover transition duration-300 ease-in-out group-hover:blur-sm ${showOptions ? 'blur-sm' :''}`} />
            {/* camera icon to display on hover */}
            <div className={`absolute inset-0 flex items-center justify-center opacity-0 ${ ! showOptions ? 'group-hover:opacity-100' : ''} transition duration-300 ease-in-out `}>
              <IoMdCamera className='text-4xl' />
            </div>


          </div>
          {/* options to list when photo click */}
          {
            showOptions && (
              <div className='absolute bg-white rounded-lg shadow-lg p-2 text-black w-24'
                style={{
                  top: `${coord.y}px`,
                  left: `${coord.x}px`,
                }}
              >
                <ul>
                  <li className='py-1 px-1 cursor-pointer'>Option 1</li>
                  <li className='py-1 px-1 cursor-pointer'>Option 2</li>
                  <li className='py-1 px-1 cursor-pointer'>Option 3</li>
                </ul>
              </div>
            )
          }
        </div>
        <div className='details text-white self-start pl-7 mt-16 space-y-16 w-full pr-4'>
          <div className='space-y-2'>
            <h4 className='text-appGreen'>Your Name</h4>
            <div className='flex flex-row items-center justify-between'>
              <h3>Muhammed Jafar K A</h3>
              <MdModeEdit />
            </div>
          </div>
          <div className='space-y-2'>
            <h4 className='text-appGreen'>About</h4>
            <div className='flex flex-row items-center justify-between'>
              <h3>xJafarX</h3>
              <MdModeEdit />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProfile