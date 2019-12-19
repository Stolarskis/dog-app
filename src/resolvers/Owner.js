function dogs(parent, args, context) {
  return context.prisma.owner({ id: parent.id }).dogs()
}

module.exports = {
  dogs,
}