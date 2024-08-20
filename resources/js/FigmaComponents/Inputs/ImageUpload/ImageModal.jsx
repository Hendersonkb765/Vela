import { IoCloseOutline  } from "react-icons/io5";
import ImageCropper from "./ImageCropper";


const ImageModal = ({closeModal, updateAvatar}) => {
    return (
        <div
          className="relative z-50"
          aria-labelledby="image-upload-dialog"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-neutralcolors-200 bg-opacity-75 transition-all backdrop-blur-sm"></div>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full justify-center px-2 py-12 text-center ">
                <div className="relative w-[80%] h-fit sm:w-[50%] sm:min-h-[60vh] sm:min-w-[fit] rounded-2xl bg-white text-slate-100 text-left shadow-xl transition-all">
                    <div className="px-5 py-4">
                        {/* <button
                            type="button"
                            className="rounded-md p-1 inline-flex items-center justify-center text-danger-0 focus:outline-none absolute top-2 right-2"
                            onClick={closeModal}
                        >
                            <IoCloseOutline  className="w-8 h-8"/>
                            <span className="sr-only">Close menu</span>
                        </button> */}
                        <ImageCropper closeModal={closeModal} updateAvatar={updateAvatar}/>
                    </div>
                </div>
            </div>
          </div>
        </div>
    );
}

export default ImageModal
