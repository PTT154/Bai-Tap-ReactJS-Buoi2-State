import { HeaderComponent } from "./components/Header/HeaderComponent";
import { ChangeGlasses } from "./components/Body/index";

export default function App() {
    return (
        <div className="relative z-10">
            <HeaderComponent />
            <ChangeGlasses />
        </div>
    )
}
