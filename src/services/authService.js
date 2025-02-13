import User from "../models/user.js";

const authService = {
    async register(userData) {
        const email = userData.email
        const user = await User.findOne({email});
        if (user) {
            throw new Error('User already exists');
        }
        return User.create(userData);
    }
};

export default authService;