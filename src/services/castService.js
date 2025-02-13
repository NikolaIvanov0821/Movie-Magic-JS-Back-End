import Cast from "../models/cast.js"

const castService = {
    create(cast) {
        return Cast.create(cast);
    },
    getAll(filter = {}) {
        const query = Cast.find({});

        return query;
    }
}

export default castService;