const router = require('express').Router();
const adminController = require('../controller/adminController');

router.get('/dashboard', adminController.viewDashboard);

// Route Category
router.get('/category', adminController.viewCategory);
router.post('/category', adminController.addCategory);
router.put('/category', adminController.editCategory);

// Route Bank
router.get('/bank', adminController.viewBank);

// Route Item
router.get('/item', adminController.viewItem);

// Route Booking
router.get('/booking', adminController.viewBooking);


module.exports = router;