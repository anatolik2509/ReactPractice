import React from 'react';

import '../../App.css';

const TemplatesModal = () => {

    return (
        <div className="modal-wrapper">
            <div className="templates-list">
                <div className="templates-item">
                    Note
                </div>
                <div className="templates-item">
                    Todo
                </div>
                <div className="templates-item">
                    Kanban
                </div>
                <div className="templates-item">
                    Table
                </div>
            </div>
        </div>
    )
};

export default TemplatesModal;