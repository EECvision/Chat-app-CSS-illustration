const ReceivedPhotos =({children})=>{
    console.log(children);
    return(
        <div className="flex justify-end mt-1">
            {
                children.map(child=>(
                    <img className="w-8 h-8 ml-2 rounded" src={child} alt=""/>
                ))
            }
        </div>
    )
}

export default ReceivedPhotos;