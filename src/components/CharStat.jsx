import React from 'react';

const CharStat = ({ data }) => {
  const base_stat = data.stats ? data.stats.map((item) => item.base_stat) : [];
  const stat_name = data.stats ? data.stats.map((item) => item.stat.name) : [];

  return (
    <table className="table table-dark table-striped">
      <tbody>
        <tr>
          <th colSpan="2" className="text-center">
            Stats
          </th>
        </tr>
        <tr>
          <th>Stat Name</th>
          <th>Stat Count</th>
        </tr>
        {base_stat.map((stat, index) => (
          <tr key={index}>
            <td className="text-capitalize">{stat_name[index]}</td>
            <td>{stat}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CharStat;
