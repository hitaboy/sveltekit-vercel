export async function load({ params }) {
	return {
		post: { text: 'Això ve de SSR'}
	};
}