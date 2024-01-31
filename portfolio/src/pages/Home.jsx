// Importing custom styles for the Home page
import './PageStyles.css';

// import headshotImage from '../asset/headshot.jpg';

// Functional component for the Home page
function Home() {
    return (
        <div className='background min-vh-100 pb-5 m-0'>
            <div className='row g-0 p-5 align-items-center'>
                <div className='col col-lg-4 p-4'>
                <img src="../asset/headshot.jpg" alt='Profile Picture' className='img-fluid' />
                </div>

                <div className='col col-lg-7'>
                    <h2 className="p-5">My name is Michael Adjei...</h2>
                    <h5 className="py-3 p-5">
                        An aspiring front-end web designer, I am deeply passionate about creating immersive and user-friendly digital experiences. My dedication is reflected in the meticulous process of crafting visually appealing and highly functional websites that not only meet but exceed user expectations.
                        <br />
                        <br />
                        Driven by a relentless pursuit of excellence, I draw inspiration from the ever-evolving landscape of web development. Armed with a solid foundation and continuous learning mindset, I have honed my skills through a comprehensive edx web development certification program. This journey has equipped me with the latest industry trends, best practices, and cutting-edge technologies.
                        <br />
                        <br />
                        Seeking opportunities in the fields of Web Development and Testing. Please review my CV <a href='portfolio\src\assets\MA_CV (1).pdf' target="_blank" rel="noopener noreferrer">here</a>.
                    </h5>
                </div>
            </div>
        </div>
    );
}

// Export the Home component
export default Home;
