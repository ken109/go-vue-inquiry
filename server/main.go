package main

import (
	"server/db"
	"server/server"
)

func main() {
	db.Init()
	server.Init()
	db.Close()
}
