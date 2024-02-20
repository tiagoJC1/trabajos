const menus = require("../../database/menus.json")

module.exports = (req,res) => {
    res.render("index", {menu : menus})
}