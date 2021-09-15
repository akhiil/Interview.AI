import React from 'react';
import './styling.css';
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im';

const App = (props) => {
    return (
        <div>
            <section class="section-plans">
                <div class="row">
                    <h2>Book ticket fast &mdash; with just one tap</h2>
                </div>
                <div class="row">
                    <div class="columns-2">
                        <div class="plan-box">
                            <div>
                                <h3>Premium seat</h3>
                                <p class="plan-price">25$ <span>/ ticket</span></p>
                            </div>
                            <div>
                                <div>
                                    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                        <ImCheckboxUnchecked color="#cf6d17" />
                                        <p>Premium Empty Seat</p>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                        <ImCheckboxChecked color="#cf6d17" />
                                        <p>Premium Booked Seat</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <a onClick={(e) => {
                                    e.preventDefault();
                                    props.referenceToPage('section2')
                                }} href="#" class="btn btn-ghost">Start booking now</a>
                            </div>
                        </div>


                        <div class="plan-box">
                            <div>
                                <h3>Normal seat</h3>
                                <p class="plan-price">10$ <span>/ ticket</span></p>
                            </div>
                            <div>
                                <div>
                                    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                        <ImCheckboxUnchecked color="#808080" />
                                        <p>Normal Empty Seat</p>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                        <ImCheckboxChecked color="#808080" />
                                        <p>Normal Booked Seat</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <a onClick={(e) => {
                                    e.preventDefault();
                                    props.referenceToPage('section2')
                                }} href="#" class="btn btn-ghost">Start booking now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default App;