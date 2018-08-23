# f-serviceworker :bear:

[![npm version](https://badge.fury.io/js/%40justeat%2Ff-serviceworker.svg)](https://badge.fury.io/js/%40justeat%2Ff-serviceworker)
[![Build Status](https://travis-ci.org/justeat/f-serviceworker.svg)](https://travis-ci.org/justeat/f-serviceworker)
[![install size](https://packagephobia.now.sh/badge?p=@justeat/f-serviceworker)](https://packagephobia.now.sh/result?p=@justeat/f-serviceworker)

Contains the registration script for `service-worker.js` located in the root of your website.

```javascript
const sw = require('@justeat/f-serviceworker');
sw.register();
```

 on all pages that should be managed by the service worker.

 Optional configuration object can be passed containing the service-worker.js path. Defaults to /service-worker.js

 ```javascript
 Sw.register({ swPath: '/subdir/service-worker.js' });
 ```
