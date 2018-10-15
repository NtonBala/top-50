import React from 'react';
import PropTypes from 'prop-types';
import ArtistsList from './ArtistsList';

const Chart = ({artists}) => (
    <section>
        <h2>Top 50 Artists by <a href="https://www.last.fm" target="_blank">last.fm</a></h2>
        <ArtistsList artists={artists}/>
    </section>
);

Chart.propTypes = {
    artists: PropTypes.arrayOf(PropTypes.object)
};

export default Chart;
