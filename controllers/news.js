const { firebaseApp } = require('../db');
const NewsPreview = require('../models/newsPreview');

const firestore = firebaseApp.firestore();

const getNews = async (req, res) => {
    const { limit } = req.query;
    let news;

    try {
        if(limit==='true') {
            news = await firestore.collection('News').limit(3);
        } else {
            news = await firestore.collection('News');
        }
        const data = await news.get();
        const newsArray = [];
        if(data.empty) {
            return res.status(404).json({
                status: 'Error',
                message: 'No data found'
            });
        } else {
            data.forEach(doc => {
                const news = new NewsPreview(
                    doc.id,
                    doc.data().alt,
                    doc.data().body,
                    doc.data().createdAt,
                    doc.data().src,
                    doc.data().title
                );

                newsArray.push(news);
            })

            return res.status(200).json({
                status: 'Success',
                data: newsArray
            })
        }
    } catch (error) {
        return res.status(400).json({
            status: 'Error',
            message: error.message
        });
    }
}

const getNewsID = async (req, res) => {
    try {
        const newsID = req.params.id;
        const news = await firestore.collection('NewsDetails').doc(newsID);
        const data = await news.get();
        if(!data.exists) {
            res.status(404).json({
                status: 'Error',
                message: 'News with the given ID not found'
            });
        }else {
            res.status(200).json({
                status: 'Success',
                ...data.data()
            });
        }
    } catch (error) {
        res.status(400).json({
            status: 'Error',
            message: error.message
        })
    }
}

module.exports = {
    getNews,
    getNewsID
}