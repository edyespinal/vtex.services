export async function analytics(ctx: Context, next: () => Promise<any>) {
  console.log('Analytic handler')
  const {
    clients: { analytics }
  } = ctx
  ctx.status = 200
  ctx.body = await analytics.getLiveUsers()
  ctx.set('cache-control', 'no-cache')
  await next()
}
