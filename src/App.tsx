import { NavBar, Billing, CardDeal, Business, Clients, CTA, Stats, Footer, Testimonials, Hero } from './components';
const App = () => (
	<div className='bg-primary w-full overflow-hidden'>
		<header className='paddingX flexCenter'>
			<div className='boxWidth'>
				<NavBar />
			</div>
		</header>

		<section className='bg-primary flexStart'>
			<div className='boxWidth'>
				<Hero />
			</div>
		</section>

		<section className='bg-primary paddingX flexStart'>
			<div className='boxWidth'>
				<Stats />
				<Business />
				<Billing />
				<CardDeal />
				<Testimonials />
				<Clients />
				<CTA />
				<Footer />
			</div>
		</section>
	</div>
);

export default App;
