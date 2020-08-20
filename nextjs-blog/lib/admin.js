import fetch from 'isomorphic-unfetch'

export async function getAdminList(){
	const res = await fetch('http://localhost:3000/api/hello');
	const data = await res.json();

	return{
		data
	}
}

export async function getAdminDetail(id) {

	const res = await fetch('http://localhost:3000/api/admin?id='+id);
	const data = await res.json();

	return {
		id,
		data
	}
}