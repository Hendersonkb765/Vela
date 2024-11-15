import SecondaryButton from '@/FigmaComponents/Button/SecondaryButton';
import React, { useState, useEffect, useRef } from 'react';
import { GoX } from "react-icons/go";
import ImageModal from "./ImageModal"
import { CiImageOn } from 'react-icons/ci';

const ProfileUploadInput = ({updateAvatarUrl, savedAvatar, className='' }) => {
    const [ModalOpen, setModalOpen] = useState(false);
    const [isImageValid, setIsImageValid] = useState(true);

    const handleImageError = () => {
        setIsImageValid(false);
    };

    let avatarUrl =  useRef();

    const updateAvatar = (imgSrc) => {
        avatarUrl.current = imgSrc
        updateAvatarUrl(imgSrc)
    }

    return (
        <div>
            <div className={`flex items-center space-x-4 ${className}`}>
            {(savedAvatar || avatarUrl) && isImageValid ?
                <img
                    src={savedAvatar ?? avatarUrl}
                    className="size-[150px] rounded-full bg-cover  bg-center bg-no-repeat border-2  border-neutralcolors-200 flex items-center justify-center text-5xl font-bold text-primary"
                    onError={handleImageError}
                />
            :
                <div className="size-[150px] rounded-full  flex items-center justify-center object-cover  bg-neutralcolors-100 dark:bg-slate-700  z-10">
                    <CiImageOn className='size-[80px]  text-neutralcolors-200 ' />
                </div>
            }

                <SecondaryButton className='text-xs lg:text-base h-12' onClick={() => setModalOpen(true)}>
                    {avatarUrl.current ? "Escolher outra foto" : "Escolher uma foto"}
                </SecondaryButton>
            </div>
            {ModalOpen && <ImageModal updateAvatar={updateAvatar} closeModal={() => setModalOpen(false)} savedAvatar={savedAvatar}/>}

        </div>
    )
}

export default ProfileUploadInput;
