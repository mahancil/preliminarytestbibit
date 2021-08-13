var request = require('request-promise');
var omdb_model = require('../models/OMDBmodel');

callOMDB = async function (params, method) {

    try
    {
        return await request({
            url: 'http://www.omdbapi.com/'+params,
            method: method,
            headers: {
                'Content-Type': 'application/json',
            }
        })
    }
    catch(err)
    {
        return {error: true, message: err.message}
    }
}

exports.searchOMDB = async function (req, res) {

    let api_key = req.query.apikey;
    let keyword = req.query.s;
    let page = req.query.page;
    let req_url = req.path;

    omdb_model.searchMovieLog({api_key: api_key, keyword: keyword, page: page, req_url: req_url})

    hit_api = await callOMDB('?apikey='+api_key+'&s='+keyword+'&page='+page, 'GET')
    if(hit_api.error)
    {
        res.status(400).json({
            error: hit_api.error,
            message: hit_api.message
        })
    }
    else
    {
        res.status(200).json(JSON.parse(hit_api))
    }    
}

exports.searchOMDBById = async function (req, res) {

    let api_key = req.query.apikey;
    let req_url = req.path;
    let movie_id = req.query.i;

    omdb_model.searchMovieLog({api_key: api_key, req_url: req_url, movie_id: movie_id})

    hit_api = await callOMDB('?apikey='+api_key+'&i='+movie_id, 'GET')
    if(hit_api.error)
    {
        res.status(400).json({
            error: hit_api.error,
            message: hit_api.message
        })
    }
    else
    {
        res.status(200).json(JSON.parse(hit_api))
    }    
}