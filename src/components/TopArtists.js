import React from 'react';
import PropTypes from 'prop-types';

const TopArtists= ({artists}) => (
    <section>
        <h2>Top 50 Artists</h2>
        {artists.map((item, index) => (
            //use index as res.item doesn't have unique Id (don't want to assign random Id)
            <article key={index}>{item.name}</article>
        ))}
    </section>
);

TopArtists.propTypes = {
    artists: PropTypes.arrayOf(PropTypes.object)
};

export default TopArtists;
