import React from 'react';
import PropTypes from 'prop-types';
import Artist from './Artist';

const ArtistsList= ({artists}) => (
    <ol>
        {artists.map((item, index) => (
            //use index as res.item doesn't have unique Id (don't want to assign random Id)
            <Artist key={index} artist={item}/>
        ))}
    </ol>
);

ArtistsList.propTypes = {
    artists: PropTypes.arrayOf(PropTypes.object)
};

export default ArtistsList;
