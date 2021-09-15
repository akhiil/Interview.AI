import React, { useState } from 'react';
import './styling.css';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const App = (props) => {
    const [openModal, setopenModal] = useState(false);


    return (
        <div style={{ height: '50vh', display: 'flex', alignItems: 'center' }} className="mainContainer">

            <Modal
                style={customStyles}
                isOpen={openModal}>
                <div className="inputContainer">
                    <div class="container__item">
                        <form class="form">
                            <input type="email" class="form__field" placeholder="Your E-Mail Address" onChange={(e) => props.email(e.target.value)} />
                            <button

                                onClick={() => {
                                    props.onSubmit()
                                    setTimeout(() => {
                                        setopenModal(false)
                                    }, (1000));
                                }}
                                type="button" class="btn btn--primary btn--inside uppercase">Book</button>
                        </form>
                    </div>

                    <a
                        onClick={(e) => {
                            e.preventDefault()
                            setopenModal(false)
                        }}
                        style={{
                            padding: '15px 30px 0 30px',
                            backgroundColor: '#e67e22',
                            borderRadius: 10,
                            marginTop: 20,
                            cursor: 'pointer'
                        }}>
                        <h3>Cancel</h3>
                    </a>
                </div>
            </Modal>

            <div style={{ width: '50%' }} className="row">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h1>Normal selected seat:- </h1>
                    <h1>{props.normalSeat.length}</h1>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h1>Premium selected seat:- </h1>
                    <h1>{props.vipSeat.length}</h1>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h1>Total cost:- </h1>
                    <h1>$ {props.normalSeat.length * 10 + props.vipSeat.length * 25}</h1>
                </div>
                <div style={{ float: 'right' }}>
                    <a className="btn btn-full"
                        onClick={(e) => {
                            e.preventDefault();

                            setopenModal(!openModal)
                        }}
                        href="">confirm booking </a>
                </div>
            </div>
        </div>
    )
}

export default App;