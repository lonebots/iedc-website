const express = require('express')

const { createMember, getTeam } = require('../../controller/team')

const router = express.Router()
router.route('/').get(getTeam).post(createMember);

module.exports = router;