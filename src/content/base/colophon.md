---
meta:
    title: Colophon
    displayTitle: Colophon.
    description: A brief insight into the history, design and development of my website.
    edited: 2022-07-05

variables:
    repoIssueLink: https://github.com/jakub-studio/website/issues
    bugReportEmailUsername: ayup
---
This website is designed and developed by Jakub Staniszewski in London, England.

### History

You may have seen a placeholder website present early 2022 on this domain, this was replaced with the current version of the website but was hosted on GitHub pages and used zero libraries. You may visit it [here](https://jakub-studio.github.io/website-dep/). *Note the header text which changes weight depending on the y-position of the user's cursor, that was awesome.*

### Design and Typography

It is designed in [Figma](https://www.figma.com/). The website uses two typefaces, 1) Quincy CF by Connary Fagen and 2) [Neue Haas Grotesk](https://fonts.adobe.com/fonts/neue-haas-grotesk) (text variant) by Christian Schwartz and Monotype.

### Development

The website was developed in [Visual Studio Code](https://code.visualstudio.com/), with [Next.js](https://nextjs.org/), [React](https://reactjs.org/) and [TypeScript](https://www.typescriptlang.org/). The written content is authored in Markdoc with frontmatter (metadata) being stored in YAML. The source code is available on GitHub.

### Hosting

It is currently hosted on [Vercel](https://vercel.com).

### Bugs, errors, oopsies and typos.
If you notice any of the above in my website, please report them at the website's {% link href=$repoIssueLink newWindow=true %}GitHub repository{% /link %}. If you do not have a GitHub account or do not wish to use GitHub for any reason, please email me at {% email address=$bugReportEmailUsername domain=$utils.emailDomain /%} with steps on how to reproduce it.