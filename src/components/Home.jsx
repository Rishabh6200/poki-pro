import React, { useEffect, useState } from 'react'
import Card from './Card';
import Footer from './Footer';
import Header from './Header'
import Navbar from './Navbar';
import { httpComman } from './api/http-comman';
import axios from 'axios';


const Home = () => {

    const [pokedata, setPokedata] = useState([]);

    const [search, setSearch] = useState([]);
    const [apply, setApply] = useState('');

    // console.log(pokedata)




    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                const res = await httpComman.get('/pokemon/');
                const results = res.data.results;
                const pokemonData = await Promise.all(results.map(item => axios.get(item.url)));
                const data = pokemonData.map(response => response.data);

                if (isMounted) {
                    setPokedata(prevData => [...prevData, ...data]);
                }
            } catch (error) {
                console.error('Error ', error);
            }
        };

        fetchData();

        return () => {
            isMounted = false;
        }
    }, []);


    useEffect(() => {
        const debounce = setTimeout(() => {
            const filterData = pokedata.filter((item) => (
                item.name.toLowerCase().includes(apply.toLowerCase()) || item.id.toString() === apply
            ))
            setSearch(filterData);
        }, 2000);

        return () => clearTimeout(debounce);
    }, [apply, pokedata])


    return (
        <>
            <Header />
            <Navbar input={setApply} />
            <Card data={apply ? search : pokedata} />
            <Footer />
        </>
    )
}

export default Home