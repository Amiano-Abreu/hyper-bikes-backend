class Review {
    constructor( reviewID, bikeID, body, createdAt, data, edited, name, rating, title, userID ) {
        this.reviewID = reviewID,
        this.bikeID = bikeID,
        this.body = body,
        this.createdAt = createdAt,
        this.data = data,
        this.edited = edited,
        this.name = name,
        this.rating = rating,
        this.title = title,
        this.userID = userID
    }
}

module.exports = Review;