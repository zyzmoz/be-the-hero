const connection = require('../database/connection');

module.exports = {
  index: async (req, res) => {
    const filter = req.query;
    let data;
    if (filter) {
      data = await connection('incidents')
        .select('*')
        .where(filter);
    } else {
      data = await connection('incidents').select('*');
    }
    res.json(data);
  },
  create: async (req, res) => {
    const { title, description, value, ngo_id } = req.body;
    const [id] = await connection('incidents').insert({
      title, 
      description, 
      value, 
      ngo_id 
    });
    res.json({ id });
  },
  update: async (req, res) => {
    const { id, title, description, value, ngo_id  } = req.body;
    await connection('incidents').update({
      title, 
      description, 
      value, 
      ngo_id 
    }).where('id', id);
    res.json({ id });
  },
  delete: async (req, res) => {
    const { id } = req.params;
    await connection('incidents')
      .delete()
      .where('id', id);

    res.status(204).send();
  }
}