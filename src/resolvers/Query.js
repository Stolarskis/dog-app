function dogs(parent, args, context, info) {
    return context.prisma.dogs();
}

function owners(parent, args,context, info){
  return context.prisma.owners();
}
  
  module.exports = {
    dogs,
    owners,
  }
  