import Cast from "../models/cast.js"

const castService = {
    create(cast) {
        return Cast.create(cast);
    },
    getAll(filter = {}) {
        let query = Cast.find({});

        if (filter.id) {
            query = query.where({ movie: filter.id });
        }
        
        return query;
    }
}

export default castService;