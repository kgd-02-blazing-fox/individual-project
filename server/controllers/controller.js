const { Item } = require('../models')

class Controller {
  static async fetchItem(req, res) {
    try {
      const items = await Item.findAll()
      res.status(200).json(items)
    } catch (err) {
      console.log(err);
    }
  }

  static async editItem(req, res) {
    try {
      const id = Number(req.params.itemId)
      const items = await Item.update(
        { stock: req.body.stock },
        {
        where: {id},
        returning: true
      })
      res.status(200).json(items)
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = Controller