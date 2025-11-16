import { useState } from 'react';
import dataGlasses from '../../data/dataGlasses.json'
import Glasses from "./Glasses";
import ModelWithGlasses from "./ModelWithGlasses";

export const ChangeGlasses = () => {
  const [glassesList] = useState(dataGlasses);

  const [selectedGlasses, setSelectedGlasses] = useState(null);

  const renderGlassesList = () => {
    return glassesList.map((glasses) => <Glasses key={glasses.id} glassesProp={glasses} onGetInfoFromGlasses={onGetInfoFromGlasses} />)
  }

  const onGetInfoFromGlasses = (data) => {
    setSelectedGlasses(data);
  }

  return (
    <div>
      <div className="relative flex justify-center p-10">
        <div className="relative w-[20vw]">
          <img src="/glassesImage/model.jpg" alt="modal" />
          <ModelWithGlasses selectedGlasses={selectedGlasses} />

          {/* reset button */}
        <button onClick={() => setSelectedGlasses(null)} type="button" className="absolute -right-30 bottom-0 text-white bg-blue-700 hover:bg-blue-800 px-5 py-2 rounded-2xl cursor-pointer">Reset</button>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="bg-white grid grid-cols-5 gap-3 w-[60%] p-10">
          {renderGlassesList()}
        </div>
      </div>
    </div>
  )
}
