db.createUser(
  {
	user  : "user",
	pwd   : "password",
	roles : [
		  {
		    role  : "readWrite"	,
		    db    : "my_db"
			}
		]
	}



)
