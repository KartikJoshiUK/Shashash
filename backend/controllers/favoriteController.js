const Favorite = require('../models/Favorites.js');

const addFavorite = async (req, res) => {
  const { jokeUrl } = req.body;
  const userId = req.user.id;
  console.log(jokeUrl, userId);

  const favoriteId = await Favorite.create(userId, jokeUrl);

  const favorite = await Favorite.findByUserId(favoriteId);

  res.status(201).json(favorite);
};

const getFavorites = async (req, res) => {
  const userId = req.user.id;

  const favorites = await Favorite.findByUserId(userId);

  res.json(favorites);
};

const deleteFavorite = async (req, res) => {
  const favoriteId = req.params.id;

  await Favorite.delete(favoriteId);

  res.json({ message: 'Favorite removed' });
};

module.exports = { addFavorite, getFavorites, deleteFavorite };
