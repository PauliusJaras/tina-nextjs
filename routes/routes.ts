type TUrlNames = 'news' | 'contacts' | 'pages' | 'specialOffers' | 'cars' | 'carComparison' | 'dealershipCars' | 'forms' | 'newCars' | 'usedCars'

export const routes: Record<TUrlNames, string> = {
	news: '/naujienos',
	contacts: '/kontaktai',
	pages: '/puslapiai',
	specialOffers: '/specialus-pasiulymai',
	cars: '/modeliai',
	carComparison: '/modeliu-palyginimas',
	dealershipCars: '/salono-ir-naudoti-automobiliai',
	forms: '/formos',
	newCars: '/nauji-automobiliai',
	usedCars: '/naudoti-automobiliai'
}