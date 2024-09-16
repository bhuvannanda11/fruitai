import { useState } from "react";

const FAQAddForm = ({ setFaqs, setShowAddFaqForm }) => {
    const [fruitName, setFruitName] = useState('');
    const [faqTitle, setFaqTitle] = useState('');
    const [faqDescription, setFaqDescription] = useState('');

    const addFAQ = async (e) => {
        e.preventDefault();

        const newFaqData = {
            fruit: fruitName,
            title: faqTitle,
            description: faqDescription
        }

        try {
            const res = await fetch('http://127.0.0.1:3000/api/faqs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newFaqData)
            })

            const data = await res.json();

            if (res.ok) {
                setFaqs(prevFaqs => [data, ...prevFaqs]);

                setFruitName('');
                setFaqTitle('');
                setFaqDescription('');

                setShowAddFaqForm(false)
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="w-72 absolute flex flex-col gap-5 border border-gray-300 top-[20rem] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#EAEFEB] p-5 rounded-lg text-black">
            <div className="text-center">
                <h1 className="text-3xl font-bold">New FAQ</h1>
                <p className="text-gray-500">Enter the detials for a new FAQ</p>
            </div>
            <form className="flex flex-col gap-4" onSubmit={addFAQ}>
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
                    <button type="button" className="py-2 px-3 w-full rounded-xl text-white bg-red-500" onClick={() => setShowAddFaqForm(false)}>Close</button>
                    <button type="submit" className="py-2 px-3 w-full rounded-xl text-white bg-blue-500">Add</button>
                </div>
            </form>
        </div>
    )
}

export default FAQAddForm;
