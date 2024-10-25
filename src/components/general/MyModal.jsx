// app/components/MyModal.jsx
import React from 'react';
import Modal from 'react-modal';

const MyModal = ({ isOpen, onRequestClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={{
                overlay: {
                    backgroundColor: '#0000004D', // Fondo difuminado
                },
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    transform: 'translate(-50%, -50%)',
                    padding: '20px',
                },
            }}
            contentLabel="Example Modal"
        >
            <h2>Título del Modal</h2>
            <button onClick={onRequestClose} style={{ float: 'right' }}>
                &times; Cerrar
            </button>
            <div>
                Aquí puedes poner cualquier contenido que desees.
            </div>
        </Modal>
    );
};

export default MyModal;