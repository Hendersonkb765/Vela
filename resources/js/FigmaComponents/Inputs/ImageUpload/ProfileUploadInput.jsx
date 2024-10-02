import SecondaryButton from '@/FigmaComponents/Button/SecondaryButton';
import React, { useState, useEffect, useRef } from 'react';
import { GoX } from "react-icons/go";
import ImageModal from "./ImageModal"

const ProfileUploadInput = ({updateAvatarUrl, savedAvatar, className='' }) => {
    const [ModalOpen, setModalOpen] = useState(false);
    let avatarUrl =  useRef();

    const updateAvatar = (imgSrc) => {
        avatarUrl.current = imgSrc
        updateAvatarUrl(imgSrc)
    }

    return (
        <div>
            <div className={`flex items-center space-x-4 ${className}`}>
                <img
                    src={savedAvatar ?? avatarUrl}
                    className="w-[150px] h-[150px] rounded-full bg-cover  bg-center bg-no-repeat border-2  border-neutralcolors-200 flex items-center justify-center text-5xl font-bold text-primary"
                />
                <SecondaryButton className='h-12' onClick={() => setModalOpen(true)}>
                    {avatarUrl.current ? "Escolher outra foto" : "Escolher uma foto"}
                </SecondaryButton>
            </div>
            {ModalOpen && <ImageModal updateAvatar={updateAvatar} closeModal={() => setModalOpen(false)} savedAvatar={savedAvatar}/>}

        </div>
    )
}

export default ProfileUploadInput;
