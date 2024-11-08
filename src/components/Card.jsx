export function Card({ data }) {
    return <div className="flex justify-center" >
        <div className="w-3/5 flex flex-wrap gap-4 justify-center">
            {data.map((item) => (
                <div onClick={() => window.open(item.url, "_blank")} 
                    className="w-64 h-64 rounded-xl bg-dark text-white text-center transition-transform duration-300 transform hover:scale-105 cursor-pointer"
                    key={item.id}>
                    <div className="w-full h-1/3 bg-lightgray rounded-t-lg">
                        <img src={item.imgUrl} alt="loading" className="object-fit w-full h-full rounded-t-lg" />
                    </div>
                    <div>
                        <p className="text-gray font-bold text-xl p-4">{item.title}</p>
                        <p className="text-lightgray">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
}