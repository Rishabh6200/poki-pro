import React from 'react'
import './css/Readmore.css'
const CharDetail = ({ data }) => {

    const abilities = data.abilities ? data.abilities.map((item) => item.ability.name) : [];
    const move = data.moves ? data.moves.map((item) => item.move.name) : [];
    const srMove = move.slice(0, 5);


    const detail = [
        {
            Name: 'Name',
            Data: data.name,
        },
        {
            Name: 'Skill',
            Data: abilities.join(', '),
        },
        {
            Name: 'Height',
            Data: data.height,
        },
        {
            Name: 'Weight',
            Data: data.weight,
        },
        {
            Name: 'Move',
            Data: srMove.join(', '),
        },


    ]

    // console.log(data.stats[0].base_stat)


    return (
        <>
            <table className="table table-dark table-striped ">
                <tbody>
                    {detail.map((item) => (
                        <tr>
                            <th>{item.Name}:</th>
                            <td className='text-capitalize'>{item.Data}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </>
    )
}

export default CharDetail