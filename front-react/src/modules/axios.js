import axios from 'axios'

axios.interceptors.request.use(function (config) {
    if (typeof config.params === 'undefined') {
        config.params = {};
    }
    if (typeof config.params === 'object') {
        if (typeof URLSearchParams === 'function' && config.params instanceof URLSearchParams)
            config.params.append('_', Date.now());
        else
            config.params._ = Date.now();
    }

    return config;
});

export default axios