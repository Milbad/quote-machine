/* quote.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* A new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* A test that ensures when the page is loaded, there is
         * a quote  within the #the-quote container.
         */
        it('contain 1 quote', function() {
            expect($('.container #the-quote').length).not.toBe(0);
        });
        /* A test that ensures when the page is loaded, there is
         * a quote source  within the #the-source container.
         */
        it('contain 1 source', function() {
            expect($('.container #the-source').length).not.toBe(0);
        });
    });
    /* A new test suite named "New Quote" */
    describe('New Quote Button', function() {
        var oldQuote=  $('.container #the-quote');
        console.log(oldQuote.html());
        var newQuote;
        /* A test that ensures when the user click on the new quote Button
         * a new quote  appears within the #the-quote container.
         */
        it('displays a new quote', function() {
            $('#new-quote').trigger('click');
            newQuote = $('.container #the-quote').html();
            console.log(newQuote);
            expect(oldQuote).not.toEqual(newQuote);
        });
    });


}());
