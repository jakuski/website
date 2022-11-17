---
meta:
    title: Title
    displayTitle: Display Title
    description: Lorem Ipsum
    published: 2022-07-04
    edited: 2022-07-05

pageProps:
    showMetadata: true
    colours:
        foreground: "black"
        background: "white"

variables:
    links:
        figmaPrototype: "https://jakub.studio/go/xyz"
    testString: This string is found within the variables.

project:
    category: Category String
    softwareUsed: ["adobe.cc.lightroom", "maxon.cinema4d"]
    credits: Credits String
---
## Example Paragraphs
<!-- spell-checker:disable -->
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum gravida id quam a mattis. Sed finibus ut ligula at sagittis. Curabitur fringilla est vitae massa facilisis, id ullamcorper libero pellentesque. Suspendisse augue urna, suscipit non tincidunt eu, blandit ac est. In ut dui in ligula consectetur tristique. Aenean iaculis semper libero, eget rhoncus mauris dictum sit amet. In dictum nisi sed diam ultrices, at convallis ex consequat. In ut feugiat diam. Integer eu odio volutpat lacus convallis consequat nec in justo. Donec non lectus eget est consequat vehicula in a purus. Cras blandit quam magna. Ut tincidunt volutpat velit. Integer cursus luctus lacus in vulputate.

Suspendisse sagittis mollis ligula vitae pulvinar. Proin placerat, enim eu pellentesque consequat, quam nulla pharetra dui, ac interdum turpis dolor vel felis. Integer consequat dui eu velit lobortis suscipit. Aenean vestibulum tellus aliquam libero eleifend, in dapibus nunc convallis. Aenean eget tincidunt lectus. Nulla efficitur metus quis mi finibus accumsan ut sed ligula. Proin dictum lorem nibh. Donec vel ante elementum orci pretium porta.

Nunc ac orci vel metus venenatis luctus ut in nisl. Proin laoreet urna eget pharetra venenatis. Duis semper ut diam dictum congue. Fusce mattis mi quam, eu maximus quam dapibus id. Praesent at libero diam. Cras ac rhoncus arcu, id facilisis justo. Nunc vestibulum tempus urna ac aliquet. Aenean eleifend diam vel dapibus cursus. Nunc cursus tellus et quam suscipit, euismod elementum libero malesuada. Suspendisse potenti. Nam aliquet quis nunc nec egestas. Nam mollis sapien sed venenatis scelerisque.
<!-- spell-checker:enable -->

## Header Level 2
Hello this is text of a header 2

### Header Level 3
Hello this is text of a header 3.

#### Header Level 4
Example of header level 4.

## Header Level 2 with ID {% id="header-2-id" %}
This header has a HTML ID attribute.

## Header Level 2 with ID New Style {% #header-2-id .bg-black %}
This header has a HTML ID attribute.

## Variable Embedding
{% $testString %}


### (h3) Vimeo Embed
{% vimeo id="714461646" color="#ffa50a" /%}

<!-- ### (h3) Figma Embed
{% figma url="https://www.figma.com/file/ADbpaUBjZcJkeBZWP1NmUu/Figma-CV?node-id=16%3A5&hide-ui=1" /%}

{% figma url="https://www.figma.com/proto/lRA7N3IpU0zIZaNb4hCfsZ/The-Spectrum-Clock?page-id=0%3A1&node-id=2%3A169&starting-point-node-id=2%3A47&scaling=scale-down" /%} -->

## Image Test (markdoc tag)
{% image src="p/cookbook/cookbook_cover" /%}

## Image Test (markdown image)
![Cover of Cookbook](p/cookbook/cookbook_cover)

## Multi image test
{% image src="p/cookbook/cookbook_cover" /%}
{% image src="p/cookbook/cookbook_cover" /%}

## Image with caption
{% image src="p/cookbook/cookbook_cover" caption="The cover for 'How to cook and not die trying'." /%}

## Gallery
{% gallery /%}