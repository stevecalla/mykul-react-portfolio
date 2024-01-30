function Home() {
    return (
        <div className='background min-vh-100 pb-5 m-0'>
            <div className='row g-0 p-5 align-items-center'>
                <div className='col col-lg-4 p-4'>
                    <img src='./assets/Headshot.png' alt='Headshot' className='img-fluid' />
                </div>

                <div className='col col-lg-7'>
                    <h2 className="p-5">Hi, my name is Michael</h2>
                    <h5 className="py-3 p-5">
                        I'm an aspiring front-end web designer. Passionate about creating immersive and user-friendly digital experiences. I'm dedicated to crafting visually appealing and functional websites that leave a lasting impact.
                        <br />
                        <br />
                        I am actively seeking opportunities in the fields of Web Development and Testing. Please review my CV using the following link <a href='https://addCV' target="_blank" rel="noopener noreferrer">CV</a>.
                    </h5>
                </div>
            </div>
        </div>
    );
}

export default Home;
