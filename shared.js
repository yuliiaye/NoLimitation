// (setInterval(function(){
//     $( "p#quote" ).html("“All our dreams can come true, if we have the courage to pursue them.” – Walt Disney.")
// }, 7000))


let quotes = [];
quotes.push("All our dreams can come true, if we have the courage to pursue them. – Walt Disney.");
quotes.push("The secret of getting ahead is getting started. – Mark Twain.");
quotes.push("Write it. Shoot it. Publish it. Crochet it, sauté it, whatever. MAKE. – Joss Whedon");

let placeHolder = $ ( "p#quote" );

$ ( "body" ).on("load", changeQuote());
function changeQuote(){
    $ .each( quotes, setInterval((index, value) => {
        placeHolder.html(index, value);
        // $ ( "p#quote" ).html(value)
    }, 7000) )
};


// for(let i = 0; i < quotes.length; i++){
//     $ ( "p#quote" ).html(quotes[i]);
//     setInterval(function(){
//         return true
//     }, 7000)
// }
// console.log(quotes)    