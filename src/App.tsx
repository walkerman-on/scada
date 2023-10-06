import {Routes, Route, Link} from "react-router-dom"
import {Suspense} from "react"
import "./index.scss"
import AccountPage from "./pages/AccountPage/AccountPage";
import ObjectPage from "./pages/ObjectPage/ObjectPage";
import {InfographicsPageAsync} from "./pages/InfographicsPage/InfographicsPage.async";
import TestPage from "./pages/TestPage/TestPage";
import { AccountPageAsync } from "./pages/AccountPage/AccountPage.async";
import { TestPageAsync } from "./pages/TestPage/TestPage.async";
import { ObjectPageAsync } from "./pages/ObjectPage/ObjectPage.async";

const App = () => {
   

    return (
        <div className="app">
            <Link to = {"/object"}>Объект</Link>
            <Link to = {"/infographics"} >Инфоргарфика</Link>
            <Link to = {"/test"} >Тестирование</Link>
            <Link to = {"/account"} >Аккаунт</Link>
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