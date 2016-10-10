# [structure.exposed](http://structure.exposed/)

A simple proxy that strips away CSS frippery.

## Why?

[structure.exposed](http://structure.exposed/) is a good way to check how your site will behave if styles fail to load.

Aggressive firewalls, intermittent connection, shiesty service providers, bad caches, browser plugins, content blockers, non-standard browsers, and CDN outages can all conspire to interrupt your style's HTTP request. 

Authoring your markup in a logical order using semantic markup ensures that basic functionality is retained even if the visuals are not. It is also great for [helping to make your site accessible](http://a11yproject.com/posts/navigate-using-just-your-keyboard/).

## Frequently Asked Questions

### How are styles removed?

Styles are removed by [an injected stylesheet](https://github.com/danielsmc/structure-exposed/blob/master/public/nuclear-reset.css) that overrides the host site's CSS by using the [`all: initial;`](http://www.brucelawson.co.uk/2014/css-all-initial-to-prevent-widgets-inheriting-css-from-a-host-page/) declaration.

### Is this the document source order as authored?

No. Styles are removed after the page has finished rendering—this includes any DOM manipulation performed by the host site's JavaScript. structure.exposed does *not* alter the host site's HTML.

Also note that for accessibility testing, [nearly 100% of all people that navigate using a screen reader do so with JavaScript enabled](http://a11yproject.com/posts/myth-screen-readers-dont-use-javascript/). 

### Why are all those giant logos showing up?

There is a technique for displaying icons that has you [place SVG files invisibly at the top of your site](https://css-tricks.com/svg-sprites-use-better-icon-fonts/). When styling is removed, the instructions for hiding them are disabled and the icons appear in their default state.

### Is this a good replacement for Google Wireless Transcoder?

Nope, unfortunately. The site will still request and download data before its styles are removed.

## Inspiration

Firefox's [disable Page Style functionality](https://developer.yahoo.com/blogs/ydn/temporarily-disable-css-testing-53538.html).


## License

[MIT](https://raw.githubusercontent.com/danielsmc/structure-exposed/master/LICENSE).

* * *

Another [Dan](https://twitter.com/mclaughlin) and [Eric](https://twitter.com/ericwbailey) joint.
