import ChatSection from './chat-section.component';
import About from './about-section.component';

const ChatApp =()=>{
    return (
        <div className="flex flex-col md:flex-row justify-start items-center">
            <ChatSection/>
            <About/>
        </div>
    )
}

export default ChatApp;
