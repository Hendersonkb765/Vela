import { useState } from 'react';
import { motion } from 'framer-motion';
import { GoChevronDown } from "react-icons/go";

export default function FAQCard({ title, text }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-96 border border-gray-300 rounded-lg p-4 mb-2  cursor-pointer" onClick={toggleOpen}>
            <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg text-left">
                    {title}
                </h3>
                <GoChevronDown className={`w-6 h-6  transition duration-300 ${isOpen && "rotate-180"}`} />
            </div>

            <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
                style={{ overflow: 'hidden' }}
                className="w-full"
            >
                {isOpen && (
                    <p className="text-gray-600 text-left dark:text-gray-300">{text}</p>
                )}
            </motion.div>
        </div>
    );
}





// import { useState } from 'react';
// import { motion } from 'framer-motion';

// export default function FAQCard({ title, text }) {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleOpen = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <div className="faq-card border border-gray-300 rounded-lg p-4 mb-2">
//             <h3 className="font-bold text-lg cursor-pointer text-left" onClick={toggleOpen}>
//                 {title}
//             </h3>
//             <motion.div
//                 initial={false}
//                 animate={{ height: isOpen ? 'auto' : 0 }}
//                 transition={{ duration: 0.3 }}
//                 style={{ overflow: 'hidden' }}
//                 className="w-full"
//             >
//                 {isOpen && (
//                     <p className="text-gray-600 text-left">{text}</p>
//                 )}
//             </motion.div>
//         </div>
//     );
// }

