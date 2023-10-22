import React from 'react';
import './css/Card.css';
import { useNavigate } from 'react-router-dom';


const Card = ({ data }) => {

    const Navigate = useNavigate();

    return (
        <>
                <div className="containers d-grid">
                    {data.map((item) => {
                        return (
                            <div className="cards" key={item.id}>
                                <div className="img-char">
                                    <img src='https://www.shutterstock.com/shutterstock/photos/2313970711/display_1500/stock-vector-cute-and-adorable-vector-illustration-of-creature-characters-in-pokemon-go-2313970711.jpg'
                                        className="card-img-top h-100 w-50" alt="..." />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title text-capitalize text-danger text-center fs-3 fw-bolder">{item.name}</h5>
                                    <p onClick={() => Navigate(`/readmore/${item.id}`)}
                                        className="btn btn-outline-info bg-light">
                                          Read More  <i class="fa-solid fa-arrow-left fa-rotate-180"></i></p>
                                </div>
                            </div>
                        )
                    })}
                </div>
        </>
    )
}

export default Card

