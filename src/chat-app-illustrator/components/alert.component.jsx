 
const Alert =({info, amount})=>(
    <div className="w-11/12 h-8 flex items-center justify-around text-white bg-gradient-to-l from-purple-500 to-pink-500 mt-2 rounded-r-xl rounded-tl-xl rounded-bl">
        <div className="flex items-center text-xs w-2/3">
            <div className="w-4 h-4 border border-white rounded-full mr-2"/>
            <div>{info}</div>
        </div>
        <div className="text-sm">{amount}</div>
    </div>
)

export default Alert;