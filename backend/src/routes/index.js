const router = require('express').Router();
const authRoutes = require('./auth');
const usersRoutes = require('./users');
const transactionLog = require('./transactionLog');
const paymentRoutes = require('./payment');
const bancoRoutes = require('./banco');
const userInventoryroutes = require('./userInventory');

router.use('', authRoutes);
router.use('/users', usersRoutes);
router.use('/transactionLog', transactionLog);
router.use('/payment', paymentRoutes);
router.use('/banco',bancoRoutes)
router.use('/userCards', userInventoryroutes);
module.exports = router;
