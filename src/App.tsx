import {Routes, Route, Link} from "react-router-dom"
import {Suspense, useContext} from "react"
import "./styles/index.scss"
import {InfographicsPageAsync} from "./pages/InfographicsPage/InfographicsPage.async";
import { AccountPageAsync } from "./pages/AccountPage/AccountPage.async";
import { TestPageAsync } from "./pages/TestPage/TestPage.async";
import { ObjectPageAsync } from "./pages/ObjectPage/ObjectPage.async";
import { Theme, ThemeContext } from "./context/ThemeContext";
import { useTheme } from "./hooks/useTheme";
import { classNames } from "./helpers/classNames/classNames";



const App = () => {
    const {theme, changeTheme} = useTheme()

    return (
        <div className={classNames("app", {}, [theme])}>
            <Link to = {"/object"}>Объект</Link>
            <Link to = {"/infographics"} >Инфоргарфика</Link>
            <Link to = {"/test"} >Тестирование</Link>
            <Link to = {"/account"} >Аккаунт</Link>
            <button style={{background: "white", padding: "5px"}} onClick={changeTheme}>Theme toggle</button>
            <Suspense fallback = {<div>Loading...</div>}>
                <Routes>
                    <Route path = {"/object"} element = {<ObjectPageAsync />}/>
                    <Route path = {"/infographics"} element = {<InfographicsPageAsync />}/>
                    <Route path = {"/test"} element = {<TestPageAsync />}/>
                    <Route path = {"/account"} element = {<AccountPageAsync />}/>
                </Routes>
             </Suspense>
        </div>

    );
};

export default App;