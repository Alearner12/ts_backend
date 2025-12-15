
import { PrismaClient } from '@prisma/client'
import { emit } from 'process'

const prisma = new PrismaClient({log : ['info' , 'query']}) // adding info and query gives u the sql which are 
// working under the hood 


async function main () {
   await prisma.user.create({
        data : {
            email : "sid6134124@gmail.com", 
            name : "aadarsh kumar"
        }
   })
}
main()
  