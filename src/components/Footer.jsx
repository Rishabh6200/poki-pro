import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="text-center text-white mt-5" style={{'background-color': 'var(--bg-color)'}}>
                
                <div className="container ">
                    <section className="footer-hh">
                        <a
                            className="btn btn-link btn-floating btn-lg text-dark"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-facebook-f p-1"></i
                        ></a>

                        <a
                            className="btn btn-link btn-floating btn-lg text-dark"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-twitter"></i
                        ></a>

                        <a
                            className="btn btn-link btn-floating btn-lg text-dark"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-google"></i
                        ></a>

                        <a
                            className="btn btn-link btn-floating btn-lg text-dark"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-instagram"></i
                        ></a>

                        <a
                            className="btn btn-link btn-floating btn-lg text-dark"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-linkedin"></i
                        ></a>
                        <a
                            className="btn btn-link btn-floating btn-lg text-dark"
                            href="https://github.com/Rishabh6200 "
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-github"></i
                        ></a>
                    </section>
                </div>

                <div className="text-center text-dark p-3" style={{'background-color': 'var(--bg-color)'}}>
                    © POKEMON 2023
                </div>
            </footer>
        </div>
    )
}

export default Footer
