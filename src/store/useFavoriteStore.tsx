import create from 'zustand'

interface IFavoriteState {
	favorites: string[]
	addFavorite: (videoId: string) => void
	removeFavorite: (videoId: string) => void
	isFavorite: (videoId: string) => boolean
}

const useFavoriteStore = create<IFavoriteState, []>((set, get) => ({
	favorites: [],
	addFavorite: videoId =>
		set(state => ({
			favorites: [...state.favorites, videoId]
		})),
	removeFavorite: videoId =>
		set(state => ({
			favorites: state.favorites.filter(id => id !== videoId)
		})),
	isFavorite: videoId => {
		return get().favorites.includes(videoId)
	}
}))

export default useFavoriteStore
