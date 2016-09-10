# radio-gaga

Simple web radio player for my elderly mother, no ads, no popups, no settings.

## stations.json

Station list is stored in a json config file, right now the application itself
does not fetch/parse remote sites.

Object format:

* __name__: name of the radio channel
* __url__: homepage
* __locator__: either a suffix to search for in the homepage or an url and a suffix in "url->suffix" format. Use with pls or m3u files, think of it as an extra step.
* __src__: the stream url, audio source
* __shoutcastify__: shoutcast streams must end with a semicolon, but sometimes it is missing from the source (probably appended by an interim flash player)
* __(timestamp)__: Date.now generated by _test-stations_, not required
* __(broken)__: generated by _test-stations_, indicates a severe fetch error (404, 500 etc.)

Use `npm run test-stations` to test and modify the json. If the script fails, update
the file manually or implement new parser logic for offending page. Always review the changeset
generated by the script.
