import React from 'react';

import '../../App.css';
import NavBar from '../NavBar';
import DropDownMenu from '../DropDownMenu';
import TextFrame from '../TextFrame';
import TextTemplate from "../Templates/TextTemplate";
import {Switch, Route, Redirect} from "react-router-dom";
import TableTemplate from "../Templates/TableTemplate";
import {useSelector} from "react-redux";
import {getPages} from "../../redux/local-store";


const Page = () => {

    const pages = useSelector(getPages);

    return (
        <div className="page-content">
            <Switch>
                {pages.map((page, i) => ( 
                    <Route path={'/pages/' + page.id}>
                        <NavBar title={page.name}/>
                        <div className="page-container">
                            <DropDownMenu>
                                Добавить блок
                            </DropDownMenu>
                            <TextTemplate />
                        </div>
                    </Route>
                ))}
                <Redirect to='/'/>
            </Switch>
        </div>
    )
}

export default Page;