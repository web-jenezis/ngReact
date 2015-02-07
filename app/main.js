require.config({
    paths:{
        domReady: 'components/requirejs-domready/domReady',
        jquery: 'components/jquery/dist/jquery',
        // bootstrap: 'components/bootstrap/dist/js/bootstrap',
        angular: 'components/angular/angular',
        react: 'components/react/react'
    },
    shim: {
        angular: {
            exports: 'angular'
        }/*,
        React: {
            exports: 'React'
        }*/
    },
    deps: ['./bootstrap']
});