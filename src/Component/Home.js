import React from "react";

function Home() {
    return (
        <div>
            <center><h1>Welcome To Online Banking</h1></center>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="image.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="sbi1.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="sbi2.png" className="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
