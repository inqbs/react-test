const mysql = require('serverless-mysql')({
	config: {
		host: '211.169.249.117',
		port: '3806',
		database: 'AnyQ_DB',
		user: 'any_user',
		password: 'dkdlwkr'
	}
})

export default async (req,res)=>{
	let result = await mysql.query(`
		SELECT adminId
		FROM ADMIN
	`, (err, rows)=>{
		if(!!err) throw err;
		return JSON.stringify(rows);
	})

	await mysql.end();

	result = await result.map(it=>it.adminId);

	console.log(`-*****- result => ${result}`)

	return res.status(200).json(result)
}