const Mock = require('mockjs');

const Random = Mock.Random;

const produceData = function (opt) {
    console.log('opt',opt);
    let articles = [];
    for(let i=0; i< 10; i++){
        let newArticleObject = {
            title: Random.csentence(5,30),
            thumbnail_pic_s:Random.dataImage('300*250','mock的图片'),
            author: Random.cname(),
            date: Random.date()+''+Random.time(),
            email: Random.email(),
            name: Random.cname()
        }
        articles.push(newArticleObject)
    }j
    return {
        data: articles
    }
}
module.exports = produceData
