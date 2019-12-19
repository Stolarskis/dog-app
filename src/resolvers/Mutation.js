//const bcrypt = require('bcryptjs')
//const jwt = require('jsonwebtoken')
//const { APP_SECRET, getUserId } = require('../utils')


function uploadDog(parent,args,context,info){
  return context.prisma.createDog(
    {
      name: args.name,
      breed: args.breed,
      owner: {
        connect: { id: args.ownerId, }
      },
    }
  );
}

function uploadOwner(parent,args,context,info){
  return context.prisma.createOwner({ ...args});
}

/**
async function signup(parent,args,context,info){
   // 1 Encrypt user password
   const password = await bcrypt.hash(args.password, 10)
   // 2  Add User to database
   const owner = await context.prisma.createOwner({ ...args, password })
   // 3 Create Token for User
   const token = jwt.sign({ userId: owner.id }, APP_SECRET)
 
   // 4 Return Auth_Payload Object
   return {
     token,
     owner,
   }
}
*/

/**
async function login(parent,args,context,info){
  console.log(args.email)
  const owner = await context.prisma.owner({ email: args.email })
  if (!owner) {
    throw new Error('No such user found')
  }

  const valid = await bcrypt.compare(args.password, owner.password)
  if (!valid) {
    throw new Error('Invalid password')
  }

  console.log("successfully logged in user",owner.email)
  const token = jwt.sign({ userId: owner.id }, APP_SECRET)

  return {
    token,
    owner,
  }
}
*/

module.exports = {
    uploadDog,
    uploadOwner,
//  signup,
//  login,
}


