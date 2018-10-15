import React, {Component} from 'react';
import request from 'superagent';
import {rootURL, method, api_key, format} from '../constants/api';
import {CORSworkaround} from '../helpers/githubPages';
import TopArtists from '../components/TopArtists';
import Spinner from "../components/Spinner";
import GeneralError from '../components/GeneralError';

class ChartContainer extends Component {
    state = {
        domainData: {
            artists: []
        },
        generalError: null,
        spinner: {
            fetching: false
        }
    };
    componentDidMount() {
        this.setState({spinner: {fetching: true}});

        this._asyncRequest = request
            .get(`${CORSworkaround}/${rootURL}`)
            .query({
                method,
                api_key,
                format
            })
            .timeout({deadline: 6000})
            .then(res => {
                this._asyncRequest = null;
                const artists = res.body.artists.artist;

                this.setState({
                    domainData: {artists},
                    spinner: {fetching: false}
                });
            })
            .catch(error => {
                this._asyncRequest = null;

                this.setState({
                    generalError: {message: error.message},
                    spinner: {fetching: false}
                });
            })
    }
    componentWillUnmount() {
        if (this._asyncRequest) {
            this._asyncRequest.abort();
        }
    }
    render() {
        if (this.state.spinner.fetching) {
            return <Spinner/>;
        } else if (this.state.generalError) {
            return <GeneralError message={this.state.generalError.message}/>
        } else {
            return <TopArtists artists={this.state.domainData.artists}/>;
        }
    }
}

export default ChartContainer;
