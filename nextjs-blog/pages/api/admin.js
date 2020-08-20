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

	const id = req.query.id ?? '';	

	let result = await mysql.query(escape`
		SELECT a.*, 
			GROUP_CONCAT(aa.authNum ORDER BY aa.authNum ASC SEPARATOR ',') as authList
		FROM ADMIN a
		LEFT JOIN ADMIN_AUTH aa
		ON aa.adminId = a.adminId
		WHERE a.adminId LIKE ${id}
		GROUP BY a.adminId
	`)

	await mysql.end();

	return res.status(200).json(result)
}