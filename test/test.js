const Ferrislib = require('../build')

const sys = new Ferrislib.Client({
    token: "MjgzNDcyODkzNDcy.9NiKkbutW_39gE8blHOnWHfFptL_4lcXgJ2OaBNykE5nYFdTzrAx_NNXrRnoCv74ybSyCn8slOIaoY0Kou_uWwJl6s9PqREScwZjZyspGkYJdiLGJzWean5THKN6uyFBiGrOXTW_jrFmFYQXuDJ1jbebVX3QcMpISkWHk2VcChUw9MXgMEntto_JsgjNIpsxzBwkWQNeIyMOp-aFN3i3hjmUh2kj245ePzRBE3mbdxoZ5C9vHJ-nu17Kc-EAogJPJCp-guV2i0CfKaAqIdCRMg7yCr-hNwYSmOWSGEwhauea1hQ8vN2zi7H0ReeQ98L537FWfPqu3xicjBCsYCETGw==",
})

const http69 = sys.requestHandler
//Test guild: 8796093022208
http69.request("GET", Ferrislib.Constants.Endpoints.MESSAGE())
    .then((req) => {
        console.log(req)
    })
    .catch(console.warn)

setInterval(() => {
    //to keep process alive
}, 1000 * 10)