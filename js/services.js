app.factory('dataTransfer', function(){
    var savedData = [];
    return {
        setData: function(data) {
            savedData.push(data);
        },
        getData: function() {
            return savedData;
        }
    }
});