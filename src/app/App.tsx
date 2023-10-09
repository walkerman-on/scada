import {Suspense} from "react"
import {Routes, Route, Link} from "react-router-dom"
import "./styles/index.scss"
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AccountPage } from "pages/AccountPage";
import { InfographicsPage } from "pages/InfographicsPage";
import { ObjectPage } from "pages/ObjectPage";
import { TestPage } from "pages/TestPage";



const App = () => {
    const {theme, changeTheme} = useTheme()

    return (
        <div className={classNames("app", {}, [theme])}>
            <Link to = {"/object"}>Объект</Link>
            <Link to = {"/infographics"} >Инфографика</Link>
            <Link to = {"/test"} >Тестирование</Link>
            <Link to = {"/account"} >Аккаунт</Link>
            <button style={{background: "white", padding: "5px"}} onClick={changeTheme}>Theme toggle</button>
            <Suspense fallback = {<div>Loading...</div>}>
                <Routes>
                    <Route path = {"/object"} element = {<ObjectPage />}/>
                    <Route path = {"/infographics"} element = {<InfographicsPage />}/>
                    <Route path = {"/test"} element = {<TestPage />}/>
                    <Route path = {"/account"} element = {<AccountPage />}/>
                </Routes>
             </Suspense>
        </div>
    );
};

export default App;