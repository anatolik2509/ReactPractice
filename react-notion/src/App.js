import './App.css';

import SideBar from './components/SideBar';
import Page from './components/Page';
import {Provider} from "react-redux";
import {store} from "./redux/local-store";

function App() {
    return (
        <Provider store={store}>
            <div className="main-page">
                <SideBar/>
                <Page/>
            </div>
        </Provider>
    );
}

export default App;
