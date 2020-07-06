package server

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	inquiry "server/controllers"
	"time"
)

func Init() {
	r := router()
	r.Run(":80")
}

func router() *gin.Engine {
	r := gin.Default()

	r.Use(cors.New(cors.Config{
		AllowMethods: []string{
			"POST",
			"GET",
			"PUT",
			"DELETE",
		},
		AllowHeaders: []string{
			"Access-Control-Allow-Headers",
			"Content-Type",
			"Content-Length",
			"Accept-Encoding",
			"X-CSRF-Token",
			"Authorization",
		},
		AllowOrigins: []string{
			"http://localhost",
		},
		MaxAge: 24 * time.Hour,
	}))

	u := r.Group("/inquiry")
	{
		ctrl := inquiry.Controller{}
		u.GET("", ctrl.Index)
		u.GET("/:id", ctrl.Show)
		u.POST("", ctrl.Create)
		u.PUT("/:id", ctrl.Update)
		u.DELETE("/:id", ctrl.Delete)
	}

	return r
}
