# f-serviceworker :bear:

[![npm version](https://badge.fury.io/js/%40justeat%2Ff-serviceworker.svg)](https://badge.fury.io/js/%40justeat%2Ff-serviceworker)

Contains the registration script for `service-worker.js` located in the root of your website.

```javascript
const Sw = require(@justeat/f-serviceworker);
Sw.register();
```

 on all pages which should be managed by the service worker.

 Optional configuration object can be passed containing the service-worker.js path. If not provided it defaults to /service-worker.js

 ```javascript
 Sw.register({ swPath: '/subdir/service-worker.js' });
 ```
