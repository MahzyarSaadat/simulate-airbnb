import Nav from "../../components/Navigation";
import Hero from "../../components/Hero";
import Cart from "../../components/Cart";
import data from "../../data";


const HomePage = () => {
    const dateElemet = data.map(item => {
        return(
            <Cart
                key={item.id}
                img={item.coverImg}
                starReview={item.stats.rating}
                count={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}
            />
        )
    })

    return(
        <div className="homePage--container">
            <Nav/>
            <Hero/>
            <section className="carts--container section">
                {dateElemet}
            </section>
        </div>
    )
}

export default HomePage;