import { Route, Routes, useLocation } from "react-router-dom";

// Pages
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import FAQPage from "./pages/FAQPage";
import AboutPage from "./pages/AboutPage";
import ChatPage from "./pages/ChatPage";
import TranslatePage from "./pages/TranslatePage";

const App = () => {
    const location = useLocation();
    const path = location.pathname;

    return (
        <div className={`
            ${(
                /* Used for gradient background on certain pages */
                path === '/' ||
                path === '/faq' ||
                path === '/about'
            ) && 'bg-gradient-to-r from-[#E0BCF3] to-[#7EE7EE] text-white'}
            p-5 min-h-screen
        `}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path='/faq' element={<FAQPage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/chat' element={<ChatPage />} />
                <Route path='/translate' element={<TranslatePage />} />
            </Routes>
        </div>
    )
}

export default App;
