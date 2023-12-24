import React, { useEffect, useState } from 'react';
import { httpComman } from './api/http-comman';
import { useParams } from 'react-router-dom';
import './css/Readmore.css'
import CharDetail from './CharDetail';
import CharStat from './CharStat';
import Backbtn from './Backbtn';
import Loading from './Loading';

const ReadMore = () => {
  const { id } = useParams();

  const [pokedata, setPokedata] = useState({});
  const [responce, setResponce] = useState({});


  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {

      const res = await httpComman.get(`/pokemon/${id}`);
      const pokemonData = res.data;
      setResponce(res)
      if (isMounted) {
        setPokedata(pokemonData);
      }
    };

    fetchData();


    return () => {
      isMounted = false;
    }

  }, [id]);


  if (responce.status !== 200) {
    return (
        <>
            <p> <Loading /> </p>
        </>
    )
}

  return (
    <>
      <Backbtn />
      <div className="box-one">
        <div className="img-count">
          <div className="img-read">
            
            <img src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokedata.id}.svg`} alt="" />
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
