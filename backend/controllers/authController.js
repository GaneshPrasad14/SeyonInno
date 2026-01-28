const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Hardcoded admin credentials for initialization
const ADMIN_EMAIL = 'admin@seyoninnovations.com';
const ADMIN_PASSWORD = 'siva@seyoninno';

// Initialize Admin User if not exists
const initializeAdmin = async () => {
    try {
        let admin = await User.findOne({ username: ADMIN_EMAIL });
        if (!admin) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(ADMIN_PASSWORD, salt);
            admin = new User({
                username: ADMIN_EMAIL,
                password: hashedPassword
            });
            await admin.save();
            console.log('Admin user initialized');
        }
    } catch (err) {
        console.error('Error initializing admin:', err.message);
    }
};

initializeAdmin();

exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        let user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid Credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid Credentials' });
        }

        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '5d' },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
