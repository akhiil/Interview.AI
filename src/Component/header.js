import React, { useState } from 'react';
import './styling.css';
import logoImage from './image/logo.jpg'
import Modal from 'react-modal';
import axios from 'axios';

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
    const [emailValue, setEmaiValue] = useState('')
    const [allSeats, setAllSeats] = useState([]);

    const fetchData = async () => {
        // console.log(emailValue)

        await axios.get('https://movie-tttt.herokuapp.com/seats', {
            email: emailValue
        }).then((res) => {
            console.log(res.data);
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className="mainContainer">

            <div className="row">
                <img src={logoImage} alt="ticket booking" className="logo" />

                <ul className="main-nav">
                    <li><a onClick={(e) => {
                        e.preventDefault();
                        setopenModal(true)
                    }} href="#">Delete seat</a></li>
                </ul>
            </div>

            <Modal
                style={customStyles}
                isOpen={openModal}>
                <div className="inputContainer">
                    <div class="container__item">
                        <form class="form">
                            <input type="email" class="form__field" placeholder="Your E-Mail Address"
                                onChange={(e) => setEmaiValue(e.target.value)} />
                            <button
                                onClick={fetchData}
                                type="button" class="btn btn--primary btn--inside uppercase">Find</button>
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

            <div className="hero-text-box">
                <h1>Goodbye offline ticket bookings.<br />Hello Online tickets booking.</h1>
                <a onClick={(e) => {
                    e.preventDefault();
                    props.referenceToPage('section1')
                }} className="btn btn-full" href="">See pricing </a>
                <a onClick={(e) => {
                    e.preventDefault();
                    props.referenceToPage('section2')
                }} className="btn btn-ghost" href="#">Start Booking </a>
            </div>
        </div>
    )
}

export default App;