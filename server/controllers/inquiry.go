package inquiry

import (
	"fmt"

	"github.com/gin-gonic/gin"

	inquiry "server/services"
)

type Controller struct{}

func (pc Controller) Index(c *gin.Context) {
	var s inquiry.Service
	p, err := s.GetAll()

	if err != nil {
		c.AbortWithStatus(404)
		fmt.Println(err)
	} else {
		c.JSON(200, p)
	}
}

func (pc Controller) Create(c *gin.Context) {
	var s inquiry.Service
	p, err := s.CreateModel(c)

	if err != nil {
		c.AbortWithStatus(400)
		fmt.Println(err)
	} else {
		c.JSON(201, p)
	}
}

func (pc Controller) Show(c *gin.Context) {
	id := c.Params.ByName("id")
	var s inquiry.Service
	p, err := s.GetByID(id)

	if err != nil {
		c.AbortWithStatus(404)
		fmt.Println(err)
	} else {
		c.JSON(200, p)
	}
}

func (pc Controller) Update(c *gin.Context) {
	id := c.Params.ByName("id")
	var s inquiry.Service
	p, err := s.UpdateByID(id, c)

	if err != nil {
		c.AbortWithStatus(400)
		fmt.Println(err)
	} else {
		c.JSON(200, p)
	}
}

func (pc Controller) Delete(c *gin.Context) {
	id := c.Params.ByName("id")
	var s inquiry.Service

	if err := s.DeleteByID(id); err != nil {
		c.AbortWithStatus(403)
		fmt.Println(err)
	} else {
		c.JSON(204, gin.H{"id #" + id: "deleted"})
	}
}
