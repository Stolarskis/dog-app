function dogs(parent, args, context, info) {
    return context.prisma.dogs()
  }
  
  module.exports = {
    dogs,
  }
  