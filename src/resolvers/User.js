function links(parent, args, context) {
  return context.prisma.Owner({ id: parent.id }).Dogs()
}

module.exports = {
  links,
}