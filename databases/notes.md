--------the problem with the pg libaries that we are using 


1.  u have to write raw sql queries causing both security issues and overhead it is good to learn the sql  
2. migrations are hard this is where orms comes into picture
3. you do n't get the best types 


orm is just a language thqt let's u interact with database instead of raw sql queries 

benefits are 
1. write code is js / ts  instead of sql 
2. automatic type safety 
3.Easier migrations
4. prevents sql injections automatically 


// prisma is modern orm specifically for ts / js

1 . schema first define ur schema 
2 auto generated types for ur schema 
3. migration system 
4.primsa client  type safe database queries


so ORM  is concept or a pattern where as  
prisma is a specific orm or an implementatio of the concept of orm

