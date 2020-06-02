# POST requests to check if user-service and user-database are working
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"name":"test","email":"test@testmail.com","registerDate":"2017-17-09","ratingNum":"42","ratingDenum":"66"}' \
  http://localhost:11081/user/post/
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"name":"test2","email":"test2@testmail.com","registerDate":"2017-02-02","ratingNum":"55","ratingDenum":"99"}' \
  http://localhost:11081/user/post/

# This command should return a list of previously POSTed users
curl -X GET http://localhost:11081/user/
