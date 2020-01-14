export const queries = {
  getCardSessionId: async (_: {}, __: {}, ctx: Context): Promise<String> => {
    const {
      clients,
    } = ctx
    const { id: cardSessionId } = await clients.checkout.getPaymentSession()
    return cardSessionId
  },
}

export const mutations = {
  savePaymentToken: async (
    _: {},
    { paymentTokens } : { paymentTokens: { creditCardToken: string, paymentSystem: string }[] },
    ctx: Context
  ): Promise<SavePaymentTokenPayload> => {
    const {
      clients
    } = ctx
    const { checkout } = clients
    await checkout.savePaymentToken(paymentTokens)
    return { status: 'OK' }
  },
}