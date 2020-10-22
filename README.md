# BrowserView drag region bug repro

```
git clone git@github.com:ccorcos/electron-browser-view-drag.git
cd electron-browser-view-drag
npm install
npm start
```

There's a workaround by injecting into the main window's webContents but there's tons of animation jank:

```
git checkout webview-workaround
npm start
```
