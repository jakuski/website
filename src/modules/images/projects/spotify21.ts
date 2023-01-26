import { ImageObject } from "@/modules/images";

import imageCover from "@/content/_images/projects/uni-y2-spotify/project_cover.jpg";
import imagePostCodesOnboarding from "@/content/_images/projects/uni-y2-spotify/postcodes_onboarding.jpg";
import imagePostCodesExploration from "@/content/_images/projects/uni-y2-spotify/postcodes_exploration.jpg";
import imagePostCodesPlaylists from "@/content/_images/projects/uni-y2-spotify/postcodes_playlists.jpg";
import imageUIGuidelines from "@/content/_images/projects/uni-y2-spotify/spotify_ui_guidelines.png";

const images: ImageObject = {
	"p/spotify21/cover": {
		src: imageCover,
		alt: "A globe and text saying 'Post Codes'"
	},
	"p/spotify21/postcodes_onboarding": {
		src: imagePostCodesOnboarding,
		alt: "3 mobile devices with the Spotify app open, showing the onboarding phase of the conceptual 'Post Codes' feature"
	},
	"p/spotify21/postcodes_exploration": {
		src: imagePostCodesExploration,
		alt: "3 mobile devices with the Spotify app open, showing the exploration phase of the conceptual 'Post Codes' feature"
	},
	"p/spotify21/postcodes_playlists": {
		src: imagePostCodesPlaylists,
		alt: "3 mobile devices with the Spotify app open, showing the playlists phase of the conceptual 'Post Codes' feature"
	},
	"p/spotify21/spotify_ui_guidelines": {
		src: imageUIGuidelines,
		alt: "Various design tokens taken from Spotify's Mobile UI"
	}
};

export default images;