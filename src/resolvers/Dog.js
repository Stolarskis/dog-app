function owner(parent, args, context) {
  return context.prisma.dog({ id: parent.id }).owner()
}

module.exports = {
  owner,
}