import React from 'react';
import PropTypes from 'prop-types';
import PlayIcon from './PlayIcon';

const Artist = ({artist}) => (
    <li>
        <h3>{artist.name} <a href={artist.url} target="_blank"><PlayIcon/></a></h3>
    </li>
);

Artist.propTypes = {
    artist: PropTypes.shape({
        name: PropTypes.string,
        url: PropTypes.string
    })
};

export default Artist;
