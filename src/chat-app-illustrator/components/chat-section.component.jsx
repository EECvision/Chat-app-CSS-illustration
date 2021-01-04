import SentText from './sent-text.component';
import SentPhotos from './sent-photos.component';
import Received from './received.component';
import Sent from './sent.component';
import ReceivedText from './received-text.component';
import dogImage1 from '../images/dog-image-1.jpg';
import dogImage2 from '../images/dog-image-2.jpg';
import dogImage3 from '../images/dog-image-3.jpg';
import Alert from './alert.component';
import Avatar from '../images/avatar.jpg';

const ChatSection =()=>{
    return (
        <div className="w-full max-w-2xl mb-24 md:mb-0 flex sm:justify-center justify-start items-start ">
            <div className="w-full md:w-4/5 flex justify-center lg:justify-end  bg-gradient-to-tr from-purple-500 to-purple-400 rounded-b-full transform -translate-x-1/2 lg:-translate-x-56">
            <div className="lg:my-16 w-64 flex flex-col items-center shadow-2xl rounded-3xl bg-white transform  translate-x-64 sm:translate-x-48 lg:translate-y-12 translate-y-24">
                <div className="flex flex-col items-center justify-between bg-gray-200 rounded-2xl my-3 mx-2">
                    <div className="w-full pb-1  bg-gradient-to-r from-purple-500 to-pink-500 rounded-t-2xl rounded-b flex flex-col items-center justify-start">
                        <div className="w-3/5 bg-white rounded-full h-6 transform -translate-y-1/2"/>
                        <div className="w-full flex justify-evenly items-center">
                            <div className="text-white">&#10094;</div>
                            <div className="w-2/3 flex items-center justify-start">
                                <img className="w-6 h-6 rounded-full mr-2" src={Avatar} alt="avatar"/>
                                <div className="">
                                    <div style={{fontSize: '15px'}} className=" text-white">Samuel Green</div>
                                    <div style={{fontSize: '10px'}} className=" text-purple-300">Available to Walk</div>
                                </div>
                            </div>
                            <div>
                                <div className="w-1 h-1 bg-white mb-1 rounded-full"></div>
                                <div className="w-1 h-1 bg-white mb-1 rounded-full"></div>
                                <div className="w-1 h-1 bg-white mb-1 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                    <div style={{height:"20rem"}} className="w-11/12 overflow-y-auto">
                        <Received>
                            <ReceivedText>That sounds great. I’d be happy with that.</ReceivedText>
                            <ReceivedText>Could you send over some pictures of your dog, please?</ReceivedText>
                        </Received>
                        <Sent >
                            <SentPhotos>{[dogImage1, dogImage2, dogImage3]}</SentPhotos>
                            <SentText>Here are a few pictures. She’s a happy girl!</SentText>
                            <SentText>Can you make it?</SentText>
                        </Sent>
                        <Received>
                            <ReceivedText>She looks so happy! The time we discussed works. How long shall I take her out for?</ReceivedText>
                        </Received>
                        <Alert info='30 minuite walk' amount='$29'/>
                        <Alert info='1 hour walk' amount='$49'/>
                    </div>
                    <div className="w-11/12 h-8 my-2 bg-white flex items-center justify-center rounded-full">
                        <div className="w-10/12 bg-white px-2 rounded-full">
                            <input className="focus:outline-none h-full" type="text"  placeholder="  Type a message…"/>
                        </div>
                        <div className="rounded-r-full w-2/12 bg-white flex items-center justify-center">
                            <button className="w-6 h-6 bg-purple-900 focus:outline-none transform hover:scale-105 rounded-full text-white">&#10095;</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ChatSection;