import React, { useState } from 'react';

import '../../App.css';
import NavBar from '../NavBar';
import DropDownMenu from '../DropDownMenu';
import Template from "../Templates/Template";
import {Switch, Route, Redirect} from "react-router-dom";
import TableTemplate from "../Templates/TableTemplate";
import {useSelector} from "react-redux";
import {getPages} from "../../redux/local-store";


const Page = () => {

    const pages = useSelector(getPages);

    const [editBlock, setEditBlock] = useState(-1);

    const onEditClick = (ev) => {
        setEditBlock(+ev.currentTarget.dataset.id);
    };

    const hideEditMode = () => {
        setEditBlock(-1);
    }

    return (
        <div className="page-content">
            <Switch>
                {pages.map((page, i) => ( 
                    <Route key={i} path={'/pages/' + page.id}>
                        <NavBar title={page.name}/>
                        <div className="page-container">
                            <DropDownMenu>
                                Добавить блок
                            </DropDownMenu>
                            <div className="page-blocks">
                                {page.blocks.map((block) => (
                                    <>
                                        <Template 
                                            data={block} 
                                            editMode={editBlock === block.id}
                                            hide={hideEditMode}
                                        />
                                        {editBlock !== block.id && (
                                            <button data-id={block.id} className="block-button" onClick={onEditClick}> Редактировать </button>
                                        )}
                                    </>
                                ))}
                            </div>
                        </div>
                    </Route>
                ))}
                <Redirect to='/'/>
            </Switch>
        </div>
    )
}

export default Page;