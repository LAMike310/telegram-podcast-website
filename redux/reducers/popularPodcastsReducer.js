let popularPodcastsReducer = function reducer(podcasts = [], action) {
  switch (action.type) {
    case 'UPDATE_POPULAR_PODCASTS':
      return podcasts = action.podcasts
    default:
      return podcasts
  }
}
export default popularPodcastsReducer
