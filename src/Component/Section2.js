import React, { useState, useEffect } from 'react';
import './styling.css';
import SeatList from './Data/AllSeats';
import Footer from './Footer'
import { frontSeat, middleSeat, lastSeat, seatAlphabet, seatNumber } from './Data/array'
import axios from 'axios';

const App = () => {
    const [selectNormalSeat, setSelectNormalSeat] = useState([]);
    const [selectVipSeat, setSelectVipSeat] = useState([]);
    const [bookedSeat, setBookedSeat] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [emailValue, setEmailValue] = useState('')

    useEffect(async () => {
        let temp = [];
        await axios.get('https://movie-tttt.herokuapp.com/todo').then((res) => {
            // console.log(res.data[0])
            // setBookedSeat(res.data);
            res.data.map((item) => {
                temp.push(item.seatNo);
            })
            // console.log(temp)
            setBookedSeat(temp)
            setLoaded(true);
        }).catch((err) => {
            console.log(err)
        })
        // console.log("last me")

    }, [])

    const checkSeatCategory = (value) => {
        for (let i = 0; i < middleSeat.length; i++) {
            if (middleSeat[i].seatNo === value) {
                // console.log(middleSeat[i].seatNo, " ", value, "\n");
                return true;
            }
        }
        return false;
    }

    const onSeatSelect = (value) => {
        let index = selectNormalSeat.indexOf(value);
        if (index > -1) {
            const temp = selectNormalSeat;
            temp.splice(index, 1);
            setSelectNormalSeat([...temp]);
            return;
        }
        index = selectVipSeat.indexOf(value);
        if (index > -1) {
            const temp = selectVipSeat
            temp.splice(index, 1);
            setSelectVipSeat([...temp])
            return;
        }

        if (checkSeatCategory(value)) {
            setSelectVipSeat([...selectVipSeat, value]);
        } else {
            setSelectNormalSeat([...selectNormalSeat, value]);
        }
    }

    const onSeatBook = async () => {
        const temp = [];

        selectVipSeat.map((item) => {
            temp.push({ seatNo: item });
        })
        selectNormalSeat.map((item) => {
            temp.push({ seatNo: item });
        })
        await axios.post('https://movie-tttt.herokuapp.com/todo', {
            email: emailValue,
            seats: temp
        }).then((res) => {
            if (res.data) {
                console.log("successfully booked");
            }
        }).catch((err) => {
            console.log(err);
        })
    }

    // console.log(selectVipSeat, "  ", selectNormalSeat)

    return (
        <div>
            <div className="section-2-container row">
                <h3 style={{ color: 'black', textAlign: 'center' }}>Screen</h3>
                <div>
                    {/* <div className="movie-screen-main"></div>
                <div className="movie-screen-ghost"></div> */}
                    <div className="box"></div>
                </div>
                <div>
                    {loaded ? <SeatList vipSeat={selectVipSeat}
                        normalSeat={selectNormalSeat}
                        bookSeat={bookedSeat}
                        onSelect={(value) => onSeatSelect(value)} /> : null}
                </div>
                <div>
                    <h2 style={{ color: 'black' }}>Total seats: 48</h2>
                    <h2 style={{ color: 'black' }}>Empty seats: {48 - bookedSeat.length}</h2>
                </div>
            </div>
            <Footer vipSeat={selectVipSeat}
                normalSeat={selectNormalSeat}
                onSubmit={onSeatBook}
                email={(value) => setEmailValue(value)}
            />
        </div>
    )
}

export default App;