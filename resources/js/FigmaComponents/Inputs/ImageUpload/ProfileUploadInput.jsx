import SecondaryButton from '@/FigmaComponents/Button/SecondaryButton';
import React, { useState, useEffect, useRef } from 'react';
import { GoX } from "react-icons/go";
import ImageModal from "./ImageModal"

const ProfileUploadInput = ({updateAvatarUrl }) => {
    const [ModalOpen, setModalOpen] = useState(false);
    const avatarUrl = useRef();

    const updateAvatar = (imgSrc) => {
        avatarUrl.current = imgSrc
        updateAvatarUrl(imgSrc)
    }

    return (
        <div>
            <div className='flex items-center space-x-4 '>
                <img
                    src={avatarUrl.current}
                    className="w-[150px] h-[150px] rounded-full bg-cover  bg-center bg-no-repeat border-2  border-neutralcolors-200 flex items-center justify-center text-5xl font-bold text-primary"
                />
                <SecondaryButton className='h-12' onClick={() => setModalOpen(true)}>
                    Escolher uma foto
                </SecondaryButton>
            </div>
            {ModalOpen && <ImageModal updateAvatar={updateAvatar} closeModal={() => setModalOpen(false)} />}

        </div>
    )
}

export default ProfileUploadInput;
