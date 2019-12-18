function Owner(parent, args, context) {
  return context.prisma.Dog({ id: parent.id }).Owner()
}

module.exports = {
  postedBy,
}