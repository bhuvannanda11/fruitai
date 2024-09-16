import { useEffect, useState } from "react";
import FAQAddForm from "../components/FAQAddForm";
import FAQCard from "../components/FAQCard";

const FAQPage = () => {
    const [faqs, setFaqs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const [showAddFaqForm, setShowAddFaqForm] = useState(false);
    const [showUpdateFaqForm, setShowUpdateFaqForm] = useState(false);

    const [faqId, setFaqId] = useState('');
    const [fruitName, setFruitName] = useState('');
    const [faqTitle, setFaqTitle] = useState('');
    const [faqDescription, setFaqDescription] = useState('');

    const deleteFaq = async (faqId) => {
        try {
            const res = await fetch(`http://127.0.0.1:3000/api/faqs/${faqId}`, {
                method: 'DELETE',
            })

            if (res.ok) {
                setFaqs(prevFaqs => {
                    return prevFaqs.filter(faq => faq.id != faqId)
                });
            }
        } catch (error) {
            console.error(error);
        }
    }

    const updateFaqForm = (faqId) => {
        const faq = faqs.find(faq => faq.id === faqId);

        setFaqId(faq.id);
        setFruitName(faq.fruit);
        setFaqTitle(faq.title);
        setFaqDescription(faq.description);

        setShowUpdateFaqForm(true)
    }

    const updateFaq = async (e) => {
        e.preventDefault();

        const updatedFaq = {
            id: faqId,
            fruit: fruitName,
            title: faqTitle,
            description: faqDescription
        }

        try {
            const res = await fetch(`http://127.0.0.1:3000/api/faqs/${faqId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedFaq)
            })

            const data = await res.json();

            if (res.ok) {
                setFaqs(prevFaqs => {
                    return prevFaqs.map(faq => {
                        return faq.id === data.id
                            ? data
                            : faq
                    })
                });

                setFaqId('');
                setFruitName('');
                setFaqTitle('');
                setFaqDescription('');

                setShowUpdateFaqForm(false)
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        const fetchFAQs = async () => {
            setLoading(true);
            setError('');

            try {
                const res = await fetch('http://127.0.0.1:3000/api/faqs');
                const data = await res.json();

                if (!res.ok) {
                    setError(data.error);
                }

                if (res.ok) {
                    setFaqs(data);
                    setError('');
                }
            } catch (error) {
                console.error(error.message);
                setError('Some Error occured :(');
            } finally {
                setLoading(false);
            }
        }

        fetchFAQs()
    }, [])

    return (
        <div className="relative">
            <div className={`flex flex-col gap-7 ${showAddFaqForm || showUpdateFaqForm ? 'blur-sm' : 'blur-none'}`}>
                <div className="flex gap-5 items-center mt-3 justify-center">
                    <h1 className="font-bold text-3xl text-center">FAQ Section</h1>
                    <button className='border border-gray-800 rounded-3xl p-1' onClick={() => setShowAddFaqForm(true)}>➕</button>
                </div>

                {error && <p className="text-center font-bold">{error}</p>}
                {loading && <p className="text-center font-bold">Loading...</p>}

                {!error && !loading && (
                    <div className="flex flex-col gap-3">
                        {faqs.map(faq => (
                            <FAQCard faq={faq} key={faq.id} deleteFaq={deleteFaq} updateFaqForm={updateFaqForm} />
                        ))}
                    </div>
                )}
            </div>

            {showAddFaqForm && <FAQAddForm setFaqs={setFaqs} setShowAddFaqForm={setShowAddFaqForm} />}
            {showUpdateFaqForm && (
                <div className="w-80 absolute flex flex-col gap-5 border border-gray-300 top-[20rem] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#EAEFEB] p-5 rounded-lg text-black">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold">Update FAQ</h1>
                        <p className="text-gray-500">Enter the details to update the FAQ</p>
                    </div>
                    <form className="flex flex-col gap-4" onSubmit={updateFaq}>
                        <input
                            type="text"
                            placeholder="Fruit Name"
                            value={fruitName}
                            onChange={(e) => setFruitName(e.target.value)}
                            className="px-3 py-2 text-sm"
                            required
                        />
                        <input
                            type="text"
                            value={faqTitle}
                            onChange={(e) => setFaqTitle(e.target.value)}
                            placeholder="FAQ Title"
                            className="px-3 py-2 text-sm"
                            required
                        />
                        <textarea
                            type="text"
                            value={faqDescription}
                            onChange={(e) => setFaqDescription(e.target.value)}
                            className="px-3 py-2 text-sm"
                            placeholder="FAQ Description"
                            required
                        />
                        <div className="flex gap-3">
                            <button type="button" className="py-2 px-3 w-full rounded-xl text-white bg-red-500" onClick={() => setShowUpdateFaqForm(false)}>Close</button>
                            <button type="submit" className="py-2 px-3 w-full rounded-xl text-white bg-blue-500">Update</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    )
}

export default FAQPage;
