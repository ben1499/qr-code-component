import React from "react";

function Main() {
    return (
        <section className="wrapper">
        <main className="component">
            <div>
                <img className="qr-code" alt="QR code to frontendmentor.io" src={require("../images/image-qr-code.png")}></img>
            </div>
            <div>
                <h1>Improve your front-end skills by building projects</h1>
                <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
        </main>
        </section>
    );
}

export default Main;