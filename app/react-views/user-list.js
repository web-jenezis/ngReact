var UserList = React.createClass({
    displayName: "UserList",
    render: function() {
        var scope = this.props.scope;
        var users = this.props.scope.users;

        var userList = users.map(function(user, index, array) {
            var clickHandler = scope.$apply.bind(scope,
                scope.userSelected.bind(null, {user: user}));

            return React.DOM.li({ className: "user-item list-group-item", onClick: clickHandler },
                [user.firstName, user.lastName].join(' - '));
        });

        return React.DOM.ul( {className:"user-list list-group"}, userList);
    }
});