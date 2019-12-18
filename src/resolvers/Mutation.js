const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')

/**

async function signup(parent, args, context, info) {
  // 1 Encrypt user password
  const password = await bcrypt.hash(args.password, 10)
  // 2  Add User to database
  const user = await context.prisma.createUser({ ...args, password })
  // 3 Create Token for User
  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  // 4 Return Auth_Payload Object
  return {
    token,
    user,
  }
}

async function login(parent, args, context, info) {
  // 1 Query database for user' email
  const user = await context.prisma.user({ email: args.email })
  if (!user) {
    throw new Error('No such user found')
  }

  // 2 If User exists compare the given password
  const valid = await bcrypt.compare(args.password, user.password)
  if (!valid) {
    throw new Error('Invalid password')
  }

  //3 If password is correct, create token for user
  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  // 4 Return App_Payload Object
  return {
    token,
    user,
  }
}


function post(parent, args, context, info) {
  const userId = getUserId(context)
  return context.prisma.createLink({
    url: args.url,
    description: args.description,
    postedBy: { connect: { id: userId } },
  })
}
*/

function uploadDog(parent,args,context,info){
  return context.prisma.createDog({name: args.name, breed: args.breed});
}

module.exports = {
    uploadDog,
//  signup,
//  login,
//  post,
}


