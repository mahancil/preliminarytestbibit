var request = require('request-promise');
var omdb_model = require('../models/custom_models/OMDBmodel');

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

    // omdb_model.searchMovieLogPost({api_key: api_key, keyword: keyword, page: page, req_url: req_url})
    omdb_model.searchMovieLogPostgre({api_key: api_key, keyword: keyword, page: page, req_url: req_url})

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

    // omdb_model.searchMovieLog({api_key: api_key, req_url: req_url, movie_id: movie_id})    
    omdb_model.searchMovieLogPostgre({api_key: api_key, req_url: req_url, movie_id: movie_id})

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

var sortAlphabets = function(text) {
    return text.split('').sort().join('');
};

exports.anagram = async function (req, res) {

    let anagram = req.body.listWords

    var anagram_result = [];
    var result = [];

    for (let i = 0; i<anagram.length; i++) {
        var word = anagram[i];

        var sorted = sortAlphabets(word);

        if (anagram_result[sorted] != null) {
            anagram_result[sorted].push(word);
        } 
        else {
            anagram_result[sorted] = [ word ];
        }
    }
    for (var i in anagram_result) {
        result.push(anagram_result[i])
    }
    console.log(anagram_result)
    res.json({anagram_result}) 
}

exports.findFirstStringInBracket = async function (req, res) {
    var str = req.query.word
    let result = str.substring(
        str.indexOf("(") + 1, 
        str.indexOf(")")
    )
    res.json(result) 
}

