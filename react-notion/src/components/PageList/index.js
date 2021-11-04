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

        this.pageListTriangleRef = React.createRef();
        this.pageListRef = React.createRef();
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

    changeOpened = () => {
        this.setState((state) => {
            if(!state.opened){
                this.openList();
            }
            else {
                this.closeList();
            }
            return {
                pages: state.pages,
                opened: !state.opened
            };
        });
    }

    closeList = () => {
        this.pageListTriangleRef.current.animate([{transform: 'rotate(-90deg)'}],
            {duration: 1000,
            easing: 'ease'}).finished.then(() => {
                this.pageListTriangleRef.current.classList.add('closed-triangle')
        });
        this.pageListRef.current.animate([{height: '0'}],
            {duration: 1000,
                easing: 'ease'}).finished.then(() => {
            this.pageListRef.current.classList.add('closed-list')
        });
    }

    openList = () => {
        this.pageListTriangleRef.current.animate([{transform: 'rotate(0)'}],
            {duration: 1000,
                easing: 'ease'}).finished.then(() => {
            this.pageListTriangleRef.current.classList.remove('closed-triangle')
        });
        this.pageListRef.current.animate([{height: this.pageListRef.current.scrollHeight + 'px'}],
            {duration: 1000,
                easing: 'ease'}).finished.then(() => {
            this.pageListRef.current.classList.remove('closed-list')
        });
    }

    render() {
        return (
            <div>
                <div className="pages-title side-menu-elem" onClick={this.changeOpened}>
                    <img ref={this.pageListTriangleRef} className="icon-sm menu-icon"
                         src="assets/icons/opened_triangle.png" alt=""/>
                    <b>Pages</b>
                </div>
                <ul ref={this.pageListRef} className="page-list side-menu-elem">
                    {this.state.pages.map((page, i) => <PageListElement key={i} name={page.name}/>)}
                    <AddPageButton onAdd={this.addPage}/>
                </ul>
            </div>
        )
    }
}