main.js -> *utils -> servers
-> validators -> middlewares -> scripts
-> *repositories
--> schemas --> models --> databases

params: in ctrl

-   route param; req.params == /:id or /:id?
-   route query; req.query == /?data=gyugug&info=jiooj
-   GET,DELETE,PUT,PATCH

tokens: in middleware and validators

-   header; req.headers
-   cookies; req.cookies

data: in ctrl

-   body; req.body
-   formdata; req.body with multer
-   POST,PUT,PATCH

MySQL

-SELECT DISTINCT FROM LIKE NOT AS
-INSERT INTO
-UPDATE SET
-DELETE FROM

-JOIN ON
-WHERE AND OR IN
-GROUP BY
-HAVING
-ORDER BY ASC DESC
-LIMIT OFFSET

-COUNT() SUM()

Mongo

find
findOne
findOneAndDelete
findOneAndUpdate
findByIdAndUpdate
findByIdAndDelete

insertOne
insertMany

updateOne
updateMany

deleteOne
deleteMany
