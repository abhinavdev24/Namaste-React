export const filterRestaurants = (searchText, restaurants) => {
  const filterData = restaurants.filter((restaurant) => {
    const stringToSearch = (
      restaurant?.data?.name + restaurant?.data?.cuisines?.join(", ")
    ).toLowerCase();
    return stringToSearch.includes(searchText.toLowerCase());
  });
  return filterData;
};
