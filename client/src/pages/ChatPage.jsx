import { useEffect, useRef, useState } from "react";
import { IoSend } from "react-icons/io5";
import profileImage from '../assets/profile.jpeg';

const ChatPage = () => {
    const [messageLogs, setMessageLogs] = useState([]);
    const [message, setMessage] = useState('');

    const messageLogsRef = useRef(null);

    useEffect(() => {
        messageLogsRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'end'
        });
    }, [messageLogs])

    const sendMessage = async (e) => {
        e.preventDefault();

        const newMessage = { type: 'person', message }

        try {
            const res = await fetch('http://127.0.0.1:3000/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message })
            })

            const data = await res.json();

            if (res.ok) {
                setMessageLogs(prevMessageLogs => {
                    return [...prevMessageLogs, newMessage, data]
                })
            }
        } catch (error) {
            console.error(error);
        }

        setMessage('');
    }

    return (
        <>
            <div className="absolute left-0 top-0 w-full px-5 py-2 border-b border-gray-200 rounded-lg shadow-lg flex items-center gap-4">
                <img src={profileImage} className="rounded-full w-12 h-12 object-cover" />
                <div>
                    <h1 className="font-semibold text-xl">Snoop Dogg</h1>
                    <p className="text-sm text-purple-400 italic">online</p>
                </div>
            </div>

            <div ref={messageLogsRef} className="absolute left-0 px-5 h-[calc(100%-9.5rem)] overflow-scroll mt-16 flex flex-col gap-2.5 w-full">
                {messageLogs && messageLogs.map((messageLog, index) => (
                    <div ref={messageLogsRef} className={`w-full flex ${messageLog.type === 'person' ? 'justify-end' : 'justify-start'}`} key={index} >
                        <div className={`max-w-[90%] rounded-2xl px-3.5 py-2 ${messageLog.type === 'person' ? 'bg-purple-400 text-white' : 'bg-gray-400'}`}>
                            {messageLog.message}
                        </div>
                    </div>
                ))}
            </div>

            <form className="absolute border bottom-3 left-0 w-full flex gap-3 px-5 items-center" onSubmit={sendMessage}>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Message..."
                    className="px-3.5 py-2 bg-gray-300 rounded-xl grow outline-none"
                />
                <button className="h-full px-3 py-2.5 rounded-xl bg-purple-400">
                    <IoSend className="w-5 h-5 text-white" />
                </button>
            </form>
        </>
    )
}

export default ChatPage;
