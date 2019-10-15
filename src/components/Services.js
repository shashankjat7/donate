import React from 'react';
import '../styles/Services.css'

const Services = (props) => {
    return(
        <div className="ui grid">
            <div className="ui eight wide column donate">
                <p>{props.tag1}</p>
                <p>{props.tag2}</p>
            </div>
            <div className="eight wide column">
                <form className="ui form">
                    <div className="field">
                        <label>First name</label>
                        <input type="text" name="first name" placeholder="first name"/>
                    </div>
                    <div className="field">
                        <label>Last name</label>
                        <input type="text" name="last name" placeholder="last name"/>
                    </div>
                    <div className="field">
                        <label>Blood Type</label>
                        <input type="text" name="blood type" placeholder="Blood Type"/>
                    </div>
                    <div className="field">
                        <label>Phone No..</label>
                        <input type="text" name="phone" placeholder="Phone no"/>
                    </div>
                    <div className="field">
                        <div className="ui checkbox">
                            <input type="checkbox" tabIndex="0" className="hidden"/>
                            <label htmlFor="">I am ready to {props.type}</label>
                        </div>
                    </div>
                    <button className="ui button" type="submit">{props.type}</button>

                </form>
            </div>
        </div>
    )
}

export default Services