---
meta:
    title: Spotify Post-Codes
    description: Community run playlists, discoverable by the world.
    published: 2023-01-14
    image: p/spotify21/cover

pageProps:
    showMetadata: true

project:
    date: 2021-03-23 # <- Deadline of the brief
    category: [design.ui, dev.web, design.motion]
    softwareUsed: [adobe.cc.xd, adobe.cc.after-effects, adobe.cc.photoshop]

variables:
    vimeoId: 714433414
    vimeoColor: "#ffa50a" # Change to a util var ($.utils.XXX) soon
    spotifyPostCodes: 
    spotifyPostCodesGithub:
---
Spotify Post-Codes explores how Spotify can become more of a social platform. This project was done as part of the [D&AD New Blood Awards](https://www.dandad.org/en/d-ad-new-blood-awards/) 2021.  
Post-Codes are community run playlists for pre-defined "cultural hotspots" (think major cities) where users who are within the geographical vicinity of the Post-Code can upvote and submit tracks they are right for it. The Post-Code playlists could then be discovered and played-back by any users on Spotify.

## Launch Video & Outcomes {% #intro-outcomes %}
{% vimeo id=$vimeoId color=$vimeoColor /%}
{% gallery %}
    {% galleryImage src="p/spotify21/postcodes_onboarding" /%}
    {% galleryImage src="p/spotify21/postcodes_exploration" /%}
    {% galleryImage src="p/spotify21/postcodes_playlists" /%}
{% /gallery %}