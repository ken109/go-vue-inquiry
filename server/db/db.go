package db

import (
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
	"server/models"
)

var (
	db  *gorm.DB
	err error
)

func Init() {
	DBMS := "mysql"
	USER := "go"
	PASS := "password"
	PROTOCOL := "tcp(db:3306)"
	DBNAME := "inquiry"

	CONNECT := USER + ":" + PASS + "@" + PROTOCOL + "/" + DBNAME
	db, err = gorm.Open(DBMS, CONNECT)
	if err != nil {
		panic(err)
	}
	autoMigration()
}

func GetDB() *gorm.DB {
	return db
}

func Close() {
	if err := db.Close(); err != nil {
		panic(err)
	}
}

func autoMigration() {
	db.AutoMigrate(&models.Inquiry{})
}
