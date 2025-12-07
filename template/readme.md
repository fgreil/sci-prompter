# Directory structure

```
├── App.js
├── package.json
├── babel.config.js
├── navigation/
│   ├── DrawerNav.js
│   ├── Tabs.js
│   ├── SearchStack.js
│   └── index.js
├── screens/
│   ├── ExploreScreen.js
│   ├── FavoritesScreen.js
│   ├── HistoryScreen.js
│   ├── ArticleScreen.js
│   ├── SearchScreen.js
│   ├── SearchFilterScreen.js
│   └── index.js
├── components/
│   └── HeaderButton.js
├── assets/
│   ├── icons/
│   ├── images/
│   └── fonts/
└── utils/
    ├── navigationHelpers.js
    └── constants.js
```
## `/navigation`
All navigation configuration files:
* `DrawerNav.js` for the drawer navigation
* `Tabs.js` for the bottom tab navigation (Explore / Favorites / History)
* `SearchStack.js` → Search → Filter → Article
* `index.js` is an optional convenience file exporting all navigators
