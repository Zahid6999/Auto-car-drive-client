import React from 'react';

const ConfirmationModal = ({ title, message, closeModal, successAction, deleteData }) => {
    return (
        <div>

            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-orange-700">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={() => successAction(deleteData)} htmlFor="confirmation-modal" className='btn btn-outline btn-error' >Delete</label>
                        <button onClick={closeModal} className="btn btn-secondary">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;