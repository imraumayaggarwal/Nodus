// App.tsx
import Navbar from "@/src/components/Navbar/Navbar"
import Hero from "@/src/components/Hero/Hero"
import HowItWorks from "../components/HowItWorks/HowItWorks";


export default function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <HowItWorks></HowItWorks>
        </div>
    );
}