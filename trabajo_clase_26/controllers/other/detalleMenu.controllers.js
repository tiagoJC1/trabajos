const menus = require("../../database/menus.json");
module.exports = (req,res) => {
    const idMenu = req.params.id;
    const menuFind = menus.find((menu) => menu.id === parseint(idMenu))
    res.render("detalleMenu", { menu: menuFind})
}


