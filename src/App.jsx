import CardList from '../components/CardList';
import SearchForm from '../components/SearchForm';
import PeopleState from '../context/PeopleState';

function App() {
	return (
		<main className="w-full md:w-1/2 md:mx-auto p-2">
			<PeopleState>
				<SearchForm />
				<CardList />
			</PeopleState>
		</main>
	);
}

export default App;
