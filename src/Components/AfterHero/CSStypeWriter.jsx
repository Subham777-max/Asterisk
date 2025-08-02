import { Typewriter } from 'react-simple-typewriter';

const CssTypewriter = () => {
    return (
        <div className="text-white font-mono whitespace-pre">
        <Typewriter
            words={[`
    .card {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 1rem;
    padding: 2rem;
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
    border: 1px solid rgba(255, 255, 255, 0.2);
    }`]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={60}         
            deleteSpeed={60}       
            delaySpeed={2000}      
        />
        </div>
    );
};

export default CssTypewriter;
