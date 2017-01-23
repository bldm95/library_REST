
app.factory('BookList', ['$resource',
    function($resource) {
        return $resource('/book_list/', {}, {
            postQuery: {method:'GET', params:{typeId: 'typeId'}, isArray:true}
        });
    }
]);