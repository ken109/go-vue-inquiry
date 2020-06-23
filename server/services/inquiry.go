package inquiry

import (
	"github.com/gin-gonic/gin"

	"server/db"
	"server/models"
)

type Service struct{}

type Inquiry models.Inquiry

func (s Service) GetAll() ([]Inquiry, error) {
	db := db.GetDB()
	var i []Inquiry

	if err := db.Find(&i).Error; err != nil {
		return nil, err
	}

	return i, nil
}

func (s Service) CreateModel(c *gin.Context) (Inquiry, error) {
	db := db.GetDB()
	var i Inquiry

	i.Name = c.Query("name")
	i.Mail = c.Query("mail")
	i.Message = c.Query("message")

	if err := db.Create(&i).Error; err != nil {
		return i, err
	}

	return i, nil
}

func (s Service) GetByID(id string) (Inquiry, error) {
	db := db.GetDB()
	var i Inquiry

	if err := db.Where("id = ?", id).First(&i).Error; err != nil {
		return i, err
	}

	return i, nil
}

func (s Service) UpdateByID(id string, c *gin.Context) (Inquiry, error) {
	db := db.GetDB()
	var i Inquiry

	if err := db.Where("id = ?", id).First(&i).Error; err != nil {
		return i, err
	}

	i.Name = c.Query("name")
	i.Mail = c.Query("mail")
	i.Message = c.Query("message")

	db.Save(&i)

	return i, nil
}

func (s Service) DeleteByID(id string) error {
	db := db.GetDB()
	var u Inquiry

	if err := db.Where("id = ?", id).Delete(&u).Error; err != nil {
		return err
	}

	return nil
}
