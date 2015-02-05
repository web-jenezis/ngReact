require.config({
    paths:{
        domReady: 'app/components/requirejs-domready/domReady',
        jquery: '/app/components/jquery/dist/jquery',
        bootstrap: '/app/components/bootstrap/dist/js/bootstrap',
        angular: 'app/components/angular/angular',
        react: 'app/components/react/react'
    },
    shim: {
        angular: {
            exports: 'angular'
        },
        React: {
            exports: 'React'
        }
    },
    deps: ['app/bootstrap']
});