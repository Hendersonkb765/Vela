import VelaSocialLayout from '@/Layouts/VelaSocialLayout';
import { Head } from '@inertiajs/react';
import FAQCard from './FAQCard';

export default function SupportPage() {
    const FAQData = [
        {
            category: 'Categoria 1',
            questions: [
                { title: 'Pergunta 1.1', text: 'Resposta para a pergunta 1.1.' },
                { title: 'Pergunta 1.2', text: 'Resposta para a pergunta 1.2.' },
            ],
        },
        {
            category: 'Categoria 2',
            questions: [
                { title: 'Pergunta 2.1', text: 'Resposta para a pergunta 2.1.' },
                { title: 'Pergunta 2.2', text: 'Resposta para a pergunta 2.2.' },
            ],
        },
        {
            category: 'Categoria 3',
            questions: [
                { title: 'Pergunta 3.1', text: 'Resposta para a pergunta 3.1.' },
                { title: 'Pergunta 3.2', text: 'Resposta para a pergunta 3.2.' },
            ],
        },
    ];

    return (
        <VelaSocialLayout
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Suporte" />

            <section className='flex flex-col min-h-fit  overflow-x-hidden py-24 sm:pt-16 sm:pb-4 px-2 '>

                <div className="h-full flex flex-col justify-center items-center space-y-12">
                    <div className='flex flex-col justify-center items-center space-y-4'>
                        <h1 className="text-center font-headers font-medium text-5xl dark:text-gray-100">Perguntas Frequentes (FAQ)</h1>
                        <h3 className="text-center font-headers font-medium text-base text-wrap w-11/12 md:w-1/2 dark:text-gray-100">
                            Você tem dúvidas? Nós temos as respostas! Aqui você encontrará as perguntas mais comuns que recebemos.
                            Navegue pelas categorias ou utilize a busca para encontrar rapidamente o que precisa. Estamos aqui para ajudar!
                        </h3>
                    </div>

                    {FAQData.map((category, index) => (
                        <div key={index} className="w-full max-w-2xl mx-auto bg-white dark:bg-slate-800 p-4 rounded-md">
                            <h2 className="font-semibold text-xl  dark:text-gray-200 my-5">{category.category}</h2>
                            {category.questions.map((faq, idx) => (
                                <FAQCard key={idx} title={faq.title} text={faq.text} />
                            ))}
                        </div>
                    ))}
                </div>

            </section>
        </VelaSocialLayout>
    );
}
