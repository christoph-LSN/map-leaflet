var klaroConfig = {
    version: 1,
    elementID: 'klaro',
    styling: {
        theme: ['light', 'top', 'wide'],
    },
    noAutoLoad: false,
    htmlTexts: false,
    embedded: false,
    groupByPurpose: true,
    storageMethod: 'cookie',
    cookieName: 'cookie_settings',
    cookieExpiresAfterDays: 365,
    default: false,
    mustConsent: false,
    acceptAll: true,
    hideDeclineAll: false,
    hideLearnMore: false,
    noticeAsModal: false,
    services: [
        {
            name: 'contrast',
            default: true,
            purposes: ['functional'],
            cookies: ['contrast'],
            required: true,
            optOut: false,
            onlyOnce: true,
        },
        {
            name: 'cookie_settings',
            default: true,
            purposes: ['functional'],
            cookies: ['cookie_settings'],
            required: true,
            optOut: false,
            onlyOnce: true,
        },
        {% if (site.analytics.ga_prod and site.analytics.ga_prod != '') or (site.analytics.ua and site.analytics.ua != '') or (site.analytics.gtag and site.analytics.gtag != '')  %}
        {
            name: 'google-analytics',
            default: false,
            purposes: ['analytics'],
            {% if site.analytics.extra_cookies %}
            cookies: [].concat(['_gat', '_gid', 'ga'], {{ site.analytics.extra_cookies | jsonify }}),
            {% else %}
            cookies: ['_gat', '_gid', 'ga'],
            {% endif %}
            required: false,
            optOut: false,
            onlyOnce: false,
        },
        {% endif %}
    ],
};
