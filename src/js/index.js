var isLocalhost = Boolean(
    window.location.hostname.match( // localhost OR [::1] OR 127.0.0.1/8
        /^localhost$|^\[::1\]$|^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

// Service workers are only supported over https (and localhost for dev)
var isServiceWorkerSupported =
    'serviceWorker' in navigator &&
    (window.location.protocol === 'https:' || isLocalhost);

function handleInstallationStates (registration) {
    var installingWorker = registration.installing;
    if (navigator.serviceWorker.controller) {
        installingWorker.onstatechange = function () {
            switch (installingWorker.state) {
                case 'installed':
                    // At this point, the old content will have been purged and the
                    // fresh content will have been added to the cache.
                    // It's the perfect time to display a "New content is
                    // available; please refresh." message in the page's interface.
                    break;

                case 'redundant':
                    throw new Error('The installing service worker became redundant.');

                default:
                    // Ignore
            }
        };
    }
}

function register () {
    if (isServiceWorkerSupported) {
        navigator.serviceWorker.register('/service-worker.js')
        .then(function (registration) {
            // updatefound is fired if service-worker.js changes,
            // or when the SW is first installed
            registration.onupdatefound = function () {
                handleInstallationStates(registration);
            };
        });
        // .catch(e => {
        //     logger.error('Error during service worker registration:', e)
        // });
    }
}

module.exports = {
    register: register
};
