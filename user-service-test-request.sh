# POST requests to check if user-service and user-database are working

curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"name":"test","email":"test_short@testmail.com"}' \
 http://localhost:11081/user/post/

# curl --header "Content-Type: application/json" \
#   --request POST \
#   --data '{"name":"téèst2","email":"test2àö@testmail.com"}' \
#   http://localhost:11081/user/post/

# curl --header "Content-Type: application/json" \
#   --request POST \
#   --data '{"name":"test2","email":"test2@testmail.com"}' \
#   http://localhost:11081/user/post/




# This command should return a list of previously POSTed users
curl -X GET http://localhost:11081/user/
