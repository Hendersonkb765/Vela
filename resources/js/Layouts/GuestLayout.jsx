import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex justify-start items-center pt-6 sm:pt-0 bg-primary-100">
            <div className='w-1/2 h-screen flex flex-col justify-center items-center bg-white rounded-br-3xl rounded-tr-3xl'>
                {/* <div className='w-full sm:max-w-md mt-6 py-4 overflow-hidden sm:rounded-lg'>
                    <Link href="/">
                        <ApplicationLogo className="w-40 h-40 fill-current" />
                    </Link>
                </div> */}

                <div className="w-full sm:max-w-md mt-2 px-2 py-4 overflow-hidden sm:rounded-lg">
                    {children}
                </div>
            </div>

        </div>
    );
}
