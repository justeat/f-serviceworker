# f-serviceworker

Contains the registration script for `service-worker.js` located in the root of your website. 
```javascript
const Sw = require(@justeat/f-serviceworker);
Sw.register();
```
 on all pages which should be managed by the service worker.