export default function Glasses(props) {
    const {glassesProp, onGetInfoFromGlasses} = props;

    const handleChangeGlasses = () => {
        onGetInfoFromGlasses(glassesProp);
    }

    return (
        <div className="cursor-pointer" onClick={handleChangeGlasses}>
            <img className="border border-solid p-2" src={glassesProp.url} alt={glassesProp.name} />
        </div>
    )
}
