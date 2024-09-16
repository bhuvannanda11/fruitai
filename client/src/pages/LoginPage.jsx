import { useNavigate } from "react-router-dom";

import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const LoginPage = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/');
    }

    return (
        <div className="flex flex-col items-center gap-8 h-full">
            <div className="flex flex-col items-center gap-2">
                <h1 className="font-bold text-3xl">Login</h1>
                <p className="font-light text-center">
                    By signing in you are agreeing our {' '}
                    <span className="text-blue-500">Term and privacy policy</span>
                </p>
            </div>
            <div className="flex gap-6">
                <button className="underline underline-offset-4 text-blue-500">Login</button>
                <button className="underline underline-offset-4">Register</button>
            </div>
            <form className="flex flex-col gap-10 w-full px-5" onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email Address"
                    className="bg-transparent border-b border-gray-400 rounded-none text-lg outline-none"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="bg-transparent border-b border-gray-400 rounded-none text-lg outline-none"
                    required
                />
                <div className="flex gap-5 text-sm justify-between">
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="remember-password"
                            required
                        />
                        <label htmlFor="remember-password">Remember password</label>
                    </div>
                    <p className="text-blue-500">Forgot password</p>
                </div>
                <button type='submit' className="bg-blue-500 text-white py-3 rounded-md">Login</button>
            </form>
            <p>or connect with</p>
            <div className="flex gap-4 text-3xl items-center">
                <p><FaFacebook className="text-blue-700" /></p>
                <p><RiInstagramFill className="text-blue-700 text-4xl" /></p>
                <p><FaPinterest className="text-red-600"/></p>
                <p><FaLinkedin className="text-blue-600" /></p>
            </div>
        </div>
    )
}

export default LoginPage;
