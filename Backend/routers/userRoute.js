const express = require("express")
const { newUser, getAllUsers, getSingleuser, deleteUser, updateUser } = require("../controller/userController")

const router = new express.Router()

router.route("/add").post(newUser)

router.route("/all").get(getAllUsers)

router.route("/get/:id").get(getSingleuser)

router.route("/delete/:id").delete(deleteUser)

router.route("/update/:id").patch(updateUser)


module.exports = router