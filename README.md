# [structure.exposed](http://structure.exposed/)

A simple proxy that strips away CSS frippery.

## Why?

[structure.exposed](http://structure.exposed/) is a good way to check how your site will behave if styles fail to load.

Aggressive firewalls, intermittent connection, shiesty service providers, bad caches, browser plugins, content blockers, non-standard browsers, large blocking assets, greedy JavaScript, CDN outages, and panicky production hotfixes can all conspire to interrupt your style's HTTP request.

Authoring your markup in a logical order using semantic markup ensures that basic functionality is retained even if the visuals are not. It is also great for [helping to make your site accessible](http://a11yproject.com/posts/navigate-using-just-your-keyboard/).

## Frequently Asked Questions

### How are styles removed?

Styles are removed by [an injected script](https://github.com/danielsmc/structure-exposed/blob/master/public/nuclear-reset.js) that removes every `<style>` tag, every `<link rel="stylesheet">` and the `style` attribute from every element.

### Is this the document source order as authored?

No.  Styles are removed after the page has finished rendering—this includes any DOM manipulation performed by the host site's JavaScript. 

structure.exposed does *not* alter the host site's HTML.

It's also worth noting that for accessibility testing purposes, [nearly 100% of all people that navigate using a screen reader do so with JavaScript enabled](http://a11yproject.com/posts/myth-screen-readers-dont-use-javascript/)—your experience and the experience of a person using a screen reader may be closer than you think! 

### Why are all these giant logos showing up?

There is a technique for displaying icons that has you [place SVG files invisibly at the top of your site](https://css-tricks.com/svg-sprites-use-better-icon-fonts/). When styling is removed, the instructions for hiding them are disabled and the icons appear in their default state.

### What's with this weird grid of icons?

Much like the icon displaying technique described above, using [CSS sprites](https://css-tricks.com/css-sprites/) for non-SVG icons is another popular technique for displaying images.

### Why am I seeing content displayed that isn't shown on the styled site?

Clever developers will sometimes hide content on the site, and then reveal it under certain circumstances. Remember! It's best to make sure this content is placed in a logical order, even if it is initially hidden visually.

### Is this a good replacement for Google Wireless Transcoder?

Nope, unfortunately. The site will still request and download data before its styles are removed.

### Can I use this locally?

Just break the link to your CSS and refresh the page, you silly goose.

## Inspiration

Firefox's [disable Page Style functionality](https://developer.yahoo.com/blogs/ydn/temporarily-disable-css-testing-53538.html).


## License

[MIT](https://raw.githubusercontent.com/danielsmc/structure-exposed/master/LICENSE).

* * *

Another [Dan](https://twitter.com/mclaughlin) and [Eric](https://twitter.com/ericwbailey) joint.
