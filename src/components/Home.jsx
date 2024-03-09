import React, { useEffect, useState } from 'react';
import Card from './Card';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';
import { httpComman } from './api/http-comman';
import axios from 'axios';
import { CircularProgress } from '@mui/material';

const Home = () => {
    const [pokedata, setPokedata] = useState([]);
    const [search, setSearch] = useState([]);
    const [apply, setApply] = useState('');
    const [responce, setResponce] = useState({});
    const [next, setNext] = useState('');
    const [prev, setPrev] = useState('');

    const fetchData = async (url) => {
        try {
            const res = await httpComman.get(url);
            const results = res.data.results;
            const pokemonData = await Promise.all(results.map(item => axios.get(item.url)));
            const data = pokemonData.map(response => response.data);
            setResponce(res);

            setPokedata(data);
            setNext(res.data.next);
            setPrev(res.data.previous);
        } catch (error) {
            console.error('Error', error);
        }
    };

    const handleNext = () => {
        if (next) {
            fetchData(next);
        }
    };

    const handlePrevious = () => {
        if (prev) {
            fetchData(prev);
        }
    };

    useEffect(() => {
        fetchData('/pokemon/');
    }, []);




    useEffect(() => {
        const debounce = setTimeout(() => {
            const filterData = pokedata.filter(item => (
                item.name.toLowerCase().includes(apply.toLowerCase()) || item.id.toString() === apply
            ));
            setSearch(filterData);
        }, 2000);

        return () => clearTimeout(debounce);
    }, [apply, pokedata]);



    if (responce.status !== 200) {
        return (
            <div className="loading">
                <CircularProgress
                    size={60}
                />
            </div>
        );
    }

    return (
        <>
            <Header />
            <Navbar input={setApply} />
            <Card data={apply ? search : pokedata} />
            <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                {prev && <button className="btn btn-primary me-md-2" onClick={handlePrevious} type="button">
                    Previous
                </button>}
                <button className="btn btn-primary" onClick={handleNext} type="button">
                    Next Page
                </button>
            </div>
            <Footer />
        </>
    );
}

export default Home;
