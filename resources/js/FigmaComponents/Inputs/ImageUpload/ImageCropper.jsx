import { useEffect, useRef, useState } from "react";
import ReactCrop, { centerCrop, convertToPixelCrop, makeAspectCrop } from 'react-image-crop'
import { CiImageOn } from "react-icons/ci";
import PrimaryIconButton from "@/FigmaComponents/Button/PrimaryIconButton";
import SecondaryButton from "@/FigmaComponents/Button/SecondaryButton";
import setCanvasPreview from "./setCanvasPreview";

// npm i react-image-crop -> instalar se necessario

const MIN_SIZE = 150;
const ASPECT_RATIO = 1;

const ImageCropper = ({closeModal, updateAvatar, savedAvatar}) => {
    const imgRef = useRef(null);
    const previewCanvasRef = useRef(null);

    const [imgSrc, setImgSrc] = useState('');
    const [crop, setCrop] = useState();
    const [error, setError] = useState("");

    useEffect(() => {
        if (savedAvatar) {
            setImgSrc(savedAvatar);
        }
    }, []);

    const onSelectFile = (e) => {
        const file = e.target.files?.[0];
        if(!file) return;

        const reader = new FileReader();
        reader.addEventListener("load", () => {
            const imageElement = new Image();
            const imageUrl = reader.result?.toString() || "";
            imageElement.src = imageUrl;

            imageElement.addEventListener("load", (e) => {
                if(error) setError("");
                const {naturalHeight, naturalWidth} = e.currentTarget;
                if (naturalWidth < MIN_SIZE || naturalHeight < MIN_SIZE) {
                    setError("Imagem muito pequena (tamanho mínimo: 150x150)");
                    return setImgSrc("");
                }
            })

            setImgSrc(imageUrl)
        });

        reader.readAsDataURL(file);
    };



    const onImageLoad = (e) => {
        const {width, height} = e.currentTarget;
        const cropWidthInPercent = (MIN_SIZE / width) * 100;
        const crop = makeAspectCrop(
            {
                unit: '%',
                width: cropWidthInPercent,
            },
            ASPECT_RATIO,
            width,
            height
        );
        const centeredCrop = centerCrop(crop, width, height)
        setCrop(centeredCrop)
    }

    return (
        <div className="flex flex-col space-y-4 ">
            <div className="sm:min-h-[50vh] min-h-[200px]">
                {imgSrc ?
                    <div className="flex flex-col items-center">
                        <ReactCrop
                            crop={crop}
                            onChange={(pixelCrop, percentCrop) => setCrop(percentCrop)}
                            circularCrop
                            keepSelection
                            aspect={ASPECT_RATIO}
                            minWidth={MIN_SIZE}
                        >
                            <img src={imgSrc} alt="upload" style={{maxHeight: "50vh"}}
                                ref={imgRef}
                                onLoad={onImageLoad}

                            />
                        </ReactCrop>
                    </div> :

                    <div className="flex items-center justify-center">
                        <CiImageOn className="sm:w-96 sm:h-96 w-52 h-52"/>
                    </div>
                }
            </div>
            {error && <p className="mt-auto font-body text-sm text-neutralcolors-500"><span className="font-bold text-danger-0">FALHA NO UPLOAD: </span> {error}</p>}
            <div>
                <label className="block mb-3 w-full">
                <span className="sr-only">Escolha foto de perfil</span>
                <input
                    type="file"
                    accept="image/*"
                    onChange={onSelectFile}
                    className="block w-full  text-sm text-neutralcolors-500 border-2 border-neutralcolors-200 rounded-md py-3 px-4 cursor-pointer file:min-w-32 file:bg-neutralcolors-700 file:mr-4 file:py-3 file:px-4 file:rounded-md file:border-0 file:text-xs file:text-white file:cursor-pointer hover:file:bg-primary dark:text-gray-300"
                />
                </label>
            </div>
            <div className="flex justify-between space-x-4">
                <SecondaryButton className="flex justify-center w-1/2 sm:w-1/3 dark:!text-gray-300" onClick={closeModal} gray> Cancelar</SecondaryButton>
                <PrimaryIconButton className="flex justify-center w-1/2 sm:w-1/3 hover:bg-primary-200"
                    onClick={() => {
                        setCanvasPreview(
                            imgRef.current,
                            previewCanvasRef.current,
                            convertToPixelCrop(
                                crop,
                                imgRef.current.width,
                                imgRef.current.height,
                            )
                        );
                        const dataUrl = previewCanvasRef.current.toDataURL()
                        updateAvatar(dataUrl);
                        localStorage.setItem('savedAvatar', dataUrl);
                        closeModal();
                    }}
                >
                Salvar</PrimaryIconButton>
            </div>

            {crop &&
                <canvas
                    ref={previewCanvasRef}
                    className="mt-4"
                    style={{
                        display: "none",
                        border: "1px solid black",
                        objectFit: "contain",
                        width: 150,
                        height: 150,
                    }}
                />
            }
        </div>
    )
}

export default ImageCropper
