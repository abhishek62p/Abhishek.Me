export function Media({ icons }) {
    return (
        <div className=" text-yellow flex w-full h-fit justify-evenly items-center ">
            {icons.map((icon, index) => (
                <div
                    // onClick={window.open(icon.url, "_blank")}
                    key={index}
                    className="cursor-pointer"
                >
                    <a href={icon.url} target="_blank"><img src={icon.src} alt="loading" className="object-fit w-5 stroke-white fill-slate-100 " /></a>
                </div>
            ))}
        </div>
    );
}
