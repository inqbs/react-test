import Layout from '../../components/layout'

import Date from '../../components/Date';

import {getAdminList, getAdminDetail} from '../../lib/admin'

export default function AdminSettings({data}){
	return (
		<Layout>
			<form action="">
				<h1>{data.adminId}</h1>
				<p>{data.adminName}</p>
				<label>
					<input type="checkbox" name="state" value="1" checked={data.adminState}/> <span>사용</span>
					<input type="checkbox" name="state" value="2" checked={data.adminState}/> <span>정지</span>
				</label>
				<Date dateString={data.adminDate} />
			</form>
		</Layout>
	)
}

export async function getStaticPaths() {
	const paths = getAdminList()
	return {
		paths,
		fallback: false
	};
}

export async function getStaticProps({params}){

	const data = getAdminDetail(params.id);

	return {
		props:{
			data
		}
	}
}