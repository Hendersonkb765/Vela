import NavBar from '@/FigmaComponents/NavMenu/NavBar';
import SideMenu from '@/FigmaComponents/NavMenu/SideMenu';

export default function VelaGuestLayout({ children, imgUrl, userName}) {


    return (
        <div className='flex overflow-hidden'>
            <NavBar className="pr-8 " imgUrl={imgUrl} userName={userName}/>

            <SideMenu className="pointer-events-none opacity-25 dark:opacity-100 [&>*]:dark:opacity-15"/>
            <section className='flex-1 flex flex-col pt-14   space-y-4 dark:bg-slate-800'>
                {children}
            </section>
        </div>
    );
}
