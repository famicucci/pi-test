import CardList from '../components/CardList';
import SearchForm from '../components/SearchForm';

function App() {
	return (
		<main className="w-full md:w-1/2 md:mx-auto p-2">
			<SearchForm />
			<CardList />
		</main>
	);
}

export default App;
