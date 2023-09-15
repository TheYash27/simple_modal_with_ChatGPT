import React, { useRef } from 'react';
import { Modal } from 'bootstrap';

const ModalComponent = () => {
  const modalRef = useRef(null);

  const showModal = () => {
    const modal = new Modal(modalRef.current);
    modal.show();
  };

  return (
    <>
      <button className="btn btn-primary" onClick={showModal}>
        Open Modal
      </button>

      <div className="modal fade" ref={modalRef}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal Title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {/* Add your flexible content here */}
              <p>Simple Modal with ChatGPT</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalComponent;

