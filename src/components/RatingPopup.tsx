import { Button } from '@material-tailwind/react';
import { useState } from 'react';
import Image from "next/image";

const RatingPopup = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-gray-500 p-6 rounded-md max-w-md text-center">
            <div className="rating-stars bg-">
                <div className='justify-center items-center'>
                        <Image
                            className="rounded-none pl-5"
                            src="/images/logonav.svg"
                            width={250}
                            height={250}
                            alt="profilepic"
                        />
                    <p className='text-black font-bold pb-5'> Do you like our service?</p>
                    <div className='flex justify-center'>
                    <a onClick={handleClose}>
                        <Button className='text-white shadow-xl bg-green-700 mx-5 scale-100 hover:scale-125 ease-in duration-50'>
                            Yes
                        </Button>
                    </a>
                    <a onClick={handleClose}>
                        <Button className='bg-red-500 font-bold shadow-xl text-black mx-5 scale-100 hover:scale-125 ease-in duration-50'>
                            No
                        </Button>
                        
                    </a>
                    </div>
                </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RatingPopup;