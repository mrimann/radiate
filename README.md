## What's it?

At [internezzo](http://www.internezzo.ch/) we're having a [radiator screen for Jenkins](https://github.com/laeuft/jenkins-monitor) to be immediately notified if one of our build jobs is failing.

But we thought about the possibility to show several different things like e.g. statstics or the like, without the need to nail a second, third or fourth screen to the wall. That's why **radiate** was built: as **a wrapper** around other existing sources that can be shown on one single screen in a loop.

## How to start?
Just clone this repository and open index.html in your browser. It will show you some (ugly, I know) demo panels to showcase the whole functionality.

Copy the `conf/radiate.conf.js.sample` file to `conf/radiate.conf.js` for your individual config.

Now edit the `conf/radiate.conf.js` file and add an entry for each of the panels you want to show off on you radiator screen.

Reload in your browser and the stuff that you've added should be shown now. Keep in mind that the *content from your panels must fit into your screen size* - everything that overflows will be cut off.

## Configuration options

- screenSources: array

	An array that contains URLs to panel sources that will be shown as iframes

- displayDuration: 1500

	Defines the duration in milliseconds before the next panel is shown - you probably want this to be changed to 30000ms or more

## Project status

So far it's a rough draft and still in development - but don't expect too much. If in doubt, just drop me some bits and bytes at mario@rimann.org to get in touch!

## License
Licensed under the permissive [MIT license](http://opensource.org/licenses/MIT) - have fun with it!