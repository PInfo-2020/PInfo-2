# POST requests to check if user-service and user-database are working
# README : this script is an example, with fixed id numbers that may not work on your machine.
echo -e '\n\nCreating a user'
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"name":"test","email":"test_short@testmail.com"}' \
 http://localhost:11081/user/post/
curl -X GET http://localhost:11081/user/1/

echo -e '\n\nAdding a fridge item'
curl --header "Content-Type: application/json" \
   --request PUT \
   --data '{"quantity":"120.5","unit":"g", "ingredient":"223"}' \
  http://localhost:11081/user/1/addFridgeitem/
curl -X GET http://localhost:11081/user/1/

echo -e '\n\nReplacing a fridge item'
curl --header "Content-Type: application/json" \
  --request PUT \
  --data '{"quantity":"420.5","unit":"g", "ingredient":"223"}' \
  http://localhost:11081/user/1/replaceFridgeitem/1/
curl -X GET http://localhost:11081/user/1/

echo -e '\n\nRemoving a fridge item'
curl --request PUT \
  http://localhost:11081/user/1/removeFridgeitem/2/
curl -X GET http://localhost:11081/user/1/

echo -e '\n\nAdding a fridge item'
curl --header "Content-Type: application/json" \
   --request PUT \
   --data '{"quantity":"155.5","unit":"g", "ingredient":"223"}' \
  http://localhost:11081/user/1/addFridgeitem/
curl -X GET http://localhost:11081/user/1/

echo -e '\n\nClearing the fridge'
curl --request PUT \
  http://localhost:11081/user/1/clearFridge/
curl -X GET http://localhost:11081/user/1/


# This command should return a list of previously POSTed users
echo -e '\n\nListing users'
curl -X GET http://localhost:11081/user/
