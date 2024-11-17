export const selectLoading = (state) => state.heroes.loading;

export const selectError = (state) => state.heroes.error;

export const selectHeroes = (state) => state.heroes.items;

export const selectTotalCount = (state) => state.heroes.totalCount;

export const selectCurrentPage = (state) => state.heroes.currentPage;

//

// export const selectHeroId = (state) =>
//   state.heroes.items.find((hero) => hero.id);
