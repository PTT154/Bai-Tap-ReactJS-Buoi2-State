//Đây là cách truyền khác của props trong ReactJS
export default function ModelWithGlasses({ selectedGlasses }) {
    console.log(selectedGlasses)
    return (
        <div>
            <div className="absolute top-[26%] left-1/2 -translate-x-1/2 w-[52%] opacity-80">
                {/* {selectedGlasses && <img src={selectedGlasses.url} alt={selectedGlasses.name} />} */}
                {/* Sử dụng toán tử Optional Chaining */}
                <img src={selectedGlasses?.url} alt={selectedGlasses?.name} />
            </div>
            <div className="h-[35%] absolute bottom-0 bg-amber-500/40">
                <div className="font-bold text-blue-600 mb-2">{selectedGlasses?.name}</div>
                <div className="text-white mb-2">{selectedGlasses?.desc}</div>
            </div>
        </div>
    )
}
