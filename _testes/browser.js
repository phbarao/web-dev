(function() {
    function myFunction() {
        return this;
    }
    console.log( myFunction() );
})();

// return this => returns the current object instance.