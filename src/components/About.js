import React from "react";
import { useState } from "react";

function About(props) {
    const [myStyle, setMyStyle] = useState({
        color:"black",
        backgroundColor:"white"
    })

    const [btnText, setbtnText] = useState("Enable Dark Mode")

    const togglebtn=()=>{
        if(myStyle.color === "white"){
           setMyStyle({
            color:"black",
            backgroundColor:"white"
        })
        setbtnText("Enable Dark Mode");
        }
        else{
            setMyStyle({
                color:"white",
                backgroundColor:"black"
            })
            setbtnText("Enable Light Mode");
        }
    }
    return (
        <div className="container" style={myStyle} >
            <h3 className="my-3">{props.title}</h3>
            <div className="accordion"  style={myStyle} id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button"
                            type="button"
                            style={myStyle}
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseOne"
                            aria-expanded="true"
                            aria-controls="panelsStayOpen-collapseOne"
                        >
                            Accordion Item #1
                        </button>
                    </h2>
                    <div
                        id="panelsStayOpen-collapseOne"
                        className="accordion-collapse collapse "
                    >
                        <div className="accordion-body" style={myStyle}>
                            <strong>This is the first item's accordion body.</strong> It is
                            shown by default, until the collapse plugin adds the appropriate
                            classNamees that we use to style each element. These classNamees
                            control the overall appearance, as well as the showing and hiding
                            via CSS transitions. You can modify any of this with custom CSS or
                            overriding our default variables. It's also worth noting that just
                            about any HTML can go within the <code>.accordion-body</code>,
                            though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            style={myStyle}
                            data-bs-target="#panelsStayOpen-collapseTwo"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseTwo"
                        >
                            Accordion Item #2
                        </button>
                    </h2>
                    <div
                        id="panelsStayOpen-collapseTwo"
                        className="accordion-collapse collapse"
                    >
                        <div className="accordion-body" style={myStyle}>
                            <strong>This is the second item's accordion body.</strong> It is
                            hidden by default, until the collapse plugin adds the appropriate
                            classNamees that we use to style each element. These classNamees
                            control the overall appearance, as well as the showing and hiding
                            via CSS transitions. You can modify any of this with custom CSS or
                            overriding our default variables. It's also worth noting that just
                            about any HTML can go within the <code>.accordion-body</code>,
                            though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            style={myStyle}
                            data-bs-target="#panelsStayOpen-collapseThree"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseThree"
                        >
                            Accordion Item #3
                        </button>
                    </h2>
                    <div
                        id="panelsStayOpen-collapseThree"
                        className="accordion-collapse collapse"
                    >
                        <div className="accordion-body" style={myStyle}>
                            <strong>This is the third item's accordion body.</strong> It is
                            hidden by default, until the collapse plugin adds the appropriate
                            classNamees that we use to style each element. These classNamees
                            control the overall appearance, as well as the showing and hiding
                            via CSS transitions. You can modify any of this with custom CSS or
                            overriding our default variables. It's also worth noting that just
                            about any HTML can go within the <code>.accordion-body</code>,
                            though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            <button className="btn btn-primary my-2" onClick={togglebtn}>{btnText}</button>
        </div>
    );
}

export default About;
