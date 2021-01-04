const ReceivedText =({children})=>{
    return (
        <div className="w-4/5 mt-1">
            <div className="bg-gray-400 px-2 inline-flex bg-white text-black font-medium text-xs text-left rounded">
                {children}
            </div>
        </div>
    )
}

export default ReceivedText;