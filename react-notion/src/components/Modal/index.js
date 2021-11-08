import React from 'react';
import ReactDOM from 'react-dom';

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
        this.el.setAttribute('id', 'modal-content');
        this.overlay = document.createElement('div');
        this.overlay.setAttribute('id', 'modal-overlay');
        this.modalRoot = document.getElementById('modal');

        document.querySelector('#root').style.filter = 'blur(10px)';
    }

    componentDidMount() {
        this.modalRoot.style.display = 'flex';
        this.modalRoot.appendChild(this.overlay);
        this.modalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        this.modalRoot.removeChild(this.overlay);
        this.modalRoot.removeChild(this.el);
        if (this.modalRoot.querySelectorAll('#modal-content').length === 0) {
            this.modalRoot.style.display = 'none';
        }
        document.querySelector('#root').style.filter = '';
    }

    onClose = () => {
        this.props.onClose();
    };
    
    render() {
        return ReactDOM.createPortal(this.props.children, this.el);
    }
}

export default Modal;