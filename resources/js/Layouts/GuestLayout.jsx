import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex justify-start items-center sm:pt-0 px-2 ">
            <div className='w-full  sm:w-1/2 sm:h-screen flex flex-col justify-center items-center bg-white rounded-lg p-2 sm:rounded-lg'>
                {/* <div className='w-full sm:max-w-md mt-6 py-4 overflow-hidden sm:rounded-lg'>
                    <Link href="/">
                        <ApplicationLogo className="w-40 h-40 fill-current" />
                    </Link>
                </div> */}

                <div className="mn-w-fit w-full h-3/4 sm:h-screen sm:max-w-md mt-2 sm:px-2 py-4 overflow-hidden sm:rounded-lg">
                    {children}
                </div>
            </div>

        </div>
    );
}
