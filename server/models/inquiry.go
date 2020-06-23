package models

type Inquiry struct {
	ID      uint   `json:"id"`
	Name    string `json:"name"`
	Mail    string `json:"mail"`
	Message string `json:"message"`
}
