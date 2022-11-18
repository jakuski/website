---
meta:
    title: Colophon
    displayTitle: Colophon.
    description: A brief insight into the history, design and development of my website.
    edited: 2022-11-17

variables:
    repoLink: https://github.com/jakub-studio/website
    repoIssueLink: https://github.com/jakub-studio/website/issues
    bugReportEmailUsername: ayup
---
This website is designed and developed by Jakub Staniszewski in London, England.

### History
You may have seen a placeholder website present early 2022 on this domain, this was replaced with the current version of the website but was hosted on GitHub pages and used zero libraries. You may visit it [here](https://jakub-studio.github.io/website-dep/). *Note the header text which changes weight depending on the y-position of the user's cursor, that was awesome.*

### Design and Typography
It is designed in [Figma](https://www.figma.com/). The website uses two typefaces, [Inter](https://rsms.me/inter/) and [Libre Baskerville](https://fonts.google.com/specimen/Libre+Baskerville).

### Logo
My logo (the hat and beanie) was designed by [Maria Vidal](https://vmaria.cargo.site/). It was designed on [Procreate](https://procreate.art/) and then vectorised in [Adobe Illustrator](https://www.adobe.com/uk/products/illustrator.html).

### Brand Colour
The orange you see on my website is my personal brand colour, Citrine. It came about when I was finishing university and needed to create my very first portfolio. As part of it, I wanted to create a little branding for myself. The orange is taken from an orange beanie that I wear frequently. The colour was subsequently used on my business cards and other branding materials using [GF Smith Colorplan Citrine](https://www.gfsmith.com/gf-smith-colorplan-citrine). The hex Citrine, `#FFA50A` is based on that paper, with a few adjustments to make it more suited for screens.

### Development
The website was developed in [Visual Studio Code](https://code.visualstudio.com/), with [Next.js](https://nextjs.org/), [React](https://reactjs.org/) and [TypeScript](https://www.typescriptlang.org/). The written content is authored in [Markdoc](https://markdoc.dev/) with frontmatter (metadata) being stored in [YAML](https://en.wikipedia.org/wiki/YAML). The source code is available on {% link href=$repoLink newWindow=true %}GitHub{% /link %}.

### Hosting
It is currently hosted on [Vercel](https://vercel.com).

### Bugs, errors, oopsies and typos.
If you notice any of the above in my website, please report them at the website's {% link href=$repoIssueLink newWindow=true %}GitHub repository{% /link %}. If you do not have a GitHub account or do not wish to use GitHub for any reason, please email me at {% email address=$bugReportEmailUsername domain=$utils.emailDomain /%} with steps on how to reproduce it.