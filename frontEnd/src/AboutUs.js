import React from "react";
import $ from "jquery";

class AboutUs extends React.Component {

    aboutus(){
        $("main").empty()
     $("main").html("<div id='pContainer'></br></br></br></br><p>about Us:</p><p id= 'para'>hamzoaui chess books.org began as an idea to help support bookstores and their communities as more and more people are buying their books online. We saw an opportunity to create an alternative to Amazon for socially-conscious online shoppers. Amazon sells over 60% of all books in the US and is growing. That shift threatens the future of bookstores and will hurt readers, authors, and publishers who rely on a diverse, healthy ecosystem for books. We had a better idea — give readers the convenience of online shopping while supporting independent bookstores at the same time.We launched in January of 2020, with just 88 bookstore partners and a team of four passionate book people.As the COVID-19 pandemic surged, our growing platform helped our community of independent booksellers survive shutdowns. That spring, traffic to Bookshop.org hit 1 million users in a single day. By the end of 2020 we had grown to over 1,000 bookstores and distributed over ten million dollars in profits. Bookshop.org has since expanded internationally, launching in the UK and Spain.78% of our customers said they regularly bought books from Amazon before they made the switch.</p></div>")
    }
    render(){
        return (
            
            <button onClick={this.aboutus}>aboutUs</button>
        )
    }
}

export default AboutUs;