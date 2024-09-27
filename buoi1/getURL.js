var url = require('url');
const getPath=(req)=>{
    return req.url;
}
const getParamesURL=(req)=>{
    let urlData = url.parse(req.url, true);
    return JSON.stringify(urlData.query)
}
module.exports={getPath, getParamesURL}