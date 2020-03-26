const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
  index: async (req, res) => {
    const { id } = req.params;
    let data;
    if (id) {
      data = await connection('ngos')
        .select('*')
        .where('id', id).first();
    } else {
      data = await connection('ngos').select('*');
    }
    res.json(data);
  },
  create: async (req, res) => {
    const id = crypto.randomBytes(4).toString('HEX');
    const { name, email, whatsapp, city, state } = req.body;
    await connection('ngos').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      state
    });
    res.json({ id });
  },
  update: async (req, res) => {
    const { id, name, email, whatsapp, city, state } = req.body;
    await connection('ngos').update({
      name,
      email,
      whatsapp,
      city,
      state
    }).where('id', id);
    res.json({ id });
  },
  delete: async (req, res) => {
    const { id } = req.params;
    await connection('ngos')
      .delete()
      .where('id', id);

    res.status(204).send();
  }
}