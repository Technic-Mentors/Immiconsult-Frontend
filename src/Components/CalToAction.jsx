import React from 'react'
import calToAction from "../img/cal-to-action.gif"
export default function CalToAction() {
    return (
        <div className='calToAction-bg'>
            <div className='bg-overlay'>
                <div className="container py-3">
                    <div className="row justify-content-between">
                        <div className="col-md-6">
                            <h1 className='styled-heading'>The place to make your <span> Ambitions</span> take Flight</h1>
                            <p >Choose Immiconsult Pvt Ltd as your partner on this exciting journey towards new horizons. Let us be the bridge that connects you to opportunities beyond borders, and let your aspirations take flight with our expertise by your side. Welcome to a world of possibilities with ImmiConsult.</p>
                            <button className='btn btn-danger'>Connect With US</button>
                        </div>
                        <div className="col-md-4">
                            <img className='img-fluid' src={calToAction} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
