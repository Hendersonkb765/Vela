import VelaSocialLayout from '@/Layouts/VelaSocialLayout';
import { Head, Link } from '@inertiajs/react';
import FAQCard from './FAQCard';

export default function SupportPage() {
    const FAQData = [
        { title: 'Pergunta 1', text: 'Resposta para a pergunta 1.' },
        { title: 'Pergunta 2', text: 'Resposta para a pergunta 2.' },
        { title: 'Pergunta 3', text: 'Resposta para a pergunta 3.' },
    ];

    return (
        <VelaSocialLayout
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Suporte" />

            <section className='h-full flex flex-col min-h-fit  overflow-x-hidden '>

                <div className="h-full flex flex-col  justify-center items-center space-y-4">
                    <h1 className="text-center font-headers font-medium text-2xl dark:text-gray-100">FAQ</h1>
                    <>
                        {FAQData.map((faq, index) => (
                            <FAQCard key={index} title={faq.title} text={faq.text} />
                        ))}
                    </>

                </div>

            </section>
        </VelaSocialLayout>
    );
}

