package main

import (
	"encoding/json"
	"errors"
	"io/ioutil"
	"log"
	"net/http"
	"time"

	"github.com/gorilla/mux"
)

type ErrorMessage struct {
	Msg string `json:"message"`
}

type User struct {
	Name     string `json:"userName"`
	Password string `json:"userPassword"`
}

type FakeUsersDB struct {
	users []*User
}

func main() {
	fakeDB := &FakeUsersDB{}

	r := mux.NewRouter()
	r.HandleFunc("/api/login", fakeDB.loginHandler).Methods("POST", "OPTIONS")
	r.HandleFunc("/api/register", fakeDB.registerHandler).Methods("POST", "OPTIONS")
	r.HandleFunc("/api/logout", fakeDB.removeCookies).Methods("GET", "OPTIONS")

	addr := ":8080"
	log.Println("server starting on addr", addr)
	err := http.ListenAndServe(addr, r)

	if err != nil {
		log.Println("err: ", err.Error())
	}
}

func (h *FakeUsersDB) loginHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	w.Header().Set("Access-Control-Allow-Credentials", "true")

	if r.Method != "POST" {
		return
	}

	userExists, user := h.checkUserInRepo(r)

	if !userExists {
		http.Error(w, errors.New("User doesn't exist").Error(), http.StatusBadRequest)
		return
	}

	log.Println("login user: ", user)

	expiration := time.Now().Add(365 * 24 * time.Hour)
	cookie := http.Cookie{
		Name:    "isLogin",
		Value:   "true",
		Expires: expiration,
		Path:    "/",
	}
	http.SetCookie(w, &cookie)

	byteValue, err := json.Marshal(&user)
	if err != nil {
		log.Println(err.Error())
	}

	_, err = w.Write(byteValue)
	if err != nil {
		log.Println(err.Error())
	}
}

func (h *FakeUsersDB) registerHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	w.Header().Set("Access-Control-Allow-Credentials", "true")

	if r.Method != "POST" {
		return
	}

	userExists, user := h.checkUserInRepo(r)

	if userExists {
		http.Error(w, "User exists", http.StatusBadRequest)
		return
	}

	log.Println("new user: ", user)

	h.users = append(h.users, user)

	expiration := time.Now().Add(365 * 24 * time.Hour)
	cookie := http.Cookie{
		Name:    "isLogin",
		Value:   "true",
		Expires: expiration,
		Path:    "/",
	}
	http.SetCookie(w, &cookie)

	byteValue, err := json.Marshal(&user)
	if err != nil {
		log.Println(err.Error())
	}

	_, err = w.Write(byteValue)
	if err != nil {
		log.Println(err.Error())
	}
}

func (h *FakeUsersDB) checkUserInRepo(r *http.Request) (bool, *User) {
	user := &User{}

	body, _ := ioutil.ReadAll(r.Body)
	r.Body.Close()

	err := json.Unmarshal(body, user)
	if err != nil {
		log.Println(err.Error())
	}

	for _, item := range h.users {
		if item.Name == user.Name {
			return true, user
		}
	}

	return false, user
}

func (h *FakeUsersDB) removeCookies(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
	w.Header().Set("Access-Control-Allow-Credentials", "true")

	if r.Method != "GET" {
		return
	}

	expiration := time.Now()
	cookie := http.Cookie{
		Name:    "isLogin",
		Value:   "true",
		Expires: expiration,
		Path:    "/",
	}
	http.SetCookie(w, &cookie)

	byteValue, err := json.Marshal("Remove cookies")
	if err != nil {
		log.Println(err.Error())
	}

	_, err = w.Write(byteValue)
	if err != nil {
		log.Println(err.Error())
	}
}
