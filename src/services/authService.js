import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const authService = {
    async register(userData) {
        const { email, password } = userData;
        const user = await User.findOne({email});
        if (user) {
            throw new Error('User already exists');
        }
        const newUser = await User.create(userData);

        return generateResponse(newUser);
    },

    async login(userData) {
        const { email, password } = userData;
        const user = await User.findOne({email});
        if (!user) {
            throw new Error('Wrong email or password');
        }

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            throw new Error('Wrong email or password');
        }

        return generateResponse(user);
    }
};

function generateResponse(user) {
    const payload = {
        _id: user._id,
        email: user.email,
    };

    const token = jwt.sign(payload, 'SECRET');

    return {
        _id: user._id,
        email: user.email,
        accessToken: token,
    };
}

export default authService;