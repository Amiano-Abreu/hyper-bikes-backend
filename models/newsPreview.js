class NewsPreview {
    constructor( newsID, alt, body, createdAt, src, title ) {
        this.newsID = newsID,
        this.alt = alt,
        this.body = body,
        this.createdAt = createdAt,
        this.src = src,
        this.title = title
    }
}

module.exports = NewsPreview;