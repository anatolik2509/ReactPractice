import React from "react";
import PageListElement from "./PageListElement";
import AddPageButton from "./AddPageButton";

export default class PageList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            pages: props.pages,
            opened: true
        }
    }

    addPage = (pageName) => {
        this.setState((state) => {
            state.pages.push({name: pageName});
            return {
                pages: state.pages,
                opened: state.opened
            };
        });
    };

    render() {
        return (
            <div>
                <div className="pages-title side-menu-elem">
                    <img className="icon-sm menu-icon" src="assets/icons/opened_triangle.png" alt=""/>
                    <b>Pages</b>
                </div>
                <ul className="page-list side-menu-elem">
                    {this.state.pages.map((page) => <PageListElement name={page.name}/>)}
                    <AddPageButton onAdd={this.addPage}/>
                </ul>
            </div>
        )
    }
}