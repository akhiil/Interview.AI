import React, { useState, useEffect } from 'react';
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im';
import { SiCheckmarx } from 'react-icons/si'
import { frontSeat, middleSeat, lastSeat, seatAlphabet, seatNumber } from './array'
import axios from 'axios';


const App = (props) => {
    const [FrontSeat, setFrontSeat] = useState([]);
    const [MiddleSeat, setMiddleSeat] = useState([]);
    const [LastSeat, setLastSeat] = useState([]);

    // console.log(props.bookSeat)


    useEffect(() => {

        let temp = frontSeat;

        frontSeat.map((item, ind) => {
            if (props.bookSeat.includes(item.seatNo)) {
                temp[ind].booked = true;
            }
        });
        setFrontSeat(temp);

        temp = middleSeat;

        middleSeat.map((item, ind) => {
            if (props.bookSeat.includes(item.seatNo)) {
                temp[ind].booked = true;
            }
        });
        setMiddleSeat(temp);

        temp = lastSeat;

        lastSeat.map((item, ind) => {
            if (props.bookSeat.includes(item.seatNo)) {
                temp[ind].booked = true;
            }
        });
        setLastSeat(temp);


    }, [props.normalSeat, props.vipSeat])


    return (
        <div style={{ padding: '20px 50px', display: 'flex' }}>

            <div>
                {seatAlphabet.map((item) => {
                    return (
                        <div style={{ backgroundColor: '#eeeeee', padding: '25px 80px 25px 20px' }}>
                            <p>{item}</p>
                        </div>
                    )
                })}
            </div>

            <div>
                <div style={{ columnCount: 8 }}>
                    {FrontSeat.map((item) => {
                        return (
                            <div onClick={() => {
                                // console.log(item.seatNo)
                                props.onSelect(item.seatNo)
                            }} style={{ padding: 10 }}>
                                {/* <p>{item.seatNo}</p> */}
                                {props.normalSeat.includes(item.seatNo) || item.booked ? <ImCheckboxChecked color="#808080" size={30} />
                                    : <ImCheckboxUnchecked color="#808080" size={30} />}
                            </div>
                        )
                    })}
                </div>
                <div className="spacer" />
                <div style={{ columnCount: 8, backgroundColor: '#f5c9a3', borderRadius: 5 }}>
                    {MiddleSeat.map((item) => {
                        return (
                            <div onClick={() => {
                                // console.log(item.seatNo)
                                props.onSelect(item.seatNo)
                            }} style={{ padding: 10 }}>
                                {/* <p>{item.seatNo}</p> */}
                                {props.vipSeat.includes(item.seatNo) || item.booked ? <ImCheckboxChecked color="#cf6d17" size={30} />
                                    : <ImCheckboxUnchecked color="#cf6d17" size={30} />}
                            </div>
                        )
                    })}
                </div>
                <div className="spacer" />
                <div style={{ columnCount: 8 }}>
                    {LastSeat.map((item) => {
                        return (
                            <div onClick={() => {
                                // console.log(item.seatNo)
                                props.onSelect(item.seatNo)
                            }} style={{ padding: 10 }}>
                                {/* <p>{item.seatNo}</p> */}
                                {props.normalSeat.includes(item.seatNo) || item.booked ? <ImCheckboxChecked color="#808080" size={30} />
                                    : <ImCheckboxUnchecked color="#808080" size={30} />}
                            </div>
                        )
                    })}
                </div>
                <div style={{ columnCount: 8, backgroundColor: '#eeeeee' }}>
                    {seatNumber.map((item) => {
                        return (
                            <div style={{ padding: '9px 15px' }}>
                                <h3>{item}</h3>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div>
                {seatAlphabet.map((item) => {
                    return (
                        <div style={{ backgroundColor: '#eeeeee', padding: '25px 20px 25px 80px' }}>
                            <p>{item}</p>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}

export default App;