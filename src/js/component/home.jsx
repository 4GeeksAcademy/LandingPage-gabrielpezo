import React from "react";
import Navbar from "./Navbar.jsx"
import Jumbotron from "./Jumbotron.jsx"
import Cards from "./Cards.jsx"

const Home = () => {
	const products = [
		{
			name:"Milla painting",
			description: "Beautiful painting created by Guillermo Martí.",
			price:"$50.000",
			image:"https://es.wikiarquitectura.com/wp-content/uploads/2017/01/Milla_5-500x325.jpg",
		},
		{
			name:"Picture of the Himalayas",
			description: "Last picture taken by the famous photographer William Chununk.",
			price:"$20.000",
			image:"https://www.hugorodriguez.com/fotos/paisaje/antiguas/valthorens-antigua-grande.jpg",
		},
		{
			name:"Complete tour at Pisa.",
			description: "Enjoy a trip to La Toscana and watch the tower of Pisa.",
			price:"$640.000",
			image:"https://whc.unesco.org/uploads/thumbs/site_0395_0043-500-325-20140718150243.jpg",
		},
		{
			name:"American White Oak Medium 500 x 350mm",
			description: "Floor made of White Oak.",
			price:"$90.000",
			image:"https://choppablock.com.au/wp-content/uploads/2022/07/2410-20220327_200651-blk_WHITE-650px-500x325.jpg",
		},
	];
	return (
		<div>
			<Navbar/>
			<div className="container mb-5 w-50">
				<Jumbotron/>		
				<div className="row">
					{
						products.map((item, index)=>{
							return (
								<div key={index} className="col">
									<Cards product={item}/>
								</div>
							)
						})
					}
				</div>
			</div>
			<div className = "footer bg-dark text-light pb-5">Copyright@your website 2024</div>
		</div>

		
	);
};
export default Home;
