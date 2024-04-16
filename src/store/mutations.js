export const mutations = {
  ADD_TO_GENRE_ARRAY(state, newItem) {
    state.genres.push(newItem);
  },
  REMOVE_FROM_GENRE_ARRAY(state, removedItem) {
    state.genres = state.genres.filter((item) => item !== removedItem);
  },
  SET_PRICE(state, price) {
    state.price = price;
  },
  SET_SEARCH_TERM_GENRE(state, searchTermGenre) {
    state.searchTermGenre = searchTermGenre;
  },
  SET_SEARCH_TERM(state, searchTerm) {
    state.searchTerm = searchTerm;
  },
  SET_RESTAURANTS(state, restaurants) {
    state.restaurants = restaurants;
  },
  SET_TOTAL_RESTAURANT(state, total) {
    state.totalRestaurant = total;
  },
  SET_USERS(state, users) {
    state.users = users;
  },
  SET_LOGGED_IN_USER(state, user) {
    state.loggedInUser = user;
  },
  SET_VISITS(state, visits) {
    state.visits = visits;
  },
  SET_USER_FAVORITES(state, favorites) {
    state.userFavorites = favorites;
  },
  SET_IMAGE_INDEX(state, imageIndex) {
    state.imageIndex = imageIndex;
  },
  SET_MESSAGE(state, message) {
    state.message = message;
  },
  ADD_NEW_FAVORITES_LIST(state, newFavoriteList) {
    state.newFavoriteList = newFavoriteList;
  },
  DELETE_RESTAURANT_FROM_FAVORITE_LIST(
    state,
    { favoriteListId, restaurantId },
  ) {
    const favoriteList = state.userFavorites.find(
      (list) => list.id === favoriteListId,
    );
    if (favoriteList) {
      const index = favoriteList.restaurants.findIndex(
        (restaurant) => restaurant.id === restaurantId,
      );
      if (index !== -1) {
        favoriteList.restaurants.splice(index, 1);
      }
    }
  },
};
