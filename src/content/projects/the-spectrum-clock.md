---
meta:
    title: The Spectrum Clock
    description: Communicating time through colour.
    published: 2022-07-04
    edited: 2022-07-05
    image: p/spectrum-clock/rings

pageProps:
    showMetadata: true

variables:
    links:
        figmaPrototype: "https://jakub.studio/go/xyz"
        javascriptPrototype: https://jakub-studio.github.io/SpectrumClock/build/
        javascriptPrototypeSource: https://github.com/jakub-studio/SpectrumClock

project:
    category: UI/UX
    softwareUsed: ["figma.design", "adobe.cc.after-effects", "maxon.cinema4d", "maxon.redshift"]
---
The Spectrum Clock explores how time can be told through colour, instead of string of text that we are normally used to.

## The Challenge {% id="challenge" %}
The brief was set out by university staff, with one simple question. "Explore interesting ways to visually communicate time". It was such an open question which presented infinite amounts of possible avenues this project could've go on. My initial ideas ranged from creating codes/IDs for every second possible under the gregorian calendar (like [what3words](https://what3words.com/) but for time), an anonymous social media board where users could go and share what happened to them at any particular moment in time (inspired by the anonymity and sharing of [The Unsent Project](https://theunsentproject.com/)), a climate count-up clock where users could see the impact of humans on Earth and it's climate by the second, showing in real time how many plastic bottles are dumped into the ocean, CO2 into the atmosphere and other variables which would intentionally create a sense of anxiety and stress in the user to encourage the user to make more climate concious choices. My last initial idea and the one I ended up going forward with was trying to tell the time through colour, it was inspired by the perceptual phenomenon [Synesthesia](https://en.wikipedia.org/wiki/Synesthesia), in particular, [Grapheme-color synesthesia](https://en.wikipedia.org/wiki/Grapheme%E2%80%93color_synesthesia) which is where a individual (or *synesthete*) associates numbers and letters with colours. They may see the letter 'A' as blue and the letter 'B' as yellow and so fourth. I encourage you to read the Wikipedia articles linked for more information. My idea stemmed around the concept of assigning each number from 0-9 it's own unique colour and telling the time through that.

## The Solution {% id="solution" %}


## The Outcome {% id="outcome" %}

### Prototypes {% id="prototypes" %}
I created two prototypes for this project, one in [Figma](https://www.figma.com/) to showcase the UI and features of The Spectrum Clock's website and another in JavaScript. I had to create the JavaScript prototype as Figma was unable to showcase how I wanted the clock to look and feel like.  
Unfortunately, I was not able to get the JavaScript prototype to a point where I was happy with it, browser engines do not support animation from gradient to gradient and as a result the JavaScript result ended up very 'jumpy' and not as smooth as I wanted it to be. However I was able to successfully make it show the colours for the user's current time as well as any time/date combination they desire through the use of a date picker control at the top of the prototype.

#### Figma Prototype {% id="figma-prototype" %}
<!-- {% figma address=$contactEmail domain=$utils.emailDomain /%} -->

[test link](https://jakub.studio/contact)

#### JavaScript Prototype {% id="js-prototype" %}
Source code available on my {% link href=$links.javascriptPrototypeSource newWindow=true %}GitHub{% /link %}.