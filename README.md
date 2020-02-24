# Neon Evangelion &mdash; React / Redux App

### What the app is:
* A simple data fetching app, which gets data (about the anime, Neon Evangelion) from [Jikan Apiary](https://jikan.docs.apiary.io/#reference/0/anime/fetch-resource, 'Neon Evangelion API') and renders that data to the screen after an asynchronous axios call.

### What the app uses:
* Uses axios to fetch data
* Uses middleware (thunk) to intercept data and perform an asynchronous call
* Uses reducer functions and actions to:
  1. Pass data to necessary components
  1. Dispatch the appropriate action (which is the asynchronous data call)

## Copyright & License

&copy; Devin Graham
