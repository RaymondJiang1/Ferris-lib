const Ferrislib = require('../build')
const sys = new Ferrislib.Client("OTU3ODU3NjAxMzE3Mzk4OTU4Njk5NjE0MDQ0MTYw.51vcGt4fTMzgqYsFdWAufi1jibaW4swIQxul8H5QsoED-K5L_esPiA8nvvRmHx4P8w3tpImQpm_yihjg3RYMXmqHwWJpP0n0gRTqSCZIDgkB9B1vcTbKTZjtxs54UbnZUajju9QtooE9uWM9R7e0X0Xl9e4MXBo6nhl4VrryEu0kKOQWdo0X-ce_Ks3sxHBas4qOr5xOCAdpCaHwU5C_VhZ8nXa9Q-g_t_lEYHYuBNfmswU4tfA9iWldQW-I5-sKPy5T1JNXBIifikszAtoou7p_hCU56sFBfvXrO8D_5uDIsV72tKOJb_Hw5vm-MNMScwUkpQn_7lkr1FTdRNkOaA==")

/** */
async function test() {
    //test guild: 957953270301057319498615357440n
    const data = await sys.fetchGuild(964160972693472498098242584576n)
    console.log(data)
}
test().catch(console.warn)


setInterval(() => {
    //keep process up
}, 1000 * 10)