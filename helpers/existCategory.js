const { Category } = require('../models');
const { ErrorObject } = require('./error');

const existCategory = async (idCategory) => {
  try {
    const category = await Category.findByPk(idCategory);
    return category;
  } catch (err) {
    console.log(err);
  }
};

module.exports = existCategory;
