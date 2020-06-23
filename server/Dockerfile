FROM golang:buster

WORKDIR /go/src

COPY . /go/src

ENV GO111MODULE=on
RUN go mod download

EXPOSE 80

CMD ["go", "run", "/go/src/main.go"]