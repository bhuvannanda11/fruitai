import { FigmaLogoFirst, FigmaLogoSecond, FigmaLogoThird } from "../lib/logo";

const AboutPage = () => {
    return (
        <div>
            <div className="flex justify-evenly mt-20">
                <FigmaLogoFirst />
                <FigmaLogoSecond />
                <FigmaLogoThird />
            </div>

            <div className="absolute left-0 bottom-0 bg-white text-black px-8 py-10 flex flex-col gap-5 items-center rounded-t-3xl">
                <h1 className="text-3xl font-bold">Fruit.Ai</h1>
                <p className="text-center font-light">Whether you&apos;re looking to discover new fruits, understand their nutritional values, or find the perfect fruit for your diet, our AI-driven chatbot is here to assist. We provide personalized fruit recommendations tailored to your health needs, making it easier for you to integrate the best fruits into your daily routine.</p>
                <button className="bg-black text-white inline-flex justify-center items-center py-3.5 w-[90%] rounded-3xl font-extrabold uppercase">About</button>
            </div>
        </div >
    )
}

export default AboutPage;
