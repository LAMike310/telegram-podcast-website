import axios from 'axios'
const FIREBASE_ROOT = "https://project-4967570142103841362.firebaseio.com"
let actions = {
	clearCurrentPodcast: function() {
		return {
			type: 'CLEAR_PODCASTS'
		}
	},
	getPopular: function() {
		let popularURL = `${FIREBASE_ROOT}/popular.json`
		return(dispatch) => {
			axios.get(popularURL)
			.then(function (response) {
				let data = response.data
				let popularPodcasts = []
				let i
				for(i in data){
					let podcastArray = data[i]
					console.log(podcastArray)
					let p
					for (p in podcastArray) {
						popularPodcasts.push(podcastArray[p])
					}
				}
			   	dispatch(actions.updatePopularList(popularPodcasts))
			})
			.catch(function (response) {
			    console.log("ERROER");
				dispatch(actions.displayError("We had an error grabbing podcasts"))
			});
		}
	},
 	updatePopularList: function(podcasts) {
 		return {
 		  type: 'UPDATE_POPULAR_PODCASTS',
 		  podcasts
 		}
 	},
 	displayError: function(errorMessage){
 		return {
 			type: 'ERROR_FOUND',
 			errorMessage
 		}
 	},
 	getLatestPodcast: function(showName) {
 		let showURL = `${FIREBASE_ROOT}/podcasts/${showName}/0.json`
 		console.log(showURL)
 		return(dispatch) => {
 			axios.get(showURL)
 			.then(function (response) {
 				let podcast = response.data
 			   	dispatch(actions.updateCurrentPodcast(podcast))
 			})
 			.catch(function (response) {
 			    console.log(response);
 				dispatch(actions.displayError(`We had an error grabbing this podcast.`))
 			});
 		}
 	},
 	updateCurrentPodcast: function(podcast) {
 		if(podcast != null){
 			return {
 				type: 'UPDATE_CURRENT_PODCAST',
 				podcast
 			}
 		}
 		else {
 			dispatch(actions.displayError(`We had an error grabbing this podcast.`))
 		}
 		
 	}
}
export default actions
