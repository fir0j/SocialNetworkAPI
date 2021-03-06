const express = require('express');
const router = express.Router();
const {
	signup,
	signin,
	socialLogin,
	signout,
	forgotPassword,
	resetPassword
} = require('../controllers/auth.controller');
const { signupValidator } = require('../validators/user.validator');
const { passwordResetValidator } = require('../validators/passwordReset.validator');

router.post('/signup', signupValidator, signup);
router.post('/signin', signin);
router.post('/signout', signout);
router.put('/forgot-password', forgotPassword);
router.put('/reset-password', passwordResetValidator, resetPassword);
router.post('/social-login', socialLogin);

module.exports = router;
