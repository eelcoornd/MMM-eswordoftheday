# MMM-eswordoftheday

This an extension for the [MagicMirror](https://github.com/MichMich/MagicMirror).

It presents a spanish word with an english definition, as well as one spanish/english example sentences.  Data is scraped from [SpanishDict!](https://www.spanishdict.com/wordoftheday)  No account is required

forked from: https://github.com/mumblebaj/MMM-eswordoftheday which was forked from: https://github.com/daniel-windsor/MMM-eswordoftheday

## Screenshot
<img width="350" alt="Screenshot" src="https://github.com/eelcoornd/MMM-eswordoftheday/assets/140081955/0a02d3ac-104d-4f65-8a3f-d54a80c9b2e9">


## Installation
Open a terminal session, navigate to your MagicMirror's `modules` folder and execute:
````
git clone https://github.com/eelcoornd/MMM-eswordoftheday.git
cd MMM-eswordoftheday
npm install
````

Activate the module by adding it to the config.js file as shown below.

## Using the module
````javascript
modules: [
{
  module: 'MMM-eswordoftheday',
  position: 'bottom_left',
},
````

## Config
The entry in `config.js` can include the following options:

|Option|Description|Default Value|Accepted Values|
|---|---|---|---|
|`showExamples`|Toggle examples of the word being used in a sentence|true|`true / false`|
|`showExampleTranslations`|If examples are shown, also show their english translations|true|`true / false`|

## Like this:
````javascript
modules: [
{
  module: 'MMM-eswordoftheday',
  position: 'bottom_left',
  showExamples: false,
  showExampleTranslations: false,
},
````


## Future

Looking into how to automate the website changes :-)

