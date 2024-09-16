import fruitsImage from '../assets/fruits.jpeg'

const FAQCard = ({ faq, deleteFaq, updateFaqForm }) => {
    return (
        <div className="bg-[#EAEFEB] rounded-2xl p-3.5 flex gap-5 font-bold">
            <div className="max-w-[24%] flex flex-col gap-3 pt-2 items-center">
                <img src={fruitsImage} className="rounded-2xl" />
                <h1 className="text-[#EE0A22]">{faq.fruit}</h1>
            </div>
            <div className="w-full flex flex-col justify-between gap-3">
                <div>
                    <h1 className="text-[#EE0A22] text-lg">{faq.title}</h1>
                    <p className="text-[#0386D0]">{faq.description}</p>
                </div>
                <div className='flex gap-3'>
                    <button className='border w-full p-2 rounded-xl bg-blue-500' onClick={() => updateFaqForm(faq.id)}>Update</button>
                    <button className='border w-full p-2 rounded-xl bg-red-500' onClick={() => deleteFaq(faq.id)}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default FAQCard;
