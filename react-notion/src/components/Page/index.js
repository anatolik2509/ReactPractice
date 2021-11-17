import React from 'react';

import '../../App.css';
import NavBar from '../NavBar';
import TextTemplate from "../Templates/TextTemplate";
import {Switch, Route, Redirect} from "react-router-dom";
import TableTemplate from "../Templates/TableTemplate";
import {useSelector} from "react-redux";
import {getPages} from "../../redux/local-store";


const Page = () => {
    const pages = useSelector(getPages);
    console.log(<TextTemplate title={'aaaaa'}/> )
    return (
        <div className="page-content">
            <NavBar/>
            <div className="page-container">
                <Switch>
                    {pages.map((page, i) => <Route path={'/pages/' + page.id}><TextTemplate title={page.name}/></Route>)}
                    <Redirect to='/'/>
                </Switch>
            </div>
        </div>
    )
}

export default Page;