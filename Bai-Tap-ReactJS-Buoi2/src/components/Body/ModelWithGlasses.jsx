//Đây là cách truyền khác của props trong ReactJS
export default function ModelWithGlasses({selectedGlasses}) {
    console.log(selectedGlasses)
    return (
        <div className="absolute top-[26%] left-1/2 -translate-x-1/2 w-[52%] opacity-80">
            {/* {selectedGlasses && <img src={selectedGlasses.url} alt={selectedGlasses.name} />} */}
            {/* Sử dụng toán tử Optional Chaining */}
            <img src={selectedGlasses?.url} alt={selectedGlasses?.name} />
        </div>
    )
}
