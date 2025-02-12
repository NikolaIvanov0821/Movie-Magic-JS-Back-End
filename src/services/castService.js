import Cast from "../models/cast.js"

const castService = {
    create(cast) {
        return Cast.create(cast);
    }
}

export default castService;