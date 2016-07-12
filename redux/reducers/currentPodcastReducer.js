let currentPodcastReducer = function reducer(currentPodcast = {}, action) {
  switch (action.type) {
    case 'UPDATE_CURRENT_PODCAST':
      return currentPodcast = action.podcast
    case 'CLEAR_PODCASTS':
      return currentPodcast = {}
    default:
      return currentPodcast
  }
}
export default currentPodcastReducer
