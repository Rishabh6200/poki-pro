import React, { useEffect, useState } from 'react';
import { httpComman } from './api/http-comman';
import { useParams } from 'react-router-dom';
import './css/Readmore.css'
import CharDetail from './CharDetail';
import CharStat from './CharStat';
import Backbtn from './Backbtn';

const ReadMore = () => {
  const { id } = useParams();

  const [pokedata, setPokedata] = useState({});
  console.log(pokedata.front_default)

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {

      const res = await httpComman.get(`/pokemon/${id}`);
      const pokemonData = res.data;

      if (isMounted) {
        setPokedata(pokemonData);
      }
    };

    fetchData();


    return () => {
      isMounted = false;
    }

  }, []);
  return (
    <>
    <Backbtn />
      <div className="box-one">
        <div className="img-count">
          <div className="img-read">
            <img src='https://www.shutterstock.com/shutterstock/photos/2313970711/display_1500/stock-vector-cute-and-adorable-vector-illustration-of-creature-characters-in-pokemon-go-2313970711.jpg' alt="" />
          </div>
        </div>
        <div className="detail">
          <div className="table-cont">
            <CharDetail data={pokedata} />
            <CharStat data={pokedata} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadMore;
